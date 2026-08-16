/* ============================================================
   data/quizzes/quiz-week01.js — Quiz Minggu 1: Pengenalan HTML
   ============================================================ */

export const quizWeek01 = [
  {
    question: 'Apa kepanjangan resmi dari singkatan HTML dalam teknologi web?',
    options: [
      'HyperText Markup Language',
      'HighText Machine Language',
      'HyperTransfer Mode Logic',
      'Home Tool Markup Language'
    ],
    correct: 0,
    explanation: 'HTML adalah singkatan dari HyperText Markup Language, yaitu bahasa markup standar untuk menstrukturkan halaman web.'
  },
  {
    question: 'Manakah deklarasi yang benar untuk mendefinisikan dokumen sebagai standar HTML5?',
    options: [
      '<doctype html5>',
      '<!DOCTYPE html>',
      '<?xml version="1.0"?>',
      '<html version="5.0">'
    ],
    correct: 1,
    explanation: '<!DOCTYPE html> adalah deklarasi standar dokumen HTML5 yang tidak case-sensitive dan diletakkan pada baris pertama.'
  },
  {
    question: 'Di dalam elemen manakah seluruh konten visual yang dilihat oleh pengunjung web harus diletakkan?',
    options: [
      '<head>',
      '<header>',
      '<body>',
      '<main-view>'
    ],
    correct: 2,
    explanation: 'Elemen <body> membungkus seluruh konten visual yang dirender oleh browser ke pengguna (teks, gambar, tabel, dsb).'
  },
  {
    question: 'Apa fungsi dari tag <title> di dalam bagian <head>?',
    options: [
      'Menentukan judul utama artikel berukuran paling besar di dalam halaman',
      'Menampilkan teks berjalan di bagian atas halaman',
      'Menentukan judul halaman yang tampil pada tab browser dan hasil pencarian mesin pencari',
      'Membuat watermark otomatis pada halaman web'
    ],
    correct: 2,
    explanation: 'Tag <title> digunakan untuk menentukan judul tab browser dan menjadi judul cuplikan di mesin pencari (SEO).'
  },
  {
    question: 'Mengapa HTML tidak dikategorikan sebagai bahasa pemrograman?',
    options: [
      'Karena HTML tidak bisa dijalankan di komputer berbasis Windows',
      'Karena HTML tidak memiliki logika kondisional, looping, dan fungsi pemrosesan data',
      'Karena HTML diciptakan sebelum ada bahasa komputer',
      'Karena HTML hanya bisa dibaca menggunakan aplikasi notepad'
    ],
    correct: 1,
    explanation: 'HTML adalah bahasa penanda/markup untuk menyusun struktur dokumen, bukan bahasa pemrograman komputasional karena tidak memiliki variabel, loop, atau logika kondisional.'
  }
];

export default quizWeek01;
