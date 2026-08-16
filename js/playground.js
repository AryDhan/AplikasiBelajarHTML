/* ============================================================
   js/playground.js — HTML/CSS Code Editor + Live Preview
   Desktop: split-pane | Mobile (<768px): tab-switch
   Iframe sandboxed with allow-scripts only
   ============================================================ */

import { markPlaygroundUsed } from './state.js';
import { weeks, getWeekById } from '../data/weeks.js';

/** Default starter code */
const DEFAULT_HTML = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Halaman Saya</title>
</head>
<body>
  <h1>Halo Dunia!</h1>
  <p>Selamat datang di playground HTML & CSS.</p>
  <p>Coba edit kode di sebelah kiri dan lihat hasilnya di sini.</p>
</body>
</html>`;

const DEFAULT_CSS = `/* Tulis CSS kamu di sini */
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f0f4f8;
  color: #333;
}

h1 {
  color: #2563eb;
}`;

let currentHtml = DEFAULT_HTML;
let currentCss = DEFAULT_CSS;
let updateTimer = null;
let activeCodeTab = 'html'; // 'html' | 'css'
let activeMobileView = 'code'; // 'code' | 'preview'

/**
 * Initialize the playground UI inside #playground-root.
 */
export function initPlayground() {
  const root = document.getElementById('playground-root');
  if (!root) return;

  markPlaygroundUsed();

  root.innerHTML = buildPlaygroundHtml();

  // Get elements
  const htmlTextarea = document.getElementById('pg-html');
  const cssTextarea = document.getElementById('pg-css');
  const iframe = document.getElementById('pg-preview-frame');

  // Set initial values
  htmlTextarea.value = currentHtml;
  cssTextarea.value = currentCss;

  // Live update with debounce
  htmlTextarea.addEventListener('input', () => {
    currentHtml = htmlTextarea.value;
    scheduleUpdate(iframe);
  });

  cssTextarea.addEventListener('input', () => {
    currentCss = cssTextarea.value;
    scheduleUpdate(iframe);
  });

  // Tab support in textareas
  [htmlTextarea, cssTextarea].forEach(ta => {
    ta.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = ta.selectionStart;
        const end = ta.selectionEnd;
        ta.value = ta.value.substring(0, start) + '  ' + ta.value.substring(end);
        ta.selectionStart = ta.selectionEnd = start + 2;
        ta.dispatchEvent(new Event('input'));
      }
    });
  });

  // Code tabs (HTML/CSS)
  setupCodeTabs();

  // Mobile view tabs
  setupMobileTabs();

  // Toolbar buttons
  setupToolbar(htmlTextarea, cssTextarea, iframe);

  // Initial render
  updatePreview(iframe);
}

/**
 * Build the playground HTML structure.
 */
function buildPlaygroundHtml() {
  // Build example buttons from available modules
  const exampleButtons = weeks
    .filter(w => w.type === 'regular')
    .slice(0, 8)
    .map(w => `
      <button class="btn btn--ghost btn--sm playground__example-btn" data-week="${w.id}">
        ${w.icon} M${w.id}
      </button>
    `).join('');

  return `
    <!-- Toolbar -->
    <div class="playground__toolbar">
      <div class="playground__toolbar-group">
        <button class="btn btn--primary btn--sm" id="pg-run" title="Jalankan kode">
          ▶ Jalankan
        </button>
        <button class="btn btn--secondary btn--sm" id="pg-reset" title="Reset ke default">
          🔄 Reset
        </button>
      </div>
      <div class="playground__toolbar-divider"></div>
      <div class="playground__toolbar-group" style="flex-wrap:wrap">
        <span class="text-sm text-muted">Contoh:</span>
        ${exampleButtons}
      </div>
    </div>

    <!-- Mobile Tabs (visible <768px) -->
    <div class="playground__mobile-tabs" id="pg-mobile-tabs">
      <button class="playground__mobile-tab playground__mobile-tab--active" data-view="code">
        💻 Code
      </button>
      <button class="playground__mobile-tab" data-view="preview">
        👁️ Preview
      </button>
    </div>

    <!-- Editor Area -->
    <div class="playground__editor-area" id="pg-editor-area">
      <!-- Input Panel -->
      <div class="playground__input" id="pg-input-panel">
        <div class="playground__input-tabs">
          <button class="playground__input-tab playground__input-tab--active" data-lang="html">
            HTML
          </button>
          <button class="playground__input-tab" data-lang="css">
            CSS
          </button>
        </div>
        <textarea
          class="playground__textarea playground__textarea--active"
          id="pg-html"
          placeholder="Tulis HTML di sini..."
          spellcheck="false"
          aria-label="Editor HTML"
        ></textarea>
        <textarea
          class="playground__textarea"
          id="pg-css"
          placeholder="Tulis CSS di sini..."
          spellcheck="false"
          aria-label="Editor CSS"
        ></textarea>
      </div>

      <!-- Preview Panel -->
      <div class="playground__preview" id="pg-preview-panel">
        <div class="playground__preview-header">
          <div class="playground__preview-dots">
            <span class="playground__preview-dot playground__preview-dot--red"></span>
            <span class="playground__preview-dot playground__preview-dot--yellow"></span>
            <span class="playground__preview-dot playground__preview-dot--green"></span>
          </div>
          <span class="playground__preview-label">Preview</span>
        </div>
        <iframe
          id="pg-preview-frame"
          class="playground__iframe"
          sandbox="allow-scripts"
          title="Preview hasil kode"
        ></iframe>
      </div>
    </div>

    <!-- Tips -->
    <div class="playground__tips playground__tips--visible" id="pg-tips">
      <div class="playground__tips-title">💡 Tips</div>
      <ul class="playground__tips-list">
        <li>Gunakan Tab untuk indentasi kode</li>
        <li>Kode akan otomatis di-update saat kamu berhenti mengetik</li>
        <li>Klik tombol contoh di atas untuk memuat kode dari modul tertentu</li>
        <li>CSS yang kamu tulis akan otomatis diterapkan pada HTML</li>
      </ul>
    </div>
  `;
}

/**
 * Schedule a preview update (debounced 300ms).
 */
function scheduleUpdate(iframe) {
  clearTimeout(updateTimer);
  updateTimer = setTimeout(() => updatePreview(iframe), 300);
}

/**
 * Update the iframe preview with current HTML + CSS.
 */
function updatePreview(iframe) {
  if (!iframe) return;

  const combined = buildPreviewDocument(currentHtml, currentCss);
  const blob = new Blob([combined], { type: 'text/html' });
  const url = URL.createObjectURL(blob);

  // Revoke previous blob URL
  if (iframe._blobUrl) {
    URL.revokeObjectURL(iframe._blobUrl);
  }

  iframe.src = url;
  iframe._blobUrl = url;
}

/**
 * Build a complete HTML document combining user HTML and CSS.
 */
function buildPreviewDocument(html, css) {
  // If user's HTML has a <head> tag, inject CSS there
  if (html.includes('<head>') || html.includes('<head ')) {
    return html.replace(/<\/head>/i, `<style>${css}</style></head>`);
  }

  // Otherwise wrap in a full document
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>${css}</style>
</head>
<body>
${html}
</body>
</html>`;
}

/**
 * Setup HTML/CSS tab switching in the input panel.
 */
function setupCodeTabs() {
  document.querySelectorAll('.playground__input-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const lang = tab.dataset.lang;
      activeCodeTab = lang;

      // Update tab active state
      document.querySelectorAll('.playground__input-tab').forEach(t =>
        t.classList.toggle('playground__input-tab--active', t.dataset.lang === lang)
      );

      // Show/hide textareas
      document.getElementById('pg-html').classList.toggle('playground__textarea--active', lang === 'html');
      document.getElementById('pg-css').classList.toggle('playground__textarea--active', lang === 'css');
    });
  });
}

/**
 * Setup mobile view tab switching (Code <-> Preview).
 */
function setupMobileTabs() {
  document.querySelectorAll('.playground__mobile-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const view = tab.dataset.view;
      activeMobileView = view;

      // Update tab active state
      document.querySelectorAll('.playground__mobile-tab').forEach(t =>
        t.classList.toggle('playground__mobile-tab--active', t.dataset.view === view)
      );

      // Show/hide panels
      const inputPanel = document.getElementById('pg-input-panel');
      const previewPanel = document.getElementById('pg-preview-panel');

      if (view === 'code') {
        inputPanel?.classList.remove('playground__input--mobile-hidden');
        previewPanel?.classList.add('playground__preview--mobile-hidden');
      } else {
        inputPanel?.classList.add('playground__input--mobile-hidden');
        previewPanel?.classList.remove('playground__preview--mobile-hidden');
        // Force preview update when switching to preview
        const iframe = document.getElementById('pg-preview-frame');
        updatePreview(iframe);
      }
    });
  });
}

/**
 * Setup toolbar button handlers.
 */
function setupToolbar(htmlTextarea, cssTextarea, iframe) {
  // Run button
  document.getElementById('pg-run')?.addEventListener('click', () => {
    updatePreview(iframe);
  });

  // Reset button
  document.getElementById('pg-reset')?.addEventListener('click', () => {
    currentHtml = DEFAULT_HTML;
    currentCss = DEFAULT_CSS;
    htmlTextarea.value = currentHtml;
    cssTextarea.value = currentCss;
    updatePreview(iframe);
  });

  // Example buttons
  document.querySelectorAll('.playground__example-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const weekId = parseInt(btn.dataset.week, 10);
      await loadExample(weekId, htmlTextarea, cssTextarea, iframe);
    });
  });
}

/**
 * Load an example from module data.
 */
async function loadExample(weekId, htmlTextarea, cssTextarea, iframe) {
  try {
    const mod = await import(`../data/modules/week${String(weekId).padStart(2, '0')}.js`);
    const data = mod.default || mod[`week${String(weekId).padStart(2, '0')}`];

    if (data?.playgroundExample) {
      currentHtml = data.playgroundExample.html || DEFAULT_HTML;
      currentCss = data.playgroundExample.css || '';
      htmlTextarea.value = currentHtml;
      cssTextarea.value = currentCss;
      updatePreview(iframe);

      // Show notification
      const tips = document.getElementById('pg-tips');
      if (tips) {
        tips.classList.add('playground__tips--visible');
        tips.querySelector('.playground__tips-title').textContent = `✅ Contoh Minggu ${weekId} dimuat!`;
      }
    }
  } catch {
    console.warn(`[Playground] Contoh untuk minggu ${weekId} belum tersedia.`);
    const tips = document.getElementById('pg-tips');
    if (tips) {
      tips.classList.add('playground__tips--visible');
      tips.querySelector('.playground__tips-title').textContent = `⚠️ Contoh untuk Minggu ${weekId} belum tersedia.`;
    }
  }
}
