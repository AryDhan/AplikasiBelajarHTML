/* ============================================================
   data/quizzes/quiz-week13.js — Quiz Minggu 13: Web Portofolio
   ============================================================ */

export const quizWeek13 = [
  {
    question: 'Bagian esensial apakah yang paling tepat disajikan dalam bentuk elemen <table> pada website portofolio pribadi?',
    options: [
      'Foto selfie liburan',
      'Riwayat jenjang pendidikan dan sertifikasi kompetensi',
      'Logo brand website',
      'Tombol share media sosial'
    ],
    correct: 1,
    explanation: 'Data tabular seperti riwayat tahun, nama institusi, dan jenjang pendidikan sangat cocok dan rapi ditampilkan menggunakan elemen <table>.'
  },
  {
    question: 'Tag manakah yang paling ideal digunakan untuk menampilkan daftar keahlian teknis (skills list)?',
    options: [
      '<ol> jika memiliki urutan keahlian, atau <ul> untuk daftar poin setara',
      'Hanya boleh menggunakan tag <pre>',
      'Wajib menggunakan tag <blockquote>',
      'Harus menggunakan tag <marquee>'
    ],
    correct: 0,
    explanation: 'Tag list (<ul> untuk poin acak atau <ol> untuk urutan tingkat kemahiran) adalah standar semantik untuk daftar keahlian.'
  },
  {
    question: 'Mengapa pada formulir kontak portofolio disarankan menggunakan input type="email" daripada type="text"?',
    options: [
      'Karena type="email" otomatis memvalidasi struktur alamat email dan menampilkan keyboard @ di smartphone',
      'Karena type="text" tidak bisa diketik di komputer',
      'Agar font email berubah menjadi tebal',
      'Supaya email langsung terkirim tanpa menekan tombol kirim'
    ],
    correct: 0,
    explanation: 'Input type="email" memberikan validasi bawaan browser dan mengoptimalkan keyboard virtual pada perangkat seluler.'
  },
  {
    question: 'Tag semantik apakah yang paling tepat digunakan untuk membungkus kartu profil identitas di bagian paling atas portofolio?',
    options: [
      '<header>',
      '<footer>',
      '<aside>',
      '<meta>'
    ],
    correct: 0,
    explanation: 'Elemen <header> adalah wadah pengantar yang tepat untuk membungkus judul, foto profil, dan deskripsi pembuka portofolio.'
  },
  {
    question: 'Manakah praktik terbaik saat menyematkan foto profil diri pada tag <img> di portofolio profesional?',
    options: [
      'Mengosongkan atribut alt karena sudah ada nama di bawahnya',
      'Memberikan alt="Foto profil resmi [Nama Mahasiswa]" agar informatif bagi screen reader',
      'Menuliskan file berekstensi .exe',
      'Menggunakan ukuran file 50 MegaByte agar sangat tajam'
    ],
    correct: 1,
    explanation: 'Memberikan deskripsi alt yang spesifik dan jelas merupakan praktik terbaik aksesibilitas web dan SEO citra.'
  }
];

export default quizWeek13;
