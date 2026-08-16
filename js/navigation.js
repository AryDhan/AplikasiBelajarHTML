/* ============================================================
   js/navigation.js — Sidebar Navigation + Breadcrumb
   Generates sidebar tree from weeks data, manages active state
   ============================================================ */

import { weeks } from '../data/weeks.js';
import { isModuleComplete, getCompletionPercent, getQuizScore } from './state.js';

/**
 * Build sidebar navigation HTML.
 * @returns {string}
 */
export function buildSidebarNav() {
  const mainLinks = [
    { href: '#dashboard', icon: '🏠', label: 'Beranda' },
    { href: '#about', icon: 'ℹ️', label: 'Tentang MK' },
    { href: '#roadmap', icon: '🗺️', label: 'Roadmap & CPMK' },
  ];

  const toolLinks = [
    { href: '#playground', icon: '🧪', label: 'Playground' },
    { href: '#quiz', icon: '❓', label: 'Quiz Center' },
    { href: '#projects', icon: '🚀', label: 'Project Showcase' },
    { href: '#evaluation', icon: '📊', label: 'Evaluasi' },
    { href: '#references', icon: '📚', label: 'Referensi' },
  ];

  const mainLinksHtml = mainLinks.map(l =>
    `<a href="${l.href}" class="sidebar__link" data-route="${l.href.slice(1)}">
      <span class="sidebar__icon">${l.icon}</span>
      <span>${l.label}</span>
    </a>`
  ).join('');

  const weekLinksHtml = buildWeekLinks();

  const toolLinksHtml = toolLinks.map(l =>
    `<a href="${l.href}" class="sidebar__link" data-route="${l.href.slice(1)}">
      <span class="sidebar__icon">${l.icon}</span>
      <span>${l.label}</span>
    </a>`
  ).join('');

  return `
    <div class="sidebar__section">
      <div class="sidebar__section-title">Menu Utama</div>
      ${mainLinksHtml}
    </div>
    <div class="sidebar__section">
      <div class="sidebar__section-title">Modul Mingguan</div>
      ${weekLinksHtml}
    </div>
    <div class="sidebar__section">
      <div class="sidebar__section-title">Fitur</div>
      ${toolLinksHtml}
    </div>
  `;
}

/**
 * Build week navigation links.
 */
function buildWeekLinks() {
  return weeks.map(week => {
    const isComplete = isModuleComplete(week.id);
    const isExam = week.type === 'uts' || week.type === 'uas';

    let statusBadge = '';
    if (isComplete) {
      statusBadge = '<span class="sidebar__badge" style="background-color:var(--color-success-subtle);color:var(--color-success)">✓</span>';
    } else if (isExam) {
      statusBadge = `<span class="sidebar__badge">${week.type.toUpperCase()}</span>`;
    }

    const icon = isExam ? '📝' : week.icon;

    return `
      <a href="#module/${week.id}" class="sidebar__link" data-route="module/${week.id}">
        <span class="sidebar__icon">${icon}</span>
        <span>M${week.id}: ${week.shortTitle}</span>
        ${statusBadge}
      </a>
    `;
  }).join('');
}

/**
 * Build sidebar footer with progress bar.
 * @returns {string}
 */
export function buildSidebarFooter() {
  const percent = getCompletionPercent();
  return `
    <div class="sidebar__progress">
      <div class="sidebar__progress-label">
        <span>Progress Belajar</span>
        <span>${percent}%</span>
      </div>
      <div class="sidebar__progress-bar">
        <div class="sidebar__progress-fill" style="width: ${percent}%"></div>
      </div>
    </div>
  `;
}

/**
 * Update the active state in sidebar.
 * @param {string} routeKey - e.g. 'dashboard', 'module/1'
 */
export function updateActiveLink(routeKey) {
  document.querySelectorAll('.sidebar__link').forEach(link => {
    const linkRoute = link.dataset.route;
    if (linkRoute === routeKey) {
      link.classList.add('sidebar__link--active');
    } else {
      link.classList.remove('sidebar__link--active');
    }
  });
}

/**
 * Update sidebar footer (progress bar).
 */
export function refreshSidebarFooter() {
  const footer = document.getElementById('sidebar-footer');
  if (footer) {
    footer.innerHTML = buildSidebarFooter();
  }
}

/**
 * Build breadcrumb HTML.
 * @param {Array<{label: string, href?: string}>} items
 * @returns {string}
 */
export function buildBreadcrumb(items) {
  return items.map((item, i) => {
    const isLast = i === items.length - 1;
    const itemHtml = isLast
      ? `<span class="header__breadcrumb-item header__breadcrumb-item--active">${item.label}</span>`
      : `<a href="${item.href || '#dashboard'}" class="header__breadcrumb-item">${item.label}</a>`;

    const sep = !isLast ? '<span class="header__breadcrumb-sep">›</span>' : '';

    return itemHtml + sep;
  }).join('');
}

/**
 * Setup mobile sidebar toggle.
 */
export function setupMobileSidebar() {
  const menuBtn = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');

  if (!menuBtn || !sidebar) return;

  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--open');
    overlay?.classList.toggle('sidebar-overlay--visible');
  });

  // Close sidebar when clicking overlay
  overlay?.addEventListener('click', () => {
    sidebar.classList.remove('sidebar--open');
    overlay.classList.remove('sidebar-overlay--visible');
  });

  // Close sidebar when clicking a link (mobile)
  sidebar.addEventListener('click', (e) => {
    if (e.target.closest('.sidebar__link')) {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('sidebar--open');
        overlay?.classList.remove('sidebar-overlay--visible');
      }
    }
  });
}

/**
 * Render the sidebar contents into the DOM.
 */
export function renderSidebar() {
  const nav = document.getElementById('sidebar-nav');
  const footer = document.getElementById('sidebar-footer');

  if (nav) nav.innerHTML = buildSidebarNav();
  if (footer) footer.innerHTML = buildSidebarFooter();
}
