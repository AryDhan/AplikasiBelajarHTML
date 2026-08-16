/* ============================================================
   js/quiz.js — Interactive Quiz Engine
   Loads questions, provides instant feedback, calculates scores,
   persists progress, and renders review breakdowns.
   ============================================================ */

import { saveQuizScore, getQuizScore, markModuleComplete } from './state.js';
import { getWeekById } from '../data/weeks.js';
import { escapeHtml } from './ui.js';
import { renderSidebar } from './navigation.js';

let currentWeekId = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = []; // array of selected option indices (or null if unanswered)
let answeredState = []; // array of boolean: whether user has submitted/confirmed answer for this question

/**
 * Initialize quiz for a specific week.
 * @param {number} weekId
 */
export async function initQuiz(weekId) {
  currentWeekId = weekId;
  const root = document.getElementById('quiz-root');
  if (!root) return;

  // Show loading skeleton
  root.innerHTML = `
    <div class="skeleton" style="padding:var(--space-6) 0">
      <div class="skeleton__line skeleton__line--title"></div>
      <div class="skeleton__line skeleton__line--card" style="height:180px"></div>
    </div>
  `;

  try {
    const padded = String(weekId).padStart(2, '0');
    const mod = await import(`../data/quizzes/quiz-week${padded}.js`);
    currentQuestions = mod.default || mod[`quizWeek${padded}`] || mod.quiz;

    if (!Array.isArray(currentQuestions) || currentQuestions.length === 0) {
      throw new Error('Data quiz tidak valid atau kosong.');
    }

    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    answeredState = new Array(currentQuestions.length).fill(false);

    renderQuestion();
  } catch (error) {
    console.error(`[Quiz] Gagal memuat quiz minggu ${weekId}:`, error);
    root.innerHTML = `
      <div class="alert alert--warning mt-4">
        <div class="alert__icon">⚠️</div>
        <div class="alert__content">
          <div class="alert__title">Quiz Belum Tersedia</div>
          <p>Quiz untuk Minggu ${weekId} belum siap atau sedang diperbarui.</p>
          <div class="mt-4">
            <a href="#module/${weekId}" class="btn btn--secondary btn--sm">← Kembali ke Modul ${weekId}</a>
            <a href="#quiz" class="btn btn--ghost btn--sm">Ke Quiz Center</a>
          </div>
        </div>
      </div>
    `;
  }
}

/**
 * Render the current question card.
 */
function renderQuestion() {
  const root = document.getElementById('quiz-root');
  if (!root || !currentQuestions[currentQuestionIndex]) return;

  const q = currentQuestions[currentQuestionIndex];
  const qNum = currentQuestionIndex + 1;
  const totalQ = currentQuestions.length;
  const isAnswered = answeredState[currentQuestionIndex];
  const selectedOpt = userAnswers[currentQuestionIndex];
  const isCorrect = isAnswered && selectedOpt === q.correct;
  const progressPercent = Math.round(((currentQuestionIndex) / totalQ) * 100);

  const letters = ['A', 'B', 'C', 'D'];

  const optionsHtml = q.options.map((opt, idx) => {
    let optClass = 'quiz__option';
    if (isAnswered) {
      optClass += ' quiz__option--disabled';
      if (idx === q.correct) {
        optClass += ' quiz__option--correct';
      } else if (idx === selectedOpt && idx !== q.correct) {
        optClass += ' quiz__option--incorrect';
      }
    } else if (selectedOpt === idx) {
      optClass += ' quiz__option--selected';
    }

    return `
      <div class="${optClass}" onclick="window.__selectQuizOption(${idx})" role="button" tabindex="${isAnswered ? -1 : 0}" aria-label="Opsi ${letters[idx]}: ${escapeHtml(opt)}">
        <div class="quiz__option-letter">${letters[idx]}</div>
        <div class="quiz__option-text">${opt.startsWith('<') || opt.includes('</') ? `<code>${escapeHtml(opt)}</code>` : opt}</div>
      </div>
    `;
  }).join('');

  let feedbackHtml = '';
  if (isAnswered) {
    feedbackHtml = `
      <div class="quiz__feedback quiz__feedback--visible ${isCorrect ? 'quiz__feedback--correct' : 'quiz__feedback--incorrect'}">
        <div class="flex" style="align-items:center;margin-bottom:var(--space-2)">
          <span class="quiz__feedback-icon">${isCorrect ? '✅' : '❌'}</span>
          <span class="quiz__feedback-title">${isCorrect ? 'Jawaban Benar!' : 'Jawaban Kurang Tepat!'}</span>
        </div>
        <p style="margin:0">${q.explanation}</p>
      </div>
    `;
  }

  const isLastQuestion = currentQuestionIndex === totalQ - 1;

  let primaryActionBtn = '';
  if (!isAnswered) {
    primaryActionBtn = `
      <button class="btn btn--primary" id="btn-submit-answer" ${selectedOpt === null ? 'disabled' : ''} onclick="window.__submitQuizAnswer()">
        Konfirmasi Jawaban
      </button>
    `;
  } else if (!isLastQuestion) {
    primaryActionBtn = `
      <button class="btn btn--primary" onclick="window.__nextQuizQuestion()">
        Soal Berikutnya →
      </button>
    `;
  } else {
    primaryActionBtn = `
      <button class="btn btn--success" onclick="window.__finishQuiz()">
        Lihat Hasil Quiz 🏆
      </button>
    `;
  }

  root.innerHTML = `
    <div class="quiz">
      <!-- Progress Bar -->
      <div class="quiz__progress">
        <span class="quiz__progress-text">Soal ${qNum} dari ${totalQ}</span>
        <div class="quiz__progress-bar">
          <div class="quiz__progress-fill" style="width: ${progressPercent}%"></div>
        </div>
        <span class="badge badge--neutral">${Math.round((qNum / totalQ) * 100)}%</span>
      </div>

      <!-- Question Card -->
      <div class="quiz__question-card">
        <div class="quiz__question-number">Pertanyaan ${qNum}</div>
        <h2 class="quiz__question-text">${q.question}</h2>

        ${q.codeSnippet ? `
          <div class="code-block quiz__question-code">
            <pre><code>${escapeHtml(q.codeSnippet)}</code></pre>
          </div>
        ` : ''}

        <!-- Options -->
        <div class="quiz__options" id="quiz-options-container">
          ${optionsHtml}
        </div>

        <!-- Feedback Panel -->
        ${feedbackHtml}

        <!-- Actions -->
        <div class="quiz__actions">
          <button class="btn btn--ghost" ${currentQuestionIndex === 0 ? 'disabled style="opacity:0"' : ''} onclick="window.__prevQuizQuestion()">
            ← Sebelumnya
          </button>
          <div>
            ${primaryActionBtn}
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Handle option selection before confirming.
 * @param {number} optionIndex
 */
window.__selectQuizOption = function(optionIndex) {
  if (answeredState[currentQuestionIndex]) return; // already confirmed
  userAnswers[currentQuestionIndex] = optionIndex;
  
  // Re-render question to show selected state
  renderQuestion();
};

/**
 * Confirm and lock the current answer.
 */
window.__submitQuizAnswer = function() {
  if (userAnswers[currentQuestionIndex] === null) return;
  answeredState[currentQuestionIndex] = true;
  renderQuestion();
};

/**
 * Move to next question.
 */
window.__nextQuizQuestion = function() {
  if (currentQuestionIndex < currentQuestions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  }
};

/**
 * Move to previous question.
 */
window.__prevQuizQuestion = function() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
};

/**
 * Finish quiz and display results.
 */
window.__finishQuiz = function() {
  const root = document.getElementById('quiz-root');
  if (!root) return;

  // Calculate score
  let correctCount = 0;
  currentQuestions.forEach((q, idx) => {
    if (userAnswers[idx] === q.correct) {
      correctCount++;
    }
  });

  const total = currentQuestions.length;
  const percentage = Math.round((correctCount / total) * 100);

  // Save score to state
  saveQuizScore(currentWeekId, correctCount, total);

  // If scored >= 60%, automatically mark module as completed
  if (percentage >= 60) {
    markModuleComplete(currentWeekId);
  }

  // Refresh sidebar progress
  renderSidebar();

  // Evaluation messages
  let statusIcon = '🏆';
  let statusTitle = 'Luar Biasa!';
  let statusDesc = 'Kamu memahami materi minggu ini dengan sangat baik.';
  let scoreVariant = 'success';

  if (percentage >= 80) {
    statusIcon = '🌟';
    statusTitle = 'Hasil Sempurna & Memuaskan!';
    statusDesc = 'Penguasaan konsep dan sintaksmu sangat solid.';
    scoreVariant = 'success';
  } else if (percentage >= 60) {
    statusIcon = '👍';
    statusTitle = 'Bagus!';
    statusDesc = 'Kamu sudah menguasai sebagian besar materi. Tinjau kembali beberapa poin di bawah.';
    scoreVariant = 'warning';
  } else {
    statusIcon = '📚';
    statusTitle = 'Perlu Belajar Lebih Giat!';
    statusDesc = 'Jangan berkecil hati, pelajari kembali modul materi dan coba lagi kuis ini.';
    scoreVariant = 'error';
  }

  // Review list
  const letters = ['A', 'B', 'C', 'D'];
  const reviewItems = currentQuestions.map((q, idx) => {
    const userAns = userAnswers[idx];
    const isUserCorrect = userAns === q.correct;
    return `
      <div class="card mb-4" style="border-left: 4px solid var(--color-${isUserCorrect ? 'success' : 'error'})">
        <div class="card__body">
          <div class="flex" style="justify-content:space-between;align-items:flex-start;margin-bottom:var(--space-2)">
            <span class="fw-semibold" style="font-size:var(--text-sm)">Soal ${idx + 1}: ${q.question}</span>
            <span class="badge badge--${isUserCorrect ? 'success' : 'error'}">${isUserCorrect ? 'Benar (+1)' : 'Salah (0)'}</span>
          </div>
          <div class="text-sm mt-2">
            <p><strong>Jawabanmu:</strong> ${userAns !== null ? `${letters[userAns]}. ${escapeHtml(q.options[userAns])}` : '<span class="text-muted">Tidak dijawab</span>'}</p>
            ${!isUserCorrect ? `<p style="color:var(--color-success)"><strong>Kunci Jawaban:</strong> ${letters[q.correct]}. ${escapeHtml(q.options[q.correct])}</p>` : ''}
            <p class="text-muted mt-2" style="background:var(--color-bg-alt);padding:var(--space-2) var(--space-3);border-radius:var(--radius-sm)">💡 <em>${q.explanation}</em></p>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const week = getWeekById(currentWeekId);
  const nextWeekId = currentWeekId + 1;
  const hasNext = nextWeekId <= 16;

  root.innerHTML = `
    <div class="quiz__results">
      <div class="quiz__results-icon">${statusIcon}</div>
      <h2 class="quiz__results-title">${statusTitle}</h2>
      <p class="quiz__results-subtitle">${statusDesc}</p>

      <div class="quiz__score-ring" style="background: var(--color-surface); border: 3px solid var(--color-border); border-radius: var(--radius-xl); padding: var(--space-6); width: auto; max-width: 260px; height: auto;">
        <div class="quiz__score-value" style="color:var(--color-${scoreVariant})">${percentage}%</div>
        <div class="quiz__score-label">Skor: ${correctCount} / ${total} Soal</div>
      </div>

      <div class="quiz__results-stats">
        <div class="quiz__results-stat">
          <div class="quiz__results-stat-value" style="color:var(--color-success)">${correctCount}</div>
          <div class="quiz__results-stat-label">Benar</div>
        </div>
        <div class="quiz__results-stat">
          <div class="quiz__results-stat-value" style="color:var(--color-error)">${total - correctCount}</div>
          <div class="quiz__results-stat-label">Salah</div>
        </div>
        <div class="quiz__results-stat">
          <div class="quiz__results-stat-value">${percentage >= 60 ? 'Lulus ✅' : 'Remedi 🔄'}</div>
          <div class="quiz__results-stat-label">Status</div>
        </div>
      </div>

      <div class="quiz__results-actions mb-8">
        <button class="btn btn--secondary" onclick="window.__retryQuiz()">
          🔄 Ulangi Quiz
        </button>
        <a href="#module/${currentWeekId}" class="btn btn--ghost">
          📖 Review Modul ${currentWeekId}
        </a>
        ${hasNext ? `<a href="#module/${nextWeekId}" class="btn btn--primary">Lanjut Minggu ${nextWeekId} →</a>` : ''}
      </div>

      <hr class="divider">

      <div style="text-align:left">
        <h3 style="margin-bottom:var(--space-4)">Pembahasan Jawaban</h3>
        ${reviewItems}
      </div>
    </div>
  `;
};

/**
 * Retry quiz for current week.
 */
window.__retryQuiz = function() {
  if (currentWeekId) {
    initQuiz(currentWeekId);
  }
};
