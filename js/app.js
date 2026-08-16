/* ============================================================
   js/app.js — Application Entry Point
   Boot sequence: state → theme → sidebar → router
   ============================================================ */

import { initStorage, isUsingFallback } from './state.js';
import { initTheme, setupThemeToggle } from './theme.js';
import { renderSidebar, setupMobileSidebar } from './navigation.js';
import { initRouter } from './router.js';

/**
 * Application boot sequence.
 */
function boot() {
  console.log('[App] Booting WebProg I Platform...');

  // 1. Initialize storage (localStorage or fallback)
  const storageResult = initStorage();
  console.log(`[App] Storage: ${storageResult.available ? 'localStorage' : 'in-memory fallback'}`);

  // Show storage warning banner if fallback
  if (!storageResult.available || isUsingFallback()) {
    const banner = document.getElementById('storage-banner');
    if (banner) {
      banner.classList.add('storage-banner--visible');
    }
  }

  // 2. Initialize theme (light/dark)
  initTheme();
  setupThemeToggle();
  console.log('[App] Theme initialized');

  // 3. Render sidebar navigation
  renderSidebar();
  setupMobileSidebar();
  console.log('[App] Sidebar rendered');

  // 4. Initialize router (handles initial route)
  initRouter();
  console.log('[App] Router initialized');

  // 5. Setup global event listeners
  setupGlobalListeners();

  // 6. Log boot complete
  console.log('[App] ✅ Boot complete');
}

/**
 * Setup global event listeners and helpers.
 */
function setupGlobalListeners() {
  // Dismiss storage banner
  const dismissBtn = document.getElementById('storage-banner-dismiss');
  if (dismissBtn) {
    dismissBtn.addEventListener('click', () => {
      const banner = document.getElementById('storage-banner');
      if (banner) banner.classList.remove('storage-banner--visible');
    });
  }

  // Handle keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Escape closes mobile sidebar
    if (e.key === 'Escape') {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('sidebar-overlay');
      if (sidebar?.classList.contains('sidebar--open')) {
        sidebar.classList.remove('sidebar--open');
        overlay?.classList.remove('sidebar-overlay--visible');
      }
    }
  });

  // Run smoke tests if ?debug=true
  const params = new URLSearchParams(window.location.search);
  if (params.get('debug') === 'true') {
    import('./smoke-test.js')
      .then(m => m.runSmokeTests())
      .catch(e => console.warn('[App] Smoke test module not available:', e.message));
  }
}

// ─── Boot on DOM Ready ─────────────────────────────────────

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
