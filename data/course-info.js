/* ============================================================
   data/course-info.js — Informasi Mata Kuliah, CPMK, Penilaian
   ============================================================ */

export const courseInfo = {
  name: 'Pemrograman Web I',
  code: 'IF-201',
  university: 'Universitas Siber Asia',
  faculty: 'Fakultas Sains dan Teknologi',
  program: 'S1 Informatika',
  semester: 2,
  credits: 3,
  mode: 'Full Online Learning',

  description: `Mata kuliah Pemrograman Web I membahas konsep dasar pengembangan web menggunakan HTML dan CSS. Mahasiswa akan mempelajari struktur dokumen HTML, elemen-elemen HTML, serta dasar-dasar CSS untuk membangun halaman web sederhana yang terstruktur dan responsif.`,

  media: [
    { type: 'Video', desc: 'Video e-learning untuk setiap pertemuan' },
    { type: 'PPT', desc: 'Slide presentasi materi kuliah' },
    { type: 'Modul', desc: 'Modul pembelajaran tertulis' },
    { type: 'Paper/Jurnal', desc: 'Referensi paper dan jurnal terkait' },
    { type: 'Link Pendukung', desc: 'Tautan ke dokumentasi resmi dan tutorial' }
  ],

  software: [
    { name: 'Visual Studio Code', desc: 'Editor kode sumber utama untuk menulis HTML dan CSS', url: 'https://code.visualstudio.com/' },
    { name: 'Web Browser', desc: 'Google Chrome, Mozilla Firefox, atau Microsoft Edge untuk preview', url: 'https://www.google.com/chrome/' }
  ]
};

export const cpmk = [
  {
    id: 'CPMK-1',
    title: 'Memahami konsep dasar pemrograman web',
    description: 'Mahasiswa mampu menjelaskan konsep dasar pemrograman web, termasuk pengertian HTML, struktur dokumen HTML, serta peran HTML dalam pengembangan web.',
    weeks: [1, 2]
  },
  {
    id: 'CPMK-2',
    title: 'Menguasai elemen dan struktur HTML',
    description: 'Mahasiswa mampu menggunakan berbagai tag, elemen, dan atribut HTML untuk membangun struktur halaman web yang valid dan semantik.',
    weeks: [2, 3, 4, 5, 6, 7]
  },
  {
    id: 'CPMK-3',
    title: 'Menguasai elemen interaktif dan multimedia HTML',
    description: 'Mahasiswa mampu mengimplementasikan form, video, audio, dan elemen semantik dalam halaman web.',
    weeks: [9, 10, 11, 12]
  },
  {
    id: 'CPMK-4',
    title: 'Membangun website dengan HTML',
    description: 'Mahasiswa mampu merancang dan membangun website edukasi dan website pribadi menggunakan HTML.',
    weeks: [10, 13]
  },
  {
    id: 'CPMK-5',
    title: 'Memahami dan menerapkan dasar CSS',
    description: 'Mahasiswa mampu memahami konsep CSS, menggunakan selector dan properti warna, serta mengimplementasikan CSS ke dalam halaman HTML.',
    weeks: [14, 15]
  }
];

export const grading = [
  { component: 'Ujian Tengah Semester (UTS)', weight: 25, icon: '📝' },
  { component: 'Ujian Akhir Semester (UAS)', weight: 25, icon: '🎓' },
  { component: 'Tugas 1 dan 2', weight: 20, icon: '📋' },
  { component: 'Kehadiran / Sikap / Perilaku', weight: 10, icon: '👥' },
  { component: 'Tugas Besar', weight: 10, icon: '💻' },
  { component: 'Kuis', weight: 10, icon: '❓' }
];

export const references = [
  {
    title: 'HTML Living Standard',
    author: 'WHATWG',
    url: 'https://html.spec.whatwg.org/',
    type: 'Standar'
  },
  {
    title: 'MDN Web Docs — HTML',
    author: 'Mozilla',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    type: 'Dokumentasi'
  },
  {
    title: 'MDN Web Docs — CSS',
    author: 'Mozilla',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    type: 'Dokumentasi'
  },
  {
    title: 'W3Schools HTML Tutorial',
    author: 'W3Schools',
    url: 'https://www.w3schools.com/html/',
    type: 'Tutorial'
  },
  {
    title: 'W3Schools CSS Tutorial',
    author: 'W3Schools',
    url: 'https://www.w3schools.com/css/',
    type: 'Tutorial'
  },
  {
    title: 'CSS: The Definitive Guide, 5th Edition',
    author: 'Eric A. Meyer, Estelle Weyl',
    url: '',
    type: 'Buku'
  },
  {
    title: 'Learning Web Design, 5th Edition',
    author: 'Jennifer Robbins',
    url: '',
    type: 'Buku'
  },
  {
    title: 'HTML and CSS: Design and Build Websites',
    author: 'Jon Duckett',
    url: '',
    type: 'Buku'
  }
];
