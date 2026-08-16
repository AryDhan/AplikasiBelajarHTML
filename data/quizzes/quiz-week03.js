/* ============================================================
   data/quizzes/quiz-week03.js — Quiz Minggu 3: Paragraf
   ============================================================ */

export const quizWeek03 = [
  {
    question: 'Bagaimanakah perlakuan web browser terhadap penekanan tombol spasi 10 kali berturut-turut di dalam tag <p>?',
    options: [
      'Browser menampilkan 10 spasi sesuai ketikan',
      'Browser menganggapnya sebagai error sintaks',
      'Browser memadatkannya menjadi 1 spasi tunggal (whitespace collapse)',
      'Browser otomatis mengubah teks menjadi huruf tebal'
    ],
    correct: 2,
    explanation: 'Browser secara bawaan menerapkan aturan whitespace collapse di mana banyak spasi atau enter berurutan dipadatkan menjadi satu spasi tunggal.'
  },
  {
    question: 'Tag apakah yang tepat digunakan untuk berpindah ke baris baru di dalam bait puisi tanpa membuat paragraf baru?',
    options: [
      '<hr>',
      '<br>',
      '<lb>',
      '<newline>'
    ],
    correct: 1,
    explanation: 'Tag <br> (break line) berfungsi untuk memutus baris teks dan melanjutkan teks persis di baris berikutnya.'
  },
  {
    question: 'Apa fungsi utama dari elemen <hr> dalam dokumen HTML?',
    options: [
      'Membuat teks menjadi bergaris bawah (underline)',
      'Membuat garis pembatas horizontal sebagai pemisah tematik antar topik',
      'Membuat baris header tabel',
      'Menghapus baris teks sebelumnya'
    ],
    correct: 1,
    explanation: '<hr> (Horizontal Rule) menghasilkan garis pemisah horizontal untuk memisahkan topik konten yang berbeda.'
  },
  {
    question: 'Jika ingin menampilkan teks yang mempertahankan seluruh format spasi ganda, tombol tab, dan baris baru persis seperti di teks editor, tag apakah yang wajib digunakan?',
    options: [
      '<pre>',
      '<format>',
      '<code>',
      '<paragraph>'
    ],
    correct: 0,
    explanation: 'Tag <pre> (preformatted text) menampilkan teks dalam font monospace dan mempertahankan spasi serta enter persis seperti yang diketik.'
  },
  {
    question: 'Manakah penulisan tag <br> yang valid menurut standar HTML5?',
    options: [
      'Hanya boleh ditulis <break>',
      'Hanya boleh ditulis <br></br>',
      'Boleh ditulis <br> maupun <br />',
      'Wajib diawali tanda kutip "<br>"'
    ],
    correct: 2,
    explanation: 'Dalam HTML5, void element seperti line break dapat ditulis sebagai <br> maupun <br /> (self-closing style dari XHTML).'
  }
];

export default quizWeek03;
