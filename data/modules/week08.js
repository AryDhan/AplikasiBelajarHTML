/* ============================================================
   data/modules/week08.js — Minggu 8: Evaluasi Ujian Tengah Semester (UTS)
   Evaluation Schema: Rangkuman & Review Komprehensif Minggu 1–7
   ============================================================ */

export const week08 = {
  weekId: 8,
  title: 'Ujian Tengah Semester (UTS) — Rangkuman Minggu 1–7',
  type: 'uts',
  scope: {
    weekRange: [1, 7],
    label: 'Materi Minggu 1 sampai Minggu 7'
  },
  reviewTopics: [
    {
      weekId: 1,
      title: 'Pengenalan HTML & Struktur Dasar',
      keyPoints: [
        'Definisi HTML sebagai bahasa markup standar dan cara kerja browser.',
        'Deklarasi wajib <!DOCTYPE html> untuk standar HTML5.',
        'Struktur kerangka dasar: tag <html>, <head>, <title>, dan <body>.',
        'Perbedaan konten metadata di <head> dan konten visual di <body>.'
      ]
    },
    {
      weekId: 2,
      title: 'Tag, Elemen, dan Atribut',
      keyPoints: [
        'Perbedaan tag (sintaks kode), elemen (kesatuan utuh), dan atribut (properti tambahan).',
        'Tag berpasangan vs Void Elements (<br>, <hr>, <img>).',
        'Atribut global: id (unik), class (reusable), title (tooltip), dan style (inline).'
      ]
    },
    {
      weekId: 3,
      title: 'Paragraf, Whitespace, dan Pemformatan',
      keyPoints: [
        'Penggunaan tag <p> dan aturan whitespace collapse di browser.',
        'Pindah baris dengan <br> dan pemisah horizontal dengan <hr>.',
        'Preformatted text dengan <pre> untuk mempertahankan spasi dan font monospace.'
      ]
    },
    {
      weekId: 4,
      title: 'Heading, Komentar, & Text Formatting',
      keyPoints: [
        'Hierarki heading <h1> hingga <h6> untuk SEO dan struktur dokumen.',
        'Sintaks komentar HTML: <!-- komentar -->.',
        'Formatting semantik: <strong>, <em>, <mark>, <del>, <ins>, <sub>, <sup>.'
      ]
    },
    {
      weekId: 5,
      title: 'Hyperlink & Navigasi Web',
      keyPoints: [
        'Tag jangkar <a> dan atribut wajib href.',
        'Link absolut vs link relatif.',
        'Atribut target="_blank" dan pengamanan rel="noopener noreferrer".',
        'Link khusus: mailto:, tel:, dan bookmark internal halaman (#id).'
      ]
    },
    {
      weekId: 6,
      title: 'Gambar dan Tabel Data',
      keyPoints: [
        'Tag <img> dengan atribut wajib src dan alt (aksesibilitas screen reader).',
        'Tag semantik <figure> dan <figcaption>.',
        'Struktur tabel: <table>, <tr>, <th>, <td>, <thead>, <tbody>, <tfoot>.',
        'Penggabungan sel tabel dengan colspan (kolom) dan rowspan (baris).'
      ]
    },
    {
      weekId: 7,
      title: 'Daftar (List) HTML',
      keyPoints: [
        'Unordered List (<ul>) dan Ordered List (<ol>) dengan butir <li>.',
        'Atribut <ol>: type, start, dan reversed.',
        'Description List: <dl>, <dt> (istilah), dan <dd> (uraian).',
        'Nested List (daftar bersarang) untuk navigasi dan struktur hierarki.'
      ]
    }
  ],
  examInfo: {
    weight: '25% dari Nilai Akhir Semester',
    format: 'Ujian Daring / Ujian Tertulis & Praktik Pembuatan Halaman Web Statis',
    tips: [
      'Pelajari kembali seluruh kuis interaktif dari Minggu 1 hingga Minggu 7.',
      'Latihlah menulis struktur HTML lengkap tanpa menggunakan autocomplete atau copy-paste.',
      'Perhatikan penulisan tag penutup dan tanda petik pada setiap atribut agar tidak terjadi error parsing.',
      'Gunakan playground untuk menguji kombinasi tabel, list, gambar, dan link secara terpadu.'
    ]
  }
};

export default week08;
