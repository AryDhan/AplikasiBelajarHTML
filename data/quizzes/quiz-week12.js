/* ============================================================
   data/quizzes/quiz-week12.js — Quiz Minggu 12: Audio HTML5
   ============================================================ */

export const quizWeek12 = [
  {
    question: 'Tag apakah yang digunakan dalam HTML5 untuk menyematkan file audio secara native tanpa plugin luar?',
    options: [
      '<sound>',
      '<music>',
      '<audio>',
      '<voice>'
    ],
    correct: 2,
    explanation: '<audio> adalah elemen standar resmi HTML5 untuk menyematkan dan memutar suara atau musik.'
  },
  {
    question: 'MIME type resmi apakah yang wajib dituliskan pada atribut type="..." untuk file audio berformat .mp3?',
    options: [
      'type="audio/mp3"',
      'type="audio/mpeg"',
      'type="audio/mp4"',
      'type="sound/mp3"'
    ],
    correct: 1,
    explanation: 'Standar MIME type IANA untuk format file MP3 adalah audio/mpeg.'
  },
  {
    question: 'Atribut apakah yang digunakan agar pemutar audio otomatis memutar ulang lagu dari awal setelah durasi berakhir?',
    options: [
      'repeat',
      'loop',
      'replay="true"',
      'infinite'
    ],
    correct: 1,
    explanation: 'Atribut boolean loop membuat audio berputar terus-menerus secara berulang.'
  },
  {
    question: 'Apa yang terjadi jika Anda menuliskan tag <audio src="lagu.mp3"></audio> tanpa atribut "controls"?',
    options: [
      'Lagu otomatis meledakkan speaker',
      'Browser akan menampilkan pesan error merah',
      'Pemutar audio tidak akan terlihat sama sekali di layar halaman web',
      'Browser otomatis menutup tab'
    ],
    correct: 2,
    explanation: 'Tanpa atribut controls, elemen audio menjadi tersembunyi (invisible) karena tidak ada antarmuka tombol yang dirender.'
  },
  {
    question: 'Nilai atribut preload apakah yang memberi instruksi ke browser untuk hanya mengunduh informasi durasi dan metadata audio saja tanpa mengunduh seluruh file lagu di awal?',
    options: [
      'preload="none"',
      'preload="metadata"',
      'preload="auto"',
      'preload="header"'
    ],
    correct: 1,
    explanation: 'preload="metadata" memberi tahu browser untuk hanya mengambil informasi dimensi/durasi awal untuk menghemat kuota pengguna.'
  }
];

export default quizWeek12;
