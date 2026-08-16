/* ============================================================
   data/quizzes/quiz-week11.js — Quiz Minggu 11: Video HTML5
   ============================================================ */

export const quizWeek11 = [
  {
    question: 'Atribut apakah yang WAJIB disertakan pada tag <video> agar tombol play, pause, seek bar, dan volume tampil di layar pengguna?',
    options: [
      'buttons',
      'controls',
      'player="true"',
      'interface'
    ],
    correct: 1,
    explanation: 'Atribut controls menampilkan antarmuka bawaan pemutar video (play/pause, volume, fullscreen, seek bar).'
  },
  {
    question: 'Format file video manakah yang memiliki tingkat dukungan kompatibilitas browser paling tinggi di internet saat ini?',
    options: [
      'AVI',
      'WMV',
      'MP4 (H.264)',
      'FLV'
    ],
    correct: 2,
    explanation: 'Format MP4 dengan codec H.264 didukung secara universal oleh hampir 100% web browser desktop dan seluler modern.'
  },
  {
    question: 'Atribut apakah yang digunakan untuk menampilkan gambar thumbnail/cover sebelum video diputar oleh pengguna?',
    options: [
      'thumbnail="..."',
      'cover="..."',
      'poster="..."',
      'preview="..."'
    ],
    correct: 2,
    explanation: 'Atribut poster="url_gambar" mendefinisikan gambar pratinjau yang ditampilkan sebelum tombol putar ditekan.'
  },
  {
    question: 'Mengapa atribut autoplay seringkali tidak berfungsi jika tidak disertai dengan atribut muted?',
    options: [
      'Karena browser kehabisan memori RAM',
      'Karena kebijakan keamanan browser (Autoplay Policy) memblokir video bersuara otomatis demi kenyamanan pengguna',
      'Karena video HTML5 tidak mendukung suara',
      'Karena file MP4 rusak'
    ],
    correct: 1,
    explanation: 'Browser modern membatasi pemutaran otomatis yang bersuara untuk mencegah gangguan audio tak terduga kepada pengguna (harus autoplay muted).'
  },
  {
    question: 'Bagaimanakah cara menyediakan beberapa alternatif format file video (seperti MP4 dan WebM) di dalam satu tag <video>?',
    options: [
      'Membuat tag <video> berkali-kali untuk setiap file',
      'Menyisipkan beberapa tag anak <source> dengan atribut src dan type yang berbeda',
      'Memisahkan nama file dengan tanda koma di dalam atribut src: src="v1.mp4, v2.webm"',
      'Mengubah ekstensi file video menjadi .all'
    ],
    correct: 1,
    explanation: 'Tag <source src="..." type="..."> diletakkan di dalam <video> agar browser memilih format pertama yang didukungnya.'
  }
];

export default quizWeek11;
