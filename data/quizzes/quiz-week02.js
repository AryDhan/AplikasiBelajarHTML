/* ============================================================
   data/quizzes/quiz-week02.js — Quiz Minggu 2: Tag, Elemen & Atribut
   ============================================================ */

export const quizWeek02 = [
  {
    question: 'Manakah pernyataan yang paling tepat membedakan tag dan elemen dalam HTML?',
    options: [
      'Tag adalah sintaks kodenya (<p>), sedangkan elemen adalah keseluruhan dari tag pembuka, konten, hingga tag penutup',
      'Tag hanya digunakan di dalam tag <head>, sedangkan elemen digunakan di <body>',
      'Tag dan elemen adalah istilah yang 100% sama tanpa perbedaan apapun',
      'Elemen adalah teks kode, sedangkan tag adalah gambar visualnya'
    ],
    correct: 0,
    explanation: 'Tag merujuk pada penanda sintaks pembuka/penutup (<p> atau </p>), sedangkan elemen merujuk pada unit utuh yang meliputi tag pembuka, isi konten, dan tag penutup.'
  },
  {
    question: 'Di manakah penulisan atribut yang benar pada elemen HTML?',
    options: [
      'Di dalam tag penutup, contoh: </p class="teks">',
      'Di dalam tag pembuka, contoh: <p class="teks">',
      'Di antara konten teks, contoh: <p>class="teks" Konten</p>',
      'Di luar tag HTML pada baris baru'
    ],
    correct: 1,
    explanation: 'Atribut selalu disematkan di dalam tag pembuka sebelum kurung siku tutup, dengan format name="value".'
  },
  {
    question: 'Manakah di antara tag berikut yang tergolong sebagai "Void Element" (tag tunggal tanpa penutup)?',
    options: [
      '<p>',
      '<h1>',
      '<br>',
      '<div>'
    ],
    correct: 2,
    explanation: '<br> adalah void element (line break) yang tidak membungkus teks konten sehingga tidak memerlukan tag penutup </br>.'
  },
  {
    question: 'Apa perbedaan mendasar antara atribut id dan class dalam HTML?',
    options: [
      'Atribut id harus bernilai angka, sedangkan class harus berupa huruf',
      'Atribut id bersifat unik per halaman (hanya untuk 1 elemen), sedangkan class dapat digunakan pada banyak elemen sekaligus',
      'Atribut id hanya untuk JavaScript, sedangkan class hanya untuk CSS',
      'Atribut id tidak boleh memiliki nilai (value)'
    ],
    correct: 1,
    explanation: 'id dirancang unik untuk mengidentifikasi 1 elemen spesifik dalam 1 dokumen, sedangkan class dirancang reusable (dapat digunakan berulang-ulang).'
  },
  {
    question: 'Atribut apakah yang digunakan untuk menampilkan teks tooltip ketika kursor pengguna diarahkan ke suatu elemen?',
    options: [
      'tooltip="..."',
      'alt="..."',
      'title="..."',
      'hover="..."'
    ],
    correct: 2,
    explanation: 'Atribut global title="..." akan menampilkan tooltip teks bawaan browser saat kursor mouse melayang di atas elemen.'
  }
];

export default quizWeek02;
