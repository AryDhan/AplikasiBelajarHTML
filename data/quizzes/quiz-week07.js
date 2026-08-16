/* ============================================================
   data/quizzes/quiz-week07.js — Quiz Minggu 7: List HTML
   ============================================================ */

export const quizWeek07 = [
  {
    question: 'Tag apakah yang digunakan untuk membungkus butir-butir daftar tak berurutan (bullet points)?',
    options: [
      '<ol>',
      '<ul>',
      '<dl>',
      '<list>'
    ],
    correct: 1,
    explanation: '<ul> (Unordered List) digunakan untuk daftar poin yang urutannya tidak berperingkat numerik.'
  },
  {
    question: 'Tag apa yang wajib digunakan untuk membungkus setiap butir item di dalam elemen <ul> atau <ol>?',
    options: [
      '<item>',
      '<li>',
      '<point>',
      '<dt>'
    ],
    correct: 1,
    explanation: '<li> (List Item) adalah tag yang wajib membungkus setiap butir konten di dalam <ul> maupun <ol>.'
  },
  {
    question: 'Atribut apakah yang digunakan pada tag <ol> agar penomoran angka dimulai dari angka 10?',
    options: [
      'from="10"',
      'start="10"',
      'begin="10"',
      'index="10"'
    ],
    correct: 1,
    explanation: 'Atribut start="10" pada elemen <ol> akan memulai urutan penomoran dari angka 10.'
  },
  {
    question: 'Dalam struktur Description List (<dl>), tag apakah yang digunakan untuk menuliskan istilah atau nama terminologi?',
    options: [
      '<dt>',
      '<dd>',
      '<li>',
      '<term>'
    ],
    correct: 0,
    explanation: '<dt> (Description Term) digunakan untuk menuliskan nama istilah, sedangkan <dd> (Description Details) digunakan untuk menuliskan penjelasannya.'
  },
  {
    question: 'Bagaimanakah cara yang benar untuk membuat daftar bertingkat (nested list) dalam HTML?',
    options: [
      'Meletakkan tag <ul> baru langsung di antara dua tag <li>',
      'Meletakkan tag <ul> baru di dalam salah satu elemen <li> induk',
      'Menuliskan tanda panah -> di dalam teks',
      'Menambahkan atribut nest="true" pada tag <ul>'
    ],
    correct: 1,
    explanation: 'Daftar bersarang yang valid secara semantik harus disisipkan di dalam tag <li> dari item induknya.'
  }
];

export default quizWeek07;
