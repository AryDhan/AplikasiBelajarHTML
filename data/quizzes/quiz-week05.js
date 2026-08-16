/* ============================================================
   data/quizzes/quiz-week05.js — Quiz Minggu 5: Hyperlink
   ============================================================ */

export const quizWeek05 = [
  {
    question: 'Atribut wajib apakah yang digunakan pada tag <a> untuk menentukan URL atau alamat halaman tujuan?',
    options: [
      'src',
      'href',
      'link',
      'url'
    ],
    correct: 1,
    explanation: 'href (Hypertext Reference) adalah atribut utama tag <a> yang menentukan alamat tujuan tautan.'
  },
  {
    question: 'Nilai atribut target apakah yang digunakan agar tautan terbuka di tab atau jendela browser baru?',
    options: [
      'target="_new"',
      'target="_blank"',
      'target="_tab"',
      'target="_open"'
    ],
    correct: 1,
    explanation: 'target="_blank" adalah nilai standar untuk membuka dokumen tautan di jendela atau tab baru.'
  },
  {
    question: 'Mengapa sangat dianjurkan menyertakan atribut rel="noopener" ketika menggunakan target="_blank"?',
    options: [
      'Agar ukuran font tautan menjadi otomatis besar',
      'Untuk mencegah halaman tujuan mengakses window.opener halaman asal demi keamanan (mencegah tabnabbing)',
      'Agar warna tautan otomatis berubah menjadi biru',
      'Untuk mempercepat kecepatan loading video'
    ],
    correct: 1,
    explanation: 'rel="noopener" mencegah halaman eksternal yang baru dibuka mengambil alih atau memanipulasi halaman asal melalui objek window.opener (keamanan).'
  },
  {
    question: 'Bagaimanakah sintaks link untuk membuka aplikasi pengirim email otomatis ke alamat "kontak@unsia.ac.id"?',
    options: [
      '<a href="email:kontak@unsia.ac.id">Kirim Email</a>',
      '<a href="mailto:kontak@unsia.ac.id">Kirim Email</a>',
      '<a src="sendmail:kontak@unsia.ac.id">Kirim Email</a>',
      '<a to="kontak@unsia.ac.id">Kirim Email</a>'
    ],
    correct: 1,
    explanation: 'Protokol mailto: digunakan di dalam href untuk memicu aplikasi email klien pengguna.'
  },
  {
    question: 'Bagaimana cara membuat link bookmark yang mengarahkan layar langsung ke elemen dengan id="profil-dosen"?',
    options: [
      '<a href=".profil-dosen">Profil Dosen</a>',
      '<a href="#profil-dosen">Profil Dosen</a>',
      '<a href="id:profil-dosen">Profil Dosen</a>',
      '<a target="profil-dosen">Profil Dosen</a>'
    ],
    correct: 1,
    explanation: 'Tanda pagar (#) di awal nilai href digunakan untuk menunjuk ke atribut id elemen di halaman yang sama.'
  }
];

export default quizWeek05;
