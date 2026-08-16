/* ============================================================
   js/router.js — Hash-Based SPA Router
   Handles route resolution, parameter validation, 404 fallback
   ============================================================ */

import {
  renderDashboard, renderAbout, renderRoadmap, renderModule,
  renderPlayground, renderQuizHub, renderQuiz, renderProjects,
  renderEvaluation, renderReferences, renderNotFound
} from './renderer.js';
import { updateActiveLink, buildBreadcrumb } from './navigation.js';

/**
 * Route registry.
 * Each key maps to a renderer function.
 */
const ROUTES = {
  'dashboard':   { render: renderDashboard, label: 'Beranda' },
  'about':       { render: renderAbout, label: 'Tentang MK' },
  'roadmap':     { render: renderRoadmap, label: 'Roadmap & CPMK' },
  'module':      { render: renderModule, label: 'Modul', parameterized: true },
  'playground':  { render: renderPlayground, label: 'Playground' },
  'quiz':        { render: null, label: 'Quiz', parameterized: true }, // handled below
  'projects':    { render: renderProjects, label: 'Project Showcase' },
  'evaluation':  { render: renderEvaluation, label: 'Evaluasi' },
  'references':  { render: renderReferences, label: 'Referensi' }
};

// Dev assertion: validate all expected routes are registered
console.assert(
  Object.keys(ROUTES).length === 9,
  `[Router] Expected 9 routes, got ${Object.keys(ROUTES).length}`
);

/**
 * Resolve a hash string to a route handler and parameters.
 * @param {string} hash - e.g. '#module/1', '#dashboard', '#quiz/5'
 * @returns {{ handler: Function, params: Object, breadcrumb: Array }}
 */
function resolveRoute(hash) {
  const clean = (hash || '').replace(/^#\/?/, '').trim();

  if (!clean) {
    return {
      handler: renderDashboard,
      params: {},
      routeKey: 'dashboard',
      breadcrumb: [{ label: 'Beranda' }]
    };
  }

  const parts = clean.split('/');
  const page = parts[0];
  const param = parts[1];

  // 1. Route existence check
  if (!ROUTES[page]) {
    return {
      handler: renderNotFound,
      params: { attempted: hash },
      routeKey: '',
      breadcrumb: [{ label: 'Beranda', href: '#dashboard' }, { label: '404' }]
    };
  }

  const route = ROUTES[page];

  // 2. Parameterized routes: module and quiz
  if (page === 'module') {
    const weekId = parseInt(param, 10);
    if (isNaN(weekId) || weekId < 1 || weekId > 16) {
      return {
        handler: renderNotFound,
        params: { attempted: hash },
        routeKey: '',
        breadcrumb: [{ label: 'Beranda', href: '#dashboard' }, { label: '404' }]
      };
    }
    return {
      handler: renderModule,
      params: { weekId },
      routeKey: `module/${weekId}`,
      breadcrumb: [
        { label: 'Beranda', href: '#dashboard' },
        { label: 'Modul' },
        { label: `Minggu ${weekId}` }
      ]
    };
  }

  if (page === 'quiz') {
    if (!param) {
      // Quiz hub
      return {
        handler: renderQuizHub,
        params: {},
        routeKey: 'quiz',
        breadcrumb: [{ label: 'Beranda', href: '#dashboard' }, { label: 'Quiz Center' }]
      };
    }

    const weekId = parseInt(param, 10);
    if (isNaN(weekId) || weekId < 1 || weekId > 16) {
      return {
        handler: renderNotFound,
        params: { attempted: hash },
        routeKey: '',
        breadcrumb: [{ label: 'Beranda', href: '#dashboard' }, { label: '404' }]
      };
    }

    // Quiz not available for evaluation weeks
    if (weekId === 8 || weekId === 16) {
      return {
        handler: renderNotFound,
        params: { attempted: hash, message: 'Quiz tidak tersedia untuk minggu evaluasi.' },
        routeKey: '',
        breadcrumb: [{ label: 'Beranda', href: '#dashboard' }, { label: 'Quiz' }, { label: '404' }]
      };
    }

    return {
      handler: renderQuiz,
      params: { weekId },
      routeKey: `quiz/${weekId}`,
      breadcrumb: [
        { label: 'Beranda', href: '#dashboard' },
        { label: 'Quiz Center', href: '#quiz' },
        { label: `Quiz Minggu ${weekId}` }
      ]
    };
  }

  // 3. Non-parameterized routes
  return {
    handler: route.render,
    params: {},
    routeKey: page,
    breadcrumb: [{ label: 'Beranda', href: '#dashboard' }, { label: route.label }]
  };
}

/**
 * Navigate to the current hash route.
 */
async function handleNavigation() {
  const hash = window.location.hash;
  const { handler, params, routeKey, breadcrumb } = resolveRoute(hash);

  // Show skeleton while loading
  const content = document.getElementById('app-content');
  if (content) {
    content.innerHTML = `
      <div class="skeleton" style="padding:var(--space-8) 0">
        <div class="skeleton__line skeleton__line--title"></div>
        <div class="skeleton__line skeleton__line--text"></div>
        <div class="skeleton__line skeleton__line--text"></div>
        <div class="skeleton__line skeleton__line--short"></div>
      </div>
    `;
  }

  // Update breadcrumb
  const breadcrumbEl = document.getElementById('breadcrumb');
  if (breadcrumbEl) {
    breadcrumbEl.innerHTML = buildBreadcrumb(breadcrumb);
  }

  // Update active sidebar link
  updateActiveLink(routeKey);

  // Render page
  try {
    let html;
    if (params.weekId !== undefined) {
      html = await handler(params.weekId);
    } else {
      html = await handler(params);
    }

    if (content) {
      content.innerHTML = html;
      content.scrollTop = 0;
    }

    // Scroll main area to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Post-render hooks for interactive pages
    if (routeKey === 'playground' || hash.startsWith('#playground')) {
      try {
        const pg = await import('./playground.js');
        pg.initPlayground();
      } catch (e) {
        console.warn('[Router] Playground module not loaded:', e.message);
      }
    }

    if (routeKey.startsWith('quiz/') && params.weekId) {
      try {
        const qz = await import('./quiz.js');
        qz.initQuiz(params.weekId);
      } catch (e) {
        console.warn('[Router] Quiz module not loaded:', e.message);
      }
    }
  } catch (error) {
    console.error('[Router] Render error:', error);
    if (content) {
      content.innerHTML = renderNotFound({
        attempted: hash,
        message: 'Terjadi kesalahan saat memuat halaman.'
      });
    }
  }
}

/**
 * Initialize router — listen for hash changes and handle initial route.
 */
export function initRouter() {
  window.addEventListener('hashchange', handleNavigation);

  // Handle initial load
  if (!window.location.hash) {
    window.location.hash = '#dashboard';
  } else {
    handleNavigation();
  }
}
