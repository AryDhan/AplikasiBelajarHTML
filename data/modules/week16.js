/* ============================================================
   data/modules/week16.js — Minggu 16: Evaluasi Ujian Akhir Semester (UAS)
   Evaluation Schema: Rangkuman & Review Komprehensif Minggu 9–15
   ============================================================ */

export const week16 = {
  weekId: 16,
  title: 'Ujian Akhir Semester (UAS) — Rangkuman Minggu 9–15',
  type: 'uas',
  scope: {
    weekRange: [9, 15],
    label: 'Materi Minggu 9 sampai Minggu 15'
  },
  reviewTopics: [
    {
      weekId: 9,
      title: 'Formulir (Form) & Input Interaktif',
      keyPoints: [
        'Struktur <form> beserta method GET vs POST dan action URL.',
        'Atribut <label for> terhubung ke <input id> untuk aksesibilitas.',
        'Tipe input: text, password, email, number, date, radio (grup name sama), checkbox, file, submit.',
        'Elemen <textarea> dan dropdown <select>/<option>.',
        'Validasi HTML5: required, placeholder, pattern, min, max.'
      ]
    },
    {
      weekId: 10,
      title: 'Elemen Semantik HTML5 & Proyek Edukasi',
      keyPoints: [
        'Konsep semantik vs div-soup serta manfaatnya bagi SEO dan screen reader.',
        'Peran tag: <header>, <nav>, <main> (hanya 1 per halaman), <section>, <article>, <aside>, <footer>.',
        'Arsitektur Website Portal Edukasi terstruktur.'
      ]
    },
    {
      weekId: 11,
      title: 'Video dalam HTML5',
      keyPoints: [
        'Elemen native <video> menggantikan plugin Flash masa lalu.',
        'Atribut: controls, autoplay, muted (wajib untuk autoplay), loop, poster, width/height.',
        'Tag <source> untuk multi-format video (MP4, WebM, OGG).'
      ]
    },
    {
      weekId: 12,
      title: 'Audio dalam HTML5',
      keyPoints: [
        'Elemen native <audio> untuk musik dan podcast.',
        'Atribut: controls (agar pemutar terlihat), autoplay, muted, loop, preload.',
        'MIME type resmi audio/mpeg untuk format MP3.'
      ]
    },
    {
      weekId: 13,
      title: 'Proyek Website Pribadi / Portofolio',
      keyPoints: [
        'Integrasi seluruh elemen HTML: header profil, bio, tabel pendidikan, list keahlian, dan form kontak.',
        'Penyusunan portofolio profesional mahasiswa informatika.'
      ]
    },
    {
      weekId: 14,
      title: 'Dasar CSS & Metode Implementasi',
      keyPoints: [
        'Prinsip Separation of Concerns (HTML untuk struktur, CSS untuk gaya).',
        'Anatomi aturan: Selector { Property: Value; }.',
        '3 Cara implementasi: Inline, Internal (<style>), dan External (<link rel="stylesheet">).',
        'Alasan External CSS menjadi standar baku industri web modern.'
      ]
    },
    {
      weekId: 15,
      title: 'Selector Lanjutan & Sistem Warna CSS',
      keyPoints: [
        'Ragam selector: Universal (*), Element (tag), Class (.), ID (#), Group (,), Descendant (spasi).',
        'Pseudo-classes interaksi pengguna (:hover, :focus, :active).',
        'Format warna: Color Names, HEX (#RRGGBB), RGB, RGBA (alpha transparansi), dan HSL/HSLA.'
      ]
    }
  ],
  examInfo: {
    weight: '25% dari Nilai Akhir Semester',
    format: 'Evaluasi Teori Akhir Semester & Pengumpulan / Presentasi Tugas Besar Website',
    tips: [
      'Pastikan Anda memahami perbedaan mekanisme method GET dan POST pada formulir.',
      'Kuasai cara penulisan selector CSS (class dot vs ID hash) dan pemisahan properti dengan titik koma.',
      'Tinjau kembali kedua proyek di Project Showcase (Website Edukasi M10 dan Website Pribadi M13).',
      'Lakukan uji coba langsung di Playground untuk melatih kecepatan dan ketepatan penulisan kode.'
    ]
  }
};

export default week16;
