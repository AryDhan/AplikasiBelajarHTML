/* ============================================================
   js/theme.js — Light/Dark Mode Toggle
   Detects system preference, persists choice, applies to DOM
   ============================================================ */

import { getThemePreference, setThemePreference } from './state.js';

/** @type {'light'|'dark'} */
let currentTheme = 'light';

/**
 * Initialize theme — apply saved preference or system default.
 */
export function initTheme() {
  const saved = getThemePreference();

  if (saved === 'light' || saved === 'dark') {
    currentTheme = saved;
  } else {
    // Detect system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    currentTheme = prefersDark ? 'dark' : 'light';
  }

  applyTheme(currentTheme);

  // Listen for system preference changes (only when no explicit preference)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (getThemePreference() === null) {
      currentTheme = e.matches ? 'dark' : 'light';
      applyTheme(currentTheme);
      updateToggleButton();
    }
  });
}

/**
 * Apply theme to DOM.
 * @param {'light'|'dark'} theme
 */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

/**
 * Toggle between light and dark mode.
 */
export function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(currentTheme);
  setThemePreference(currentTheme);
  updateToggleButton();
}

/**
 * Update the theme toggle button icon.
 */
function updateToggleButton() {
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
    btn.setAttribute('aria-label',
      currentTheme === 'dark' ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'
    );
  }
}

/**
 * Get current theme.
 * @returns {'light'|'dark'}
 */
export function getCurrentTheme() {
  return currentTheme;
}

/**
 * Setup theme toggle button event listener.
 */
export function setupThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', toggleTheme);
    updateToggleButton();
  }
}
