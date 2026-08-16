/* ============================================================
   js/ui.js — Reusable UI Component Builders
   Pure functions that return HTML strings
   ============================================================ */

/**
 * Create a page header with title, subtitle, and optional meta.
 */
export function pageHeader(title, subtitle = '', metaHtml = '') {
  return `
    <div class="page-header animate-fade-in">
      <h1 class="page-header__title">${title}</h1>
      ${subtitle ? `<p class="page-header__subtitle">${subtitle}</p>` : ''}
      ${metaHtml ? `<div class="page-header__meta">${metaHtml}</div>` : ''}
    </div>
  `;
}

/**
 * Create a card component.
 */
export function card({ icon = '', title = '', subtitle = '', body = '', footer = '', clickable = false, highlight = false, className = '', onclick = '' } = {}) {
  const classes = ['card'];
  if (clickable) classes.push('card--clickable');
  if (highlight) classes.push('card--highlight');
  if (className) classes.push(className);

  return `
    <div class="${classes.join(' ')}" ${onclick ? `onclick="${onclick}"` : ''}>
      ${(icon || title) ? `
        <div class="card__header">
          ${icon ? `<div class="card__icon">${icon}</div>` : ''}
          <div>
            ${title ? `<div class="card__title">${title}</div>` : ''}
            ${subtitle ? `<div class="card__subtitle">${subtitle}</div>` : ''}
          </div>
        </div>
      ` : ''}
      ${body ? `<div class="card__body">${body}</div>` : ''}
      ${footer ? `<div class="card__footer">${footer}</div>` : ''}
    </div>
  `;
}

/**
 * Create a stat card.
 */
export function statCard(icon, value, label) {
  return `
    <div class="stat">
      <div class="stat__icon">${icon}</div>
      <div class="stat__value">${value}</div>
      <div class="stat__label">${label}</div>
    </div>
  `;
}

/**
 * Create a badge.
 */
export function badge(text, variant = 'primary') {
  return `<span class="badge badge--${variant}">${text}</span>`;
}

/**
 * Create a button.
 */
export function button(text, { variant = 'primary', size = '', block = false, icon = '', onclick = '', id = '', disabled = false, className = '' } = {}) {
  const classes = ['btn', `btn--${variant}`];
  if (size) classes.push(`btn--${size}`);
  if (block) classes.push('btn--block');
  if (className) classes.push(className);

  return `
    <button class="${classes.join(' ')}" ${id ? `id="${id}"` : ''} ${onclick ? `onclick="${onclick}"` : ''} ${disabled ? 'disabled' : ''}>
      ${icon ? `<span>${icon}</span>` : ''}${text}
    </button>
  `;
}

/**
 * Create a link styled as button.
 */
export function linkButton(text, href, { variant = 'primary', size = '', icon = '' } = {}) {
  const classes = ['btn', `btn--${variant}`];
  if (size) classes.push(`btn--${size}`);

  return `
    <a href="${href}" class="${classes.join(' ')}">
      ${icon ? `<span>${icon}</span>` : ''}${text}
    </a>
  `;
}

/**
 * Create an alert box.
 */
export function alert(content, { variant = 'info', icon = '', title = '' } = {}) {
  const icons = { info: '💡', success: '✅', warning: '⚠️', error: '❌' };
  const alertIcon = icon || icons[variant] || icons.info;

  return `
    <div class="alert alert--${variant}">
      <div class="alert__icon">${alertIcon}</div>
      <div class="alert__content">
        ${title ? `<div class="alert__title">${title}</div>` : ''}
        <div>${content}</div>
      </div>
    </div>
  `;
}

/**
 * Create a tip box.
 */
export function tipBox(content, { variant = 'info', icon = '' } = {}) {
  const icons = { info: '💡', warning: '⚠️', error: '❌', success: '✅' };
  return `
    <div class="tip-box tip-box--${variant}">
      <div class="tip-box__icon">${icon || icons[variant]}</div>
      <div class="tip-box__content">${content}</div>
    </div>
  `;
}

/**
 * Create a code block with header and copy button.
 */
export function codeBlock(code, language = 'html') {
  const escaped = escapeHtml(code);
  return `
    <div class="code-block">
      <div class="code-block__header">
        <span class="code-block__language">${language}</span>
        <button class="code-block__copy" onclick="window.__copyCode(this)" data-code="${encodeURIComponent(code)}">
          📋 Salin
        </button>
      </div>
      <pre><code>${escaped}</code></pre>
    </div>
  `;
}

/**
 * Create an output preview panel (browser-like chrome).
 */
export function outputPreview(html, label = 'Output') {
  return `
    <div class="output-preview">
      <div class="output-preview__header">
        <div class="output-preview__dots">
          <span class="output-preview__dot output-preview__dot--red"></span>
          <span class="output-preview__dot output-preview__dot--yellow"></span>
          <span class="output-preview__dot output-preview__dot--green"></span>
        </div>
        ${label}
      </div>
      <div class="output-preview__body">${html}</div>
    </div>
  `;
}

/**
 * Create an accordion.
 */
export function accordion(items) {
  const itemsHtml = items.map((item, i) => `
    <div class="accordion__item">
      <button class="accordion__trigger" 
              aria-expanded="false" 
              onclick="window.__toggleAccordion(this)">
        <span>${item.title}</span>
        <span class="accordion__trigger-icon">▼</span>
      </button>
      <div class="accordion__panel" role="region">
        <div class="accordion__content">${item.content}</div>
      </div>
    </div>
  `).join('');

  return `<div class="accordion">${itemsHtml}</div>`;
}

/**
 * Create tabs.
 */
export function tabs(tabItems, id = 'tabs') {
  const tabList = tabItems.map((t, i) => `
    <button class="tabs__tab ${i === 0 ? 'tabs__tab--active' : ''}" 
            data-tab="${id}-panel-${i}"
            onclick="window.__switchTab(this, '${id}')">
      ${t.label}
    </button>
  `).join('');

  const panels = tabItems.map((t, i) => `
    <div class="tabs__panel ${i === 0 ? 'tabs__panel--active' : ''}" 
         id="${id}-panel-${i}">
      ${t.content}
    </div>
  `).join('');

  return `
    <div class="tabs" id="${id}">
      <div class="tabs__list">${tabList}</div>
      ${panels}
    </div>
  `;
}

/**
 * Create a progress bar.
 */
export function progressBar(percent, label = '', showValue = true) {
  return `
    <div class="progress">
      ${(label || showValue) ? `
        <div class="progress__label">
          <span class="progress__label-text">${label}</span>
          ${showValue ? `<span class="progress__label-value">${percent}%</span>` : ''}
        </div>
      ` : ''}
      <div class="progress__bar">
        <div class="progress__fill" style="width: ${Math.min(100, Math.max(0, percent))}%"></div>
      </div>
    </div>
  `;
}

/**
 * Create a skeleton loader.
 */
export function skeleton(type = 'text') {
  if (type === 'card') {
    return `
      <div class="skeleton">
        <div class="skeleton__line skeleton__line--card"></div>
      </div>
    `;
  }
  if (type === 'grid') {
    return `
      <div class="skeleton__grid">
        ${Array(6).fill('<div class="skeleton__line skeleton__line--card"></div>').join('')}
      </div>
    `;
  }
  return `
    <div class="skeleton">
      <div class="skeleton__line skeleton__line--title"></div>
      <div class="skeleton__line skeleton__line--text"></div>
      <div class="skeleton__line skeleton__line--text"></div>
      <div class="skeleton__line skeleton__line--short"></div>
    </div>
  `;
}

/**
 * Create an empty state.
 */
export function emptyState(icon, title, description, actionHtml = '') {
  return `
    <div class="empty-state">
      <div class="empty-state__icon">${icon}</div>
      <h3 class="empty-state__title">${title}</h3>
      <p class="empty-state__desc">${description}</p>
      ${actionHtml}
    </div>
  `;
}

/**
 * Create a divider.
 */
export function divider() {
  return '<hr class="divider">';
}

// ─── Global Helpers (attached to window for onclick handlers) ───

/**
 * Copy code to clipboard.
 */
window.__copyCode = async function(btn) {
  const code = decodeURIComponent(btn.dataset.code);
  try {
    await navigator.clipboard.writeText(code);
    btn.innerHTML = '✅ Tersalin!';
    btn.classList.add('code-block__copy--copied');
    setTimeout(() => {
      btn.innerHTML = '📋 Salin';
      btn.classList.remove('code-block__copy--copied');
    }, 2000);
  } catch {
    // Fallback for non-HTTPS or older browsers
    const textarea = document.createElement('textarea');
    textarea.value = code;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    btn.innerHTML = '✅ Tersalin!';
    setTimeout(() => { btn.innerHTML = '📋 Salin'; }, 2000);
  }
};

/**
 * Toggle accordion panel.
 */
window.__toggleAccordion = function(trigger) {
  const expanded = trigger.getAttribute('aria-expanded') === 'true';
  const panel = trigger.nextElementSibling;

  trigger.setAttribute('aria-expanded', !expanded);

  if (!expanded) {
    panel.classList.add('accordion__panel--open');
  } else {
    panel.classList.remove('accordion__panel--open');
  }
};

/**
 * Switch tab.
 */
window.__switchTab = function(tab, tabsId) {
  const container = document.getElementById(tabsId);
  if (!container) return;

  // Deactivate all tabs and panels
  container.querySelectorAll('.tabs__tab').forEach(t => t.classList.remove('tabs__tab--active'));
  container.querySelectorAll('.tabs__panel').forEach(p => p.classList.remove('tabs__panel--active'));

  // Activate clicked tab and its panel
  tab.classList.add('tabs__tab--active');
  const panelId = tab.dataset.tab;
  const panel = document.getElementById(panelId);
  if (panel) panel.classList.add('tabs__panel--active');
};

// ─── Utility ────────────────────────────────────────────────

/**
 * Escape HTML entities for safe rendering inside code blocks.
 */
export function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
