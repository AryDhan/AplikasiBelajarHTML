/* ============================================================
   data/quizzes/quiz-week06.js — Quiz Minggu 6: Gambar & Tabel
   ============================================================ */

export const quizWeek06 = [
  {
    question: 'Atribut apakah pada tag <img> yang berfungsi menyediakan teks alternatif jika gambar tidak berhasil dimuat?',
    options: [
      'title',
      'alt',
      'desc',
      'caption'
    ],
    correct: 1,
    explanation: 'alt (Alternative Text) menyediakan teks pengganti saat gambar gagal dimuat dan dibacakan oleh screen reader.'
  },
  {
    question: 'Tag manakah yang digunakan untuk membuat baris di dalam tabel HTML?',
    options: [
      '<td>',
      '<th>',
      '<tr>',
      '<row>'
    ],
    correct: 2,
    explanation: '<tr> (Table Row) mendefinisikan sebuah baris di dalam elemen <table>.'
  },
  {
    question: 'Apa perbedaan mendasar antara sel <th> dan sel <td> pada tabel HTML?',
    options: [
      '<th> untuk judul header (otomatis bold dan rata tengah), sedangkan <td> untuk data reguler',
      '<th> hanya bisa diisi angka, sedangkan <td> hanya bisa diisi huruf',
      '<th> diletakkan di luar tag <table>',
      '<th> tidak mendukung border'
    ],
    correct: 0,
    explanation: '<th> (Table Header) memuat sel kepala kolom yang otomatis ditebalkan dan ditengah, sedangkan <td> memuat sel data standar.'
  },
  {
    question: 'Atribut apakah yang digunakan jika Anda ingin menggabungkan 3 kolom horizontal menjadi 1 sel saja?',
    options: [
      'rowspan="3"',
      'colspan="3"',
      'merge="3"',
      'col="3"'
    ],
    correct: 1,
    explanation: 'colspan (Column Span) menggabungkan sejumlah kolom horizontal menjadi satu sel.'
  },
  {
    question: 'Pasangan tag semantik manakah yang direkomendasikan dalam HTML5 untuk membungkus gambar beserta teks keterangannya?',
    options: [
      '<div> dan <p>',
      '<figure> dan <figcaption>',
      '<image> dan <label>',
      '<media> dan <subtext>'
    ],
    correct: 1,
    explanation: '<figure> digunakan sebagai wadah media mandiri dan <figcaption> digunakan sebagai teks keterangan (caption) dari media tersebut.'
  }
];

export default quizWeek06;
