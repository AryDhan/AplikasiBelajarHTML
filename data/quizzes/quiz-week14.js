/* ============================================================
   data/quizzes/quiz-week14.js — Quiz Minggu 14: Dasar CSS
   ============================================================ */

export const quizWeek14 = [
  {
    question: 'Apa kepanjangan resmi dari singkatan CSS dalam pengembangan web?',
    options: [
      'Creative Style Sheets',
      'Cascading Style Sheets',
      'Computer Styling System',
      'Colorful Style Syntax'
    ],
    correct: 1,
    explanation: 'CSS adalah singkatan dari Cascading Style Sheets, bahasa stylesheet untuk mengatur tampilan presentasi dokumen web.'
  },
  {
    question: 'Pada aturan CSS: `h1 { color: blue; }`, istilah apakah yang merujuk pada `color`?',
    options: [
      'Selector',
      'Property',
      'Value',
      'Tag'
    ],
    correct: 1,
    explanation: '`h1` adalah Selector, `color` adalah Property, dan `blue` adalah Value.'
  },
  {
    question: 'Tag apakah yang digunakan di dalam bagian <head> untuk menghubungkan file CSS eksternal (misal style.css) ke dokumen HTML?',
    options: [
      '<css href="style.css">',
      '<script src="style.css">',
      '<link rel="stylesheet" href="style.css">',
      '<style src="style.css">'
    ],
    correct: 2,
    explanation: '<link rel="stylesheet" href="style.css"> diletakkan di dalam <head> untuk memuat file CSS eksternal.'
  },
  {
    question: 'Metode penulisan CSS manakah yang dianggap sebagai standar terbaik (best practice) untuk proyek website skala menengah hingga besar?',
    options: [
      'Inline CSS (di setiap tag style="...")',
      'External CSS (file .css terpisah)',
      'Internal CSS (di dalam <style> tiap halaman)',
      'Menulis CSS di dalam tag komentar'
    ],
    correct: 1,
    explanation: 'External CSS memungkinkan pemisahan kode secara bersih (Separation of Concerns), reusable di banyak halaman, dan dapat di-cache oleh browser.'
  },
  {
    question: 'Tanda baca apakah yang wajib dituliskan di akhir setiap baris deklarasi properti dan nilai dalam blok CSS?',
    options: [
      'Tanda titik (.)',
      'Tanda titik dua (:)',
      'Tanda titik koma (;)',
      'Tanda seru (!)'
    ],
    correct: 2,
    explanation: 'Tanda titik koma (;) memisahkan antar deklarasi CSS. Tanpa tanda ini, browser akan gagal mem-parsing aturan berikutnya.'
  }
];

export default quizWeek14;
