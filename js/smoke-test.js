/* ============================================================
   js/smoke-test.js — Automated Smoke Test & Data Integrity Verifier
   Validates route registrations, module schemas, and all 70 quiz questions.
   ============================================================ */

import { weeks } from '../data/weeks.js';

/**
 * Execute automated smoke test suite.
 */
export async function runSmokeTests() {
  console.log('%c🧪 Menjalankan Smoke Test WebProg I...', 'color: #3b82f6; font-size: 16px; font-weight: bold;');

  let passed = 0;
  let failed = 0;
  const errors = [];

  function assert(condition, message) {
    if (condition) {
      passed++;
    } else {
      failed++;
      errors.push(message);
      console.error(`❌ FAILED: ${message}`);
    }
  }

  // 1. Validate Weeks Structure
  assert(Array.isArray(weeks) && weeks.length === 16, `Diharapkan 16 minggu, ditemukan: ${weeks?.length}`);
  const utsCount = weeks.filter(w => w.type === 'uts').length;
  const uasCount = weeks.filter(w => w.type === 'uas').length;
  const regularCount = weeks.filter(w => w.type === 'regular').length;
  assert(utsCount === 1, `Diharapkan 1 minggu UTS (M8), ditemukan: ${utsCount}`);
  assert(uasCount === 1, `Diharapkan 1 minggu UAS (M16), ditemukan: ${uasCount}`);
  assert(regularCount === 14, `Diharapkan 14 minggu reguler, ditemukan: ${regularCount}`);

  // 2. Validate Modules Existence and Content
  for (const w of weeks) {
    const padded = String(w.id).padStart(2, '0');
    try {
      const mod = await import(`../data/modules/week${padded}.js`);
      const data = mod.default || mod[`week${padded}`];
      assert(!!data, `Modul week${padded}.js tidak mengekspor data yang valid.`);

      if (data) {
        assert(data.weekId === w.id, `week${padded} weekId (${data.weekId}) tidak cocok dengan index minggu (${w.id})`);
        assert(typeof data.title === 'string' && data.title.length > 0, `week${padded} judul kosong`);

        if (w.type === 'regular') {
          assert(Array.isArray(data.objectives) && data.objectives.length >= 2, `week${padded} tujuan pembelajaran minimal 2`);
          assert(Array.isArray(data.concepts) && data.concepts.length >= 1, `week${padded} konsep minimal 1`);
          assert(Array.isArray(data.commonMistakes) && data.commonMistakes.length >= 1, `week${padded} kesalahan umum minimal 1`);
          assert(!!data.challenge && typeof data.challenge.title === 'string', `week${padded} mini challenge tidak lengkap`);
        } else {
          // Evaluation week (UTS / UAS)
          assert(Array.isArray(data.reviewTopics) && data.reviewTopics.length >= 3, `week${padded} (Evaluasi) reviewTopics minimal 3`);
          assert(!!data.examInfo && typeof data.examInfo.weight === 'string', `week${padded} (Evaluasi) examInfo tidak lengkap`);
        }
      }
    } catch (e) {
      assert(false, `Gagal memuat modul week${padded}.js: ${e.message}`);
    }
  }

  // 3. Validate All 14 Quizzes (70 questions)
  const quizWeeks = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15];
  let totalQuestionsValidated = 0;

  for (const weekId of quizWeeks) {
    const padded = String(weekId).padStart(2, '0');
    try {
      const mod = await import(`../data/quizzes/quiz-week${padded}.js`);
      const questions = mod.default || mod[`quizWeek${padded}`] || mod.quiz;

      assert(Array.isArray(questions) && questions.length === 5, `Quiz Minggu ${weekId} harus memiliki tepat 5 soal, ditemukan: ${questions?.length}`);

      if (Array.isArray(questions)) {
        questions.forEach((q, qIdx) => {
          totalQuestionsValidated++;
          assert(typeof q.question === 'string' && q.question.trim().length > 0, `Quiz M${weekId} Soal ${qIdx + 1}: Pertanyaan kosong`);
          assert(Array.isArray(q.options) && q.options.length === 4, `Quiz M${weekId} Soal ${qIdx + 1}: Harus memiliki tepat 4 opsi pilihan (A, B, C, D)`);
          assert(typeof q.correct === 'number' && q.correct >= 0 && q.correct <= 3, `Quiz M${weekId} Soal ${qIdx + 1}: Index jawaban benar harus antara 0-3`);
          assert(typeof q.explanation === 'string' && q.explanation.trim().length > 0, `Quiz M${weekId} Soal ${qIdx + 1}: Penjelasan/pembahasan tidak boleh kosong`);
        });
      }
    } catch (e) {
      assert(false, `Gagal memuat quiz-week${padded}.js: ${e.message}`);
    }
  }

  // 4. Validate Projects Data
  try {
    const projMod = await import('../data/projects.js');
    const projects = projMod.projects;
    assert(Array.isArray(projects) && projects.length === 2, `Diharapkan 2 showcase project, ditemukan: ${projects?.length}`);
    projects.forEach(p => {
      assert(!!p.id && !!p.title && !!p.completedCode?.html, `Project ${p.id} kelengkapan data tidak valid`);
    });
  } catch (e) {
    assert(false, `Gagal memuat data/projects.js: ${e.message}`);
  }

  // Final Summary Output
  console.log('\n----------------------------------------');
  if (failed === 0) {
    console.log(`%c🎉 SEMUA SMOKE TEST BERHASIL! (${passed} assertion lulus, ${totalQuestionsValidated} soal kuis tervalidasi)`, 'color: #059669; font-weight: bold;');
  } else {
    console.log(`%c⚠️ DITEMUKAN ${failed} KEGAGALAN DARI ${passed + failed} TEST!`, 'color: #dc2626; font-weight: bold;');
    errors.forEach(err => console.warn(` - ${err}`));
  }
  console.log('----------------------------------------\n');

  return { passed, failed, errors, totalQuestions: totalQuestionsValidated };
}

// Attach to window if running in browser
if (typeof window !== 'undefined') {
  window.runSmokeTests = runSmokeTests;
}
