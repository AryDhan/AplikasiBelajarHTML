/* ============================================================
   data/quizzes/quiz-week09.js — Quiz Minggu 9: Formulir HTML
   ============================================================ */

export const quizWeek09 = [
  {
    question: 'Metode HTTP apakah pada formulir yang mengirimkan data tersembunyi di dalam body request (bukan di URL)?',
    options: [
      'method="GET"',
      'method="POST"',
      'method="PUT"',
      'method="HIDE"'
    ],
    correct: 1,
    explanation: 'method="POST" mengirimkan data form secara aman di dalam body HTTP request sehingga tidak terlihat di bilah alamat browser.'
  },
  {
    question: 'Atribut apakah pada tag <label> yang harus memiliki nilai yang sama persis dengan atribut "id" pada tag <input>?',
    options: [
      'name',
      'target',
      'for',
      'to'
    ],
    correct: 2,
    explanation: 'Atribut for pada elemen <label> dipasangkan dengan id elemen <input> agar label dapat diklik untuk mengaktifkan input tersebut.'
  },
  {
    question: 'Agar pilihan radio button menjadi opsi eksklusif (hanya bisa memilih 1 opsi dari beberapa pilihan), apa yang harus disamakan pada semua tag <input type="radio">?',
    options: [
      'Atribut id',
      'Atribut value',
      'Atribut name',
      'Atribut class'
    ],
    correct: 2,
    explanation: 'Semua input radio dalam satu kelompok pilihan wajib memiliki atribut name="..." yang sama agar browser memperlakukannya sebagai pilihan eksklusif.'
  },
  {
    question: 'Tag apakah yang digunakan untuk membuat kolom isian teks multi-baris (misal untuk kolom komentar atau pesan)?',
    options: [
      '<input type="multiline">',
      '<textbox>',
      '<textarea>',
      '<textblock>'
    ],
    correct: 2,
    explanation: 'Tag <textarea> digunakan untuk membuat area input teks yang dapat menampung banyak baris teks.'
  },
  {
    question: 'Atribut validasi HTML5 manakah yang mewajibkan pengguna mengisi suatu input sebelum formulir dapat dikirimkan?',
    options: [
      'mandatory',
      'required',
      'validate="true"',
      'must-fill'
    ],
    correct: 1,
    explanation: 'Atribut boolean required pada input HTML5 mencegah form disubmit sebelum kotak isian tersebut diisi oleh pengguna.'
  }
];

export default quizWeek09;
