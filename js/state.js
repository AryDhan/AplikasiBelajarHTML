/* ============================================================
   js/state.js — State Management + localStorage Wrapper
   Handles progress tracking with fallback to in-memory storage
   ============================================================ */

const STORAGE_KEY = 'webprog1_state';

/** @type {Storage|null} */
let storage = null;

/** In-memory fallback when localStorage unavailable */
let memoryStore = {};

/** Whether we're using the fallback */
let usingFallback = false;

/**
 * Initialize storage — detect localStorage availability.
 * @returns {{ available: boolean }} Whether persistent storage is available.
 */
export function initStorage() {
  try {
    const testKey = '__webprog1_storage_test__';
    localStorage.setItem(testKey, '1');
    localStorage.removeItem(testKey);
    storage = localStorage;
    usingFallback = false;

    // Load existing data into memoryStore for fast access
    const raw = storage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        memoryStore = JSON.parse(raw);
      } catch {
        memoryStore = createDefaultState();
        persist();
      }
    } else {
      memoryStore = createDefaultState();
      persist();
    }

    return { available: true };
  } catch {
    usingFallback = true;
    memoryStore = createDefaultState();
    console.warn('[State] localStorage unavailable — using in-memory fallback.');
    return { available: false };
  }
}

/**
 * @returns {boolean} Whether storage is using in-memory fallback.
 */
export function isUsingFallback() {
  return usingFallback;
}

/**
 * Create default empty state.
 */
function createDefaultState() {
  return {
    completedModules: [],   // [1, 3, 5, ...]
    quizScores: {},         // { "1": { score: 4, total: 5, date: "..." }, ... }
    playgroundUsed: false,
    lastVisitedModule: null,
    theme: null             // null = system, 'light', 'dark'
  };
}

/**
 * Persist memoryStore to localStorage (if available).
 */
function persist() {
  if (!usingFallback && storage) {
    try {
      storage.setItem(STORAGE_KEY, JSON.stringify(memoryStore));
    } catch (e) {
      console.warn('[State] Failed to persist:', e.message);
    }
  }
}

// ─── Public API ─────────────────────────────────────────────

/**
 * Mark a module (week) as completed.
 * @param {number} weekId
 */
export function markModuleComplete(weekId) {
  if (!memoryStore.completedModules.includes(weekId)) {
    memoryStore.completedModules.push(weekId);
    memoryStore.completedModules.sort((a, b) => a - b);
    persist();
  }
}

/**
 * Check if a module is completed.
 * @param {number} weekId
 * @returns {boolean}
 */
export function isModuleComplete(weekId) {
  return memoryStore.completedModules.includes(weekId);
}

/**
 * Get list of completed module IDs.
 * @returns {number[]}
 */
export function getCompletedModules() {
  return [...memoryStore.completedModules];
}

/**
 * Get completion percentage (out of 14 regular weeks).
 * @returns {number} 0-100
 */
export function getCompletionPercent() {
  const totalRegular = 14; // weeks 1-7, 9-15
  return Math.round((memoryStore.completedModules.filter(id => id !== 8 && id !== 16).length / totalRegular) * 100);
}

/**
 * Save quiz score for a week.
 * @param {number} weekId
 * @param {number} score
 * @param {number} total
 */
export function saveQuizScore(weekId, score, total) {
  memoryStore.quizScores[String(weekId)] = {
    score,
    total,
    date: new Date().toISOString()
  };
  persist();
}

/**
 * Get quiz score for a week.
 * @param {number} weekId
 * @returns {{ score: number, total: number, date: string }|null}
 */
export function getQuizScore(weekId) {
  return memoryStore.quizScores[String(weekId)] || null;
}

/**
 * Get all quiz scores.
 * @returns {Object}
 */
export function getAllQuizScores() {
  return { ...memoryStore.quizScores };
}

/**
 * Get average quiz score percentage.
 * @returns {number} 0-100, or 0 if no quizzes taken
 */
export function getAverageQuizScore() {
  const scores = Object.values(memoryStore.quizScores);
  if (scores.length === 0) return 0;
  const total = scores.reduce((sum, s) => sum + (s.score / s.total) * 100, 0);
  return Math.round(total / scores.length);
}

/**
 * Mark playground as used.
 */
export function markPlaygroundUsed() {
  memoryStore.playgroundUsed = true;
  persist();
}

/**
 * @returns {boolean}
 */
export function hasUsedPlayground() {
  return memoryStore.playgroundUsed;
}

/**
 * Set last visited module.
 * @param {number} weekId
 */
export function setLastVisited(weekId) {
  memoryStore.lastVisitedModule = weekId;
  persist();
}

/**
 * @returns {number|null}
 */
export function getLastVisited() {
  return memoryStore.lastVisitedModule;
}

/**
 * Set theme preference.
 * @param {'light'|'dark'|null} theme
 */
export function setThemePreference(theme) {
  memoryStore.theme = theme;
  persist();
}

/**
 * @returns {'light'|'dark'|null}
 */
export function getThemePreference() {
  return memoryStore.theme;
}

/**
 * Reset all progress data.
 */
export function resetProgress() {
  memoryStore = createDefaultState();
  // Preserve theme
  persist();
}

/**
 * Get full state snapshot (for debugging).
 * @returns {Object}
 */
export function getStateSnapshot() {
  return { ...memoryStore, usingFallback };
}
