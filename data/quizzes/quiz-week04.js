/* ============================================================
   data/quizzes/quiz-week04.js — Quiz Minggu 4: Heading & Formatting
   ============================================================ */

export const quizWeek04 = [
  {
    question: 'Berapakah jumlah level heading yang disediakan oleh standar HTML?',
    options: [
      '3 level (h1 sampai h3)',
      '6 level (h1 sampai h6)',
      '10 level (h1 sampai h10)',
      'Tidak terbatas'
    ],
    correct: 1,
    explanation: 'HTML menyediakan 6 level heading berjenjang, mulai dari <h1> (paling utama) hingga <h6> (paling rendah).'
  },
  {
    question: 'Bagaimana penulisan sintaks komentar yang benar pada dokumen HTML?',
    options: [
      '// Ini adalah komentar',
      '/* Ini adalah komentar */',
      '<!-- Ini adalah komentar -->',
      '# Ini adalah komentar'
    ],
    correct: 2,
    explanation: 'Sintaks komentar dalam HTML diawali dengan <!-- dan diakhiri dengan -->.'
  },
  {
    question: 'Tag manakah yang paling tepat digunakan untuk menuliskan rumus kimia H₂O agar angka 2 berada di posisi bawah (subscript)?',
    options: [
      'H<sup>2</sup>O',
      'H<sub>2</sub>O',
      'H<under>2</under>O',
      'H<down>2</down>O'
    ],
    correct: 1,
    explanation: 'Tag <sub> (subscript) merender teks berukuran lebih kecil dan berada di bawah garis dasar teks normal.'
  },
  {
    question: 'Apa perbedaan semantik antara tag <b> dan tag <strong> dalam standar HTML5 modern?',
    options: [
      '<b> hanya menebalkan huruf secara visual, sedangkan <strong> menandakan teks memiliki arti sangat penting (strong importance)',
      '<b> untuk huruf kapital, sedangkan <strong> untuk huruf kecil',
      '<strong> sudah dihapus dari HTML5 dan digantikan oleh <b>',
      'Tidak ada perbedaan sama sekali baik visual maupun semantik'
    ],
    correct: 0,
    explanation: 'Secara visual keduanya menebalkan teks, tetapi <strong> memiliki bobot semantik kuat yang dipahami oleh mesin pencari dan screen reader.'
  },
  {
    question: 'Tag apakah yang digunakan untuk memberi efek warna stabilo (highlight) pada teks penting?',
    options: [
      '<highlight>',
      '<yellow>',
      '<mark>',
      '<color>'
    ],
    correct: 2,
    explanation: 'Tag <mark> digunakan untuk menandai atau menyoroti teks dengan latar belakang kuning stabilo.'
  }
];

export default quizWeek04;
