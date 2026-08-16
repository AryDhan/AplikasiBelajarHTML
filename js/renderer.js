/* ============================================================
   js/renderer.js — Page Renderers
   Each function returns HTML string for the content area
   ============================================================ */

import { weeks, getWeekById, getRegularWeeks } from '../data/weeks.js';
import { courseInfo, cpmk, grading, references } from '../data/course-info.js';
import {
  getCompletedModules, getCompletionPercent, getAverageQuizScore,
  getAllQuizScores, getLastVisited, isModuleComplete, getQuizScore,
  markModuleComplete, hasUsedPlayground, setLastVisited
} from './state.js';
import {
  pageHeader, card, statCard, badge, button, linkButton, alert as uiAlert,
  tipBox, codeBlock, outputPreview, accordion, tabs, progressBar, skeleton,
  emptyState, divider, escapeHtml
} from './ui.js';

// ─── Dashboard ──────────────────────────────────────────────

export function renderDashboard() {
  const completed = getCompletedModules();
  const percent = getCompletionPercent();
  const avgQuiz = getAverageQuizScore();
  const lastVisited = getLastVisited();
  const quizScores = getAllQuizScores();
  const quizCount = Object.keys(quizScores).length;

  // If no progress at all, show empty state
  if (completed.length === 0 && quizCount === 0) {
    return `
      ${pageHeader('Beranda', 'Selamat datang di Platform Pembelajaran Pemrograman Web I')}
      ${emptyState(
        '🎓',
        'Selamat datang di WebProg I!',
        'Mulai perjalanan belajarmu dengan membuka modul pertama. Platform ini akan membimbingmu dari dasar HTML hingga CSS.',
        linkButton('Mulai Belajar — Minggu 1', '#module/1', { variant: 'primary', size: 'lg', icon: '🚀' })
      )}
      ${divider()}
      <h3 style="margin-bottom: var(--space-4)">Tentang Platform Ini</h3>
      <div class="grid grid--auto-fill">
        ${card({ icon: '📘', title: '16 Modul', body: '<p class="text-sm text-muted">Materi terstruktur dari HTML dasar hingga CSS, sesuai RPS resmi.</p>' })}
        ${card({ icon: '❓', title: '70 Soal Quiz', body: '<p class="text-sm text-muted">Quiz interaktif dengan pembahasan untuk menguji pemahamanmu.</p>' })}
        ${card({ icon: '🧪', title: 'Playground', body: '<p class="text-sm text-muted">Editor HTML & CSS langsung di browser dengan live preview.</p>' })}
        ${card({ icon: '🚀', title: '2 Proyek', body: '<p class="text-sm text-muted">Website edukasi dan website pribadi sebagai proyek akhir.</p>' })}
      </div>
    `;
  }

  // Normal dashboard with progress
  const statsHtml = `
    <div class="grid grid--4">
      ${statCard('📊', `${percent}%`, 'Progress Belajar')}
      ${statCard('📘', `${completed.length}/14`, 'Modul Selesai')}
      ${statCard('❓', `${quizCount}/14`, 'Quiz Dikerjakan')}
      ${statCard('⭐', `${avgQuiz}%`, 'Rata-rata Quiz')}
    </div>
  `;

  const lastVisitedHtml = lastVisited ? (() => {
    const w = getWeekById(lastVisited);
    return w ? `
      <div class="mt-6">
        <h3 style="margin-bottom: var(--space-3)">Lanjutkan Belajar</h3>
        ${card({
          icon: w.icon,
          title: `Minggu ${w.id}: ${w.title}`,
          subtitle: w.topics.join(' • '),
          clickable: true,
          highlight: true,
          onclick: `location.hash='#module/${w.id}'`,
          footer: linkButton('Lanjutkan →', `#module/${w.id}`, { variant: 'primary', size: 'sm' })
        })}
      </div>
    ` : '';
  })() : '';

  // Week cards grid
  const weekCardsHtml = weeks.map(w => {
    const complete = isModuleComplete(w.id);
    const quiz = getQuizScore(w.id);
    const isExam = w.type !== 'regular';

    let statusBadge = '';
    if (complete) statusBadge = badge('✓ Selesai', 'success');
    else if (isExam) statusBadge = badge(w.type.toUpperCase(), 'warning');
    else statusBadge = badge('Belum', 'neutral');

    let quizInfo = '';
    if (quiz) {
      quizInfo = `<span class="text-sm text-muted">Quiz: ${quiz.score}/${quiz.total}</span>`;
    }

    return card({
      icon: w.icon,
      title: `M${w.id}: ${w.shortTitle}`,
      subtitle: statusBadge,
      body: `<p class="text-sm text-muted">${w.topics.slice(0, 2).join(', ')}${w.topics.length > 2 ? '...' : ''}</p>${quizInfo}`,
      clickable: true,
      onclick: `location.hash='#module/${w.id}'`
    });
  }).join('');

  return `
    ${pageHeader('Beranda', `Pemrograman Web I — ${courseInfo.university}`)}
    ${statsHtml}
    ${lastVisitedHtml}
    <div class="mt-8">
      ${progressBar(percent, 'Progress Keseluruhan')}
    </div>
    ${divider()}
    <h3 style="margin-bottom: var(--space-4)">Semua Modul</h3>
    <div class="grid grid--auto-fill">
      ${weekCardsHtml}
    </div>
  `;
}

// ─── About ──────────────────────────────────────────────────

export function renderAbout() {
  const mediaHtml = courseInfo.media.map(m =>
    `<li><strong>${m.type}:</strong> ${m.desc}</li>`
  ).join('');

  const softwareHtml = courseInfo.software.map(s => card({
    icon: '💻',
    title: s.name,
    body: `<p class="text-sm text-muted">${s.desc}</p>`,
    footer: s.url ? `<a href="${s.url}" target="_blank" rel="noopener" class="text-sm">Download →</a>` : ''
  })).join('');

  const gradingHtml = grading.map(g => `
    <div class="flex" style="align-items:center;gap:var(--space-3);padding:var(--space-3) 0;border-bottom:1px solid var(--color-border)">
      <span style="font-size:var(--text-lg)">${g.icon}</span>
      <span style="flex:1;font-size:var(--text-sm);color:var(--color-text-secondary)">${g.component}</span>
      <span class="fw-semibold">${g.weight}%</span>
    </div>
  `).join('');

  return `
    ${pageHeader('Tentang Mata Kuliah', courseInfo.name)}
    ${card({
      body: `
        <div style="display:grid;gap:var(--space-3)">
          <div class="flex" style="gap:var(--space-8);flex-wrap:wrap">
            <div><span class="text-sm text-muted">Universitas</span><br><strong>${courseInfo.university}</strong></div>
            <div><span class="text-sm text-muted">Program Studi</span><br><strong>${courseInfo.program}</strong></div>
            <div><span class="text-sm text-muted">Semester</span><br><strong>${courseInfo.semester}</strong></div>
            <div><span class="text-sm text-muted">SKS</span><br><strong>${courseInfo.credits}</strong></div>
            <div><span class="text-sm text-muted">Mode</span><br><strong>${courseInfo.mode}</strong></div>
          </div>
        </div>
      `
    })}

    <div class="mt-8">
      <h3 style="margin-bottom:var(--space-3)">Deskripsi</h3>
      <p>${courseInfo.description}</p>
    </div>

    ${divider()}

    <h3 style="margin-bottom:var(--space-4)">Komponen Penilaian</h3>
    ${card({ body: gradingHtml })}

    ${divider()}

    <h3 style="margin-bottom:var(--space-4)">Media Pembelajaran</h3>
    ${card({ body: `<ul style="list-style:none;padding:0">${mediaHtml}</ul>` })}

    ${divider()}

    <h3 style="margin-bottom:var(--space-4)">Software yang Diperlukan</h3>
    <div class="grid grid--2">
      ${softwareHtml}
    </div>
  `;
}

// ─── Roadmap & CPMK ────────────────────────────────────────

export function renderRoadmap() {
  const cpmkAccordion = cpmk.map(c => ({
    title: `${c.id}: ${c.title}`,
    content: `
      <p style="margin-bottom:var(--space-3)">${c.description}</p>
      <div class="competencies">
        ${c.weeks.map(w => `<span class="competency-tag">Minggu ${w}</span>`).join('')}
      </div>
    `
  }));

  // Timeline
  const timelineHtml = weeks.map(w => {
    const isExam = w.type !== 'regular';
    const complete = isModuleComplete(w.id);
    const statusIcon = complete ? '✅' : (isExam ? '📝' : '⬜');

    return `
      <div class="flex" style="gap:var(--space-4);padding:var(--space-3) 0;border-bottom:1px solid var(--color-border);align-items:flex-start">
        <div style="min-width:32px;text-align:center;font-size:var(--text-lg)">${statusIcon}</div>
        <div style="min-width:60px">
          <span class="badge badge--${isExam ? 'warning' : 'primary'}">Minggu ${w.id}</span>
        </div>
        <div style="flex:1">
          <div class="fw-semibold" style="font-size:var(--text-sm)">${w.title}</div>
          <div class="text-sm text-muted">${w.topics.join(' • ')}</div>
        </div>
        <a href="#module/${w.id}" class="btn btn--ghost btn--sm">Buka →</a>
      </div>
    `;
  }).join('');

  return `
    ${pageHeader('Roadmap & CPMK', 'Capaian Pembelajaran Mata Kuliah dan Timeline Semester')}

    <h3 style="margin-bottom:var(--space-4)">CPMK (Capaian Pembelajaran Mata Kuliah)</h3>
    ${accordion(cpmkAccordion)}

    ${divider()}

    <h3 style="margin-bottom:var(--space-4)">Timeline Semester</h3>
    <div class="flex" style="gap:var(--space-2);margin-bottom:var(--space-4);flex-wrap:wrap">
      ${badge('⬜ Belum', 'neutral')}
      ${badge('✅ Selesai', 'success')}
      ${badge('📝 Evaluasi', 'warning')}
    </div>
    ${card({ body: timelineHtml })}
  `;
}

// ─── Module Renderer (delegates to specific module data) ────

export async function renderModule(weekId) {
  const week = getWeekById(weekId);
  if (!week) return renderNotFound({ attempted: `#module/${weekId}` });

  setLastVisited(weekId);

  // Different rendering for evaluation vs regular
  if (week.type === 'uts' || week.type === 'uas') {
    return await renderEvaluationModule(week);
  }

  return await renderRegularModule(week);
}

async function renderRegularModule(week) {
  // Try to dynamically import the module data
  let moduleData;
  try {
    const mod = await import(`../data/modules/week${String(week.id).padStart(2, '0')}.js`);
    moduleData = mod.default || mod[`week${String(week.id).padStart(2, '0')}`];
  } catch {
    return `
      ${pageHeader(`Minggu ${week.id}: ${week.title}`, week.topics.join(' • '))}
      ${uiAlert('Konten modul ini sedang dalam pengembangan. Silakan kembali lagi nanti.', { variant: 'info', title: 'Modul Belum Tersedia' })}
      ${buildModuleNav(week.id)}
    `;
  }

  if (!moduleData) {
    return `
      ${pageHeader(`Minggu ${week.id}: ${week.title}`, week.topics.join(' • '))}
      ${uiAlert('Data modul tidak ditemukan.', { variant: 'warning' })}
      ${buildModuleNav(week.id)}
    `;
  }

  // Build full module page
  const objectivesHtml = moduleData.objectives ? `
    <div class="objectives">
      <div class="objectives__title">🎯 Tujuan Pembelajaran</div>
      <ul class="objectives__list">
        ${moduleData.objectives.map(o => `<li>${o}</li>`).join('')}
      </ul>
    </div>
  ` : '';

  const competenciesHtml = moduleData.competencies ? `
    <div class="competencies" style="margin-bottom:var(--space-6)">
      ${moduleData.competencies.map(c => `<span class="competency-tag">🎓 ${c}</span>`).join('')}
    </div>
  ` : '';

  const conceptsHtml = moduleData.concepts ? moduleData.concepts.map(concept => `
    <div class="concept">
      <h3 class="concept__heading">${concept.heading}</h3>
      <div class="concept__text">${concept.content}</div>
      ${concept.codeExample ? codeBlock(concept.codeExample.html, 'html') : ''}
      ${concept.codeExample?.css ? codeBlock(concept.codeExample.css, 'css') : ''}
      ${concept.visualOutput ? outputPreview(concept.visualOutput) : ''}
    </div>
  `).join('') : '';

  const mistakesHtml = moduleData.commonMistakes ? `
    <div class="mistakes">
      <h3 class="mistakes__title">⚠️ Kesalahan Umum</h3>
      ${moduleData.commonMistakes.map(m => `
        <div class="mistake-item">
          <div class="mistake-item__wrong">
            <div class="mistake-item__label">❌ Salah</div>
            <code class="text-mono text-sm">${escapeHtml(m.mistake)}</code>
          </div>
          <div class="mistake-item__right">
            <div class="mistake-item__label">✅ Benar</div>
            <code class="text-mono text-sm">${escapeHtml(m.fix)}</code>
          </div>
        </div>
      `).join('')}
    </div>
  ` : '';

  const challengeHtml = moduleData.challenge ? `
    <div class="challenge">
      <div class="challenge__title">🏆 Mini Challenge: ${moduleData.challenge.title}</div>
      <div class="challenge__desc">${moduleData.challenge.description}</div>
      ${moduleData.challenge.hint ? tipBox(`<strong>Petunjuk:</strong> ${moduleData.challenge.hint}`, { variant: 'info' }) : ''}
      <div class="challenge__actions">
        ${linkButton('Coba di Playground →', '#playground', { variant: 'primary', icon: '🧪' })}
      </div>
    </div>
  ` : '';

  const quizLink = week.hasQuiz ? `
    <div class="mt-6">
      ${card({
        icon: '❓',
        title: `Quiz Minggu ${week.id}`,
        body: '<p class="text-sm text-muted">Uji pemahamanmu dengan 5 soal pilihan ganda.</p>',
        footer: linkButton('Mulai Quiz →', `#quiz/${week.id}`, { variant: 'primary', size: 'sm' }),
        clickable: true,
        onclick: `location.hash='#quiz/${week.id}'`
      })}
    </div>
  ` : '';

  const markCompleteBtn = !isModuleComplete(week.id)
    ? button('✅ Tandai Selesai', { variant: 'success', onclick: `window.__markComplete(${week.id})`, id: 'btn-mark-complete' })
    : badge('✅ Modul Selesai', 'success');

  return `
    ${pageHeader(`Minggu ${week.id}: ${week.title}`, week.topics.join(' • '),
      competenciesHtml
    )}
    ${objectivesHtml}
    ${conceptsHtml}
    ${mistakesHtml}
    ${challengeHtml}
    ${quizLink}
    <div class="mt-8 text-center">
      ${markCompleteBtn}
    </div>
    ${buildModuleNav(week.id)}
  `;
}

async function renderEvaluationModule(week) {
  let evalData;
  try {
    const mod = await import(`../data/modules/week${String(week.id).padStart(2, '0')}.js`);
    evalData = mod.default || mod[`week${String(week.id).padStart(2, '0')}`];
  } catch {
    // Fallback: build from weeks data
    evalData = null;
  }

  const scopeWeeks = week.scope
    ? weeks.filter(w => w.id >= week.scope.weekRange[0] && w.id <= week.scope.weekRange[1])
    : [];

  const reviewHtml = evalData?.reviewTopics
    ? evalData.reviewTopics.map(rt => `
        <div class="eval-topic" onclick="location.hash='#module/${rt.weekId}'">
          <div class="eval-topic__week">Minggu ${rt.weekId}</div>
          <div class="eval-topic__title">${rt.title}</div>
          <ul class="eval-topic__points">
            ${rt.keyPoints.map(kp => `<li>${kp}</li>`).join('')}
          </ul>
        </div>
      `).join('')
    : scopeWeeks.map(w => `
        <div class="eval-topic" onclick="location.hash='#module/${w.id}'">
          <div class="eval-topic__week">Minggu ${w.id}</div>
          <div class="eval-topic__title">${w.title}</div>
          <ul class="eval-topic__points">
            ${w.topics.map(t => `<li>${t}</li>`).join('')}
          </ul>
        </div>
      `).join('');

  const examInfoHtml = evalData?.examInfo
    ? `
      ${divider()}
      <h3 style="margin-bottom:var(--space-4)">Informasi Ujian</h3>
      ${card({
        body: `
          <p><strong>Bobot:</strong> ${evalData.examInfo.weight}</p>
          <p><strong>Format:</strong> ${evalData.examInfo.format}</p>
          <h4 style="margin-top:var(--space-4);margin-bottom:var(--space-2)">Tips Persiapan:</h4>
          <ul>${evalData.examInfo.tips.map(t => `<li class="text-sm">${t}</li>`).join('')}</ul>
        `
      })}
    `
    : '';

  const label = week.type === 'uts' ? 'UTS' : 'UAS';
  const scopeLabel = week.scope?.label || '';

  return `
    ${pageHeader(`${label}: ${week.title}`, `Cakupan: ${scopeLabel}`)}
    ${uiAlert(
      `Halaman ini berisi rangkuman topik untuk ${label}. Klik pada setiap topik untuk mereview materinya.`,
      { variant: 'info', title: `Persiapan ${label}` }
    )}
    <div class="mt-6">
      <h3 style="margin-bottom:var(--space-4)">Topik yang Diujikan</h3>
      <div class="eval-scope">${reviewHtml}</div>
    </div>
    ${examInfoHtml}
    ${buildModuleNav(week.id)}
  `;
}

// ─── Evaluation Hub ─────────────────────────────────────────

export function renderEvaluation() {
  const utsWeek = weeks.find(w => w.type === 'uts');
  const uasWeek = weeks.find(w => w.type === 'uas');

  return `
    ${pageHeader('Evaluasi', 'Cakupan UTS dan UAS')}
    <div class="grid grid--2">
      ${card({
        icon: '📝',
        title: 'Ujian Tengah Semester (UTS)',
        subtitle: badge('Bobot: 25%', 'warning'),
        body: `
          <p class="text-sm text-muted">Cakupan: Minggu 1–7</p>
          <ul class="text-sm text-muted mt-2">
            ${weeks.filter(w => w.id >= 1 && w.id <= 7).map(w => `<li>M${w.id}: ${w.shortTitle}</li>`).join('')}
          </ul>
        `,
        footer: linkButton('Lihat Rangkuman UTS', '#module/8', { variant: 'secondary', size: 'sm' }),
        clickable: true,
        onclick: "location.hash='#module/8'"
      })}
      ${card({
        icon: '🎓',
        title: 'Ujian Akhir Semester (UAS)',
        subtitle: badge('Bobot: 25%', 'warning'),
        body: `
          <p class="text-sm text-muted">Cakupan: Minggu 9–15</p>
          <ul class="text-sm text-muted mt-2">
            ${weeks.filter(w => w.id >= 9 && w.id <= 15).map(w => `<li>M${w.id}: ${w.shortTitle}</li>`).join('')}
          </ul>
        `,
        footer: linkButton('Lihat Rangkuman UAS', '#module/16', { variant: 'secondary', size: 'sm' }),
        clickable: true,
        onclick: "location.hash='#module/16'"
      })}
    </div>

    ${divider()}

    <h3 style="margin-bottom:var(--space-4)">Komponen Penilaian Lengkap</h3>
    ${card({
      body: grading.map(g => `
        <div class="flex" style="align-items:center;gap:var(--space-3);padding:var(--space-3) 0;border-bottom:1px solid var(--color-border)">
          <span style="font-size:var(--text-lg)">${g.icon}</span>
          <span style="flex:1;font-size:var(--text-sm)">${g.component}</span>
          <div class="progress__bar" style="width:120px;height:6px">
            <div class="progress__fill" style="width:${g.weight * 2}%"></div>
          </div>
          <span class="fw-semibold" style="min-width:40px;text-align:right">${g.weight}%</span>
        </div>
      `).join('')
    })}
  `;
}

// ─── References ─────────────────────────────────────────────

export async function renderReferences() {
  let refList;
  try {
    const mod = await import('../data/references.js');
    refList = mod.references;
  } catch {
    refList = null;
  }

  if (!refList || !Array.isArray(refList)) {
    return `
      ${pageHeader('Referensi', 'Sumber pustaka dan dokumentasi pendukung')}
      <p class="text-muted">Daftar referensi sedang diperbarui.</p>
    `;
  }

  const sections = refList.map(cat => `
    <div style="margin-top:var(--space-8)">
      <h3 style="color:var(--color-primary);margin-bottom:var(--space-4);display:flex;align-items:center;gap:var(--space-2)">
        <span>📚</span> ${cat.category}
      </h3>
      <div class="grid grid--2">
        ${cat.items.map(r => card({
          title: r.title,
          subtitle: `${r.author}${r.year ? ` (${r.year})` : ''}${r.publisher ? ` • ${r.publisher}` : ''}`,
          body: `
            <p class="text-sm text-muted">${r.description || ''}</p>
            ${r.isbn ? `<p class="text-xs text-mono mt-2 text-muted">ISBN: ${r.isbn}</p>` : ''}
          `,
          footer: r.url ? `<a href="${r.url}" target="_blank" rel="noopener" class="btn btn--secondary btn--sm">Kunjungi Sumber ↗</a>` : ''
        })).join('')}
      </div>
    </div>
  `).join('');

  return `
    ${pageHeader('Referensi & Bibliografi', 'Sumber pustaka standar, dokumentasi pengembang, buku teks akademik, dan perangkat lunak pendukung RPS')}
    ${sections}
  `;
}

// ─── Quiz Hub ───────────────────────────────────────────────

export function renderQuizHub() {
  const quizScores = getAllQuizScores();
  const quizWeeks = getRegularWeeks();

  if (Object.keys(quizScores).length === 0) {
    return `
      ${pageHeader('Quiz Center', 'Uji pemahamanmu untuk setiap modul')}
      ${emptyState(
        '📝',
        'Belum ada quiz yang dikerjakan',
        'Selesaikan modul terlebih dahulu, lalu uji pemahamanmu di quiz.',
        linkButton('Lihat Modul →', '#module/1', { variant: 'primary' })
      )}
      ${divider()}
      <h3 style="margin-bottom:var(--space-4)">Semua Quiz</h3>
      <div class="quiz-hub__grid">
        ${quizWeeks.map(w => buildQuizHubCard(w, null)).join('')}
      </div>
    `;
  }

  const avgScore = getAverageQuizScore();

  return `
    ${pageHeader('Quiz Center', 'Uji pemahamanmu untuk setiap modul')}
    <div class="grid grid--3 mb-6">
      ${statCard('📊', `${avgScore}%`, 'Rata-rata Skor')}
      ${statCard('✅', `${Object.keys(quizScores).length}/14`, 'Quiz Selesai')}
      ${statCard('⭐', `${Object.values(quizScores).filter(s => s.score === s.total).length}`, 'Skor Sempurna')}
    </div>
    ${divider()}
    <h3 style="margin-bottom:var(--space-4)">Semua Quiz</h3>
    <div class="quiz-hub__grid">
      ${quizWeeks.map(w => {
        const score = getQuizScore(w.id);
        return buildQuizHubCard(w, score);
      }).join('')}
    </div>
  `;
}

function buildQuizHubCard(week, score) {
  let scoreBadge = '';
  if (score) {
    const pct = Math.round((score.score / score.total) * 100);
    const variant = pct >= 80 ? 'success' : (pct >= 60 ? 'warning' : 'error');
    scoreBadge = badge(`${score.score}/${score.total}`, variant);
  }

  return card({
    icon: week.icon,
    title: `Quiz Minggu ${week.id}`,
    subtitle: week.shortTitle,
    body: scoreBadge ? `<div class="mt-2">${scoreBadge}</div>` : '<p class="text-sm text-muted">Belum dikerjakan</p>',
    footer: linkButton(score ? 'Ulangi' : 'Mulai', `#quiz/${week.id}`, { variant: 'secondary', size: 'sm' }),
    clickable: true,
    onclick: `location.hash='#quiz/${week.id}'`,
    className: 'quiz-hub__card'
  });
}

// ─── Projects Showcase ──────────────────────────────────────

export async function renderProjects() {
  let projectsData;
  try {
    const mod = await import('../data/projects.js');
    projectsData = mod.projects;
  } catch {
    projectsData = null;
  }

  if (!projectsData) {
    return `
      ${pageHeader('Project Showcase', 'Contoh proyek website edukasi dan pribadi')}
      ${uiAlert('Data proyek sedang dalam pengembangan.', { variant: 'info' })}
    `;
  }

  const projectCards = projectsData.map(p => `
    <div class="card" style="margin-bottom:var(--space-6)">
      <div class="card__header">
        <div class="card__icon">🚀</div>
        <div>
          <div class="card__title">${p.title}</div>
          <div class="card__subtitle">${badge(`Minggu ${p.relatedWeek}`, 'primary')}</div>
        </div>
      </div>
      <div class="card__body">
        <p class="text-sm" style="margin-bottom:var(--space-4)">${p.description}</p>
        <h4 style="margin-bottom:var(--space-2);font-size:var(--text-sm)">Persyaratan:</h4>
        <ul style="margin-bottom:var(--space-4)">
          ${p.requirements.map(r => `<li class="text-sm">${r}</li>`).join('')}
        </ul>
        ${p.completedCode ? `
          <h4 style="margin-bottom:var(--space-2);font-size:var(--text-sm)">Contoh Kode:</h4>
          ${codeBlock(p.completedCode.html, 'html')}
          ${p.completedCode.css ? codeBlock(p.completedCode.css, 'css') : ''}
        ` : ''}
      </div>
      <div class="card__footer">
        ${linkButton('Buka di Playground', '#playground', { variant: 'primary', size: 'sm', icon: '🧪' })}
      </div>
    </div>
  `).join('');

  return `
    ${pageHeader('Project Showcase', 'Contoh proyek website edukasi dan pribadi')}
    ${projectCards}
  `;
}

// ─── Playground Page ────────────────────────────────────────

export async function renderPlayground() {
  // Actual playground logic is in playground.js
  // This returns the HTML shell, playground.js initializes the interactive parts
  return `
    ${pageHeader('Playground HTML & CSS', 'Tulis kode HTML dan CSS, lihat hasilnya langsung!')}
    <div id="playground-root"></div>
  `;
}

// ─── Quiz Page ──────────────────────────────────────────────

export async function renderQuiz(weekId) {
  const week = getWeekById(weekId);
  if (!week || week.type !== 'regular') {
    return renderNotFound({ attempted: `#quiz/${weekId}`, message: 'Quiz tidak tersedia untuk minggu ini.' });
  }

  return `
    ${pageHeader(`Quiz Minggu ${weekId}`, week.title)}
    <div id="quiz-root" data-week="${weekId}"></div>
  `;
}

// ─── Not Found ──────────────────────────────────────────────

export function renderNotFound(params = {}) {
  const msg = params.message || 'Halaman yang kamu cari tidak ditemukan.';
  return `
    <div class="empty-state" style="min-height:60vh">
      <div class="empty-state__icon">🔍</div>
      <h2 class="empty-state__title">Halaman Tidak Ditemukan</h2>
      <p class="empty-state__desc">${msg}</p>
      ${params.attempted ? `<p class="text-sm text-muted mb-4">Route: <code>${escapeHtml(params.attempted)}</code></p>` : ''}
      ${linkButton('← Kembali ke Beranda', '#dashboard', { variant: 'primary' })}
    </div>
  `;
}

// ─── Helpers ────────────────────────────────────────────────

function buildModuleNav(currentWeekId) {
  const prevWeek = currentWeekId > 1 ? getWeekById(currentWeekId - 1) : null;
  const nextWeek = currentWeekId < 16 ? getWeekById(currentWeekId + 1) : null;

  return `
    <div class="module__nav">
      ${prevWeek
        ? `<a href="#module/${prevWeek.id}" class="module__nav-btn">← M${prevWeek.id}: ${prevWeek.shortTitle}</a>`
        : '<div></div>'}
      ${nextWeek
        ? `<a href="#module/${nextWeek.id}" class="module__nav-btn">M${nextWeek.id}: ${nextWeek.shortTitle} →</a>`
        : '<div></div>'}
    </div>
  `;
}

// Global helper for mark complete button
window.__markComplete = function(weekId) {
  markModuleComplete(weekId);
  const btn = document.getElementById('btn-mark-complete');
  if (btn) {
    btn.outerHTML = '<span class="badge badge--success" style="font-size:var(--text-sm);padding:var(--space-2) var(--space-4)">✅ Modul Selesai</span>';
  }
  // Refresh sidebar
  import('./navigation.js').then(nav => {
    nav.renderSidebar();
  });
};
