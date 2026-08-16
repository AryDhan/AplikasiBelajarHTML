/* ============================================================
   data/quizzes/quiz-week10.js — Quiz Minggu 10: Semantik HTML
   ============================================================ */

export const quizWeek10 = [
  {
    question: 'Apa arti dari istilah "Elemen Semantik" dalam standar HTML5?',
    options: [
      'Tag yang membuat halaman web otomatis bergerak/animasi',
      'Tag yang secara jelas mendeskripsikan makna dan perannya baik kepada browser maupun pengembang',
      'Tag yang hanya boleh digunakan oleh desainer grafis',
      'Tag yang otomatis mengubah font menjadi tulisan tangan'
    ],
    correct: 1,
    explanation: 'Elemen semantik adalah tag yang memiliki arti intrinsik (misal <header>, <article>, <footer>) yang memperjelas struktur dokumen bagi browser, developer, dan mesin pencari.'
  },
  {
    question: 'Berapakah jumlah maksimal elemen <main> yang diperbolehkan aktif pada satu dokumen halaman web?',
    options: [
      'Bebas sebanyak-banyaknya',
      'Maksimal 3 buah',
      'Hanya 1 buah',
      'Tidak boleh ada sama sekali'
    ],
    correct: 2,
    explanation: 'Setiap dokumen HTML hanya boleh memiliki satu elemen <main> aktif yang merepresentasikan konten inti dari halaman tersebut.'
  },
  {
    question: 'Tag semantik manakah yang paling tepat digunakan untuk membungkus konten independen yang dapat didistribusikan ulang (seperti sebuah postingan blog atau kartu berita)?',
    options: [
      '<section>',
      '<article>',
      '<aside>',
      '<div>'
    ],
    correct: 1,
    explanation: '<article> dirancang untuk membungkus konten mandiri yang tetap bermakna secara utuh meskipun dipisahkan dari halaman aslinya (sindikasi/RSS).'
  },
  {
    question: 'Tag semantik manakah yang digunakan untuk membungkus bagian samping halaman yang berisi konten pendukung/pelengkap (sidebar)?',
    options: [
      '<aside>',
      '<sidebar>',
      '<secondary>',
      '<widget>'
    ],
    correct: 0,
    explanation: '<aside> merepresentasikan bagian konten yang berkaitan secara tidak langsung atau menjadi pelengkap konten utama (sidebar/catatan samping).'
  },
  {
    question: 'Apa dampak positif utama dari penggunaan struktur HTML Semantik terhadap SEO (Search Engine Optimization)?',
    options: [
      'Website otomatis mendapat ranking 1 Google tanpa perlu konten',
      'Crawler mesin pencari dapat mengindeks dan memahami hierarki informasi konten secara lebih akurat',
      'Ukuran file HTML menjadi 100 kali lebih besar',
      'Browser tidak perlu mengunduh file CSS'
    ],
    correct: 1,
    explanation: 'Tag semantik membantu bot mesin pencari memahami bobot dan konteks setiap bagian konten (mana judul, artikel utama, navigasi, dan footer).'
  }
];

export default quizWeek10;
