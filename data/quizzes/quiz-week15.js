/* ============================================================
   data/quizzes/quiz-week15.js — Quiz Minggu 15: Selector & Warna
   ============================================================ */

export const quizWeek15 = [
  {
    question: 'Simbol awalan apakah yang digunakan dalam CSS untuk memilih elemen berdasarkan nama Class-nya?',
    options: [
      'Tanda pagar (#)',
      'Tanda titik (.)',
      'Tanda dolar ($)',
      'Tanda ampersand (&)'
    ],
    correct: 1,
    explanation: 'Class selector diawali dengan tanda titik (.), contoh: `.kartu-profil`.'
  },
  {
    question: 'Pseudo-class apakah yang digunakan untuk mengubah gaya tampilan elemen saat kursor mouse melayang di atasnya?',
    options: [
      ':focus',
      ':active',
      ':hover',
      ':visited'
    ],
    correct: 2,
    explanation: '`:hover` aktif saat pengguna mengarahkan penunjuk mouse ke atas elemen tanpa menekannya.'
  },
  {
    question: 'Pada format warna RGBA: `rgba(255, 0, 0, 0.5)`, angka `0.5` merepresentasikan apa?',
    options: [
      'Kadar warna abu-abu',
      'Nilai transparansi (Alpha channel) sebesar 50%',
      'Kecepatan animasi warna',
      'Ukuran font elemen'
    ],
    correct: 1,
    explanation: 'Parameter ke-4 pada RGBA adalah Alpha (transparansi), di mana 0.0 adalah transparan total dan 1.0 adalah solid.'
  },
  {
    question: 'Selector manakah yang memilih seluruh elemen <p> yang berada di dalam elemen <div> (Descendant Selector)?',
    options: [
      'div + p',
      'div > p',
      'div p',
      'div.p'
    ],
    correct: 2,
    explanation: 'Descendant selector menggunakan spasi tunggal (`div p`) untuk memilih semua elemen anak/cucu <p> di dalam <div>.'
  },
  {
    question: 'Berapakah jumlah digit angka/huruf heksadesimal pada kode warna HEX standar CSS (#RRGGBB)?',
    options: [
      '3 atau 6 digit',
      'Tepat 10 digit',
      'Hanya boleh 2 digit',
      'Bebas berapa saja'
    ],
    correct: 0,
    explanation: 'Kode warna HEX menggunakan 6 digit (#RRGGBB) atau versi singkatan 3 digit (#RGB, misal #FFF untuk #FFFFFF).'
  }
];

export default quizWeek15;
