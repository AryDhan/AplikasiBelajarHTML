/* ============================================================
   data/modules/week07.js — Minggu 7: Daftar (List) HTML
   ============================================================ */

export const week07 = {
  weekId: 7,
  title: 'Daftar (List) dalam HTML',
  type: 'regular',
  objectives: [
    'Memahami tiga tipe list dalam HTML: Unordered List, Ordered List, dan Description List.',
    'Menggunakan tag <ul> dan <li> untuk daftar poin tanpa urutan numerik.',
    'Menggunakan tag <ol> dan <li> beserta atribut type, start, dan reversed.',
    'Menggunakan tag <dl>, <dt>, dan <dd> untuk daftar glosarium istilah dan definisi.',
    'Menyusun daftar bertingkat / bersarang (nested list) untuk navigasi hierarkis.'
  ],
  competencies: [
    'CPMK-2: Menguasai elemen dan struktur HTML'
  ],
  concepts: [
    {
      heading: '1. Unordered List (Daftar Tak Berurut) dengan <ul>',
      content: `
        <p>Gunakan <code>&lt;ul&gt;</code> untuk daftar item di mana urutan posisi item <strong>tidak penting</strong> (misalnya daftar belanja, daftar menu makanan, daftar link navigasi). Setiap butir item wajib dibungkus dengan tag <code>&lt;li&gt;</code> (<em>list item</em>).</p>
      `
    },
    {
      heading: '2. Ordered List (Daftar Berurutan) dengan <ol>',
      content: `
        <p>Gunakan <code>&lt;ol&gt;</code> ketika urutan langkah atau prioritas <strong>sangat penting</strong> (misalnya langkah-langkah instalasi software, resep masakan, ranking pemenang). Setiap item juga dibungkus tag <code>&lt;li&gt;</code>.</p>
        <p>Atribut berguna pada tag <code>&lt;ol&gt;</code>:</p>
        <ul>
          <li><code>type="1|A|a|I|i"</code>: Mengubah format penomoran (angka, huruf besar/kecil, angka romawi).</li>
          <li><code>start="n"</code>: Memulai penomoran dari angka tertentu (misal start="5").</li>
          <li><code>reversed</code>: Mengurutkan angka mundur (countdown).</li>
        </ul>
      `
    },
    {
      heading: '3. Description List (Daftar Definisi) dengan <dl>',
      content: `
        <p>Daftar yang digunakan untuk memetakan istilah dan penjelasannya (seperti kamus / glosarium / metadata spesifikasi):</p>
        <ul>
          <li><code>&lt;dl&gt;</code>: <em>Description list</em> (pembungkus utama).</li>
          <li><code>&lt;dt&gt;</code>: <em>Description term</em> (istilah / kata kunci).</li>
          <li><code>&lt;dd&gt;</code>: <em>Description details</em> (uraian / definisi istilah).</li>
        </ul>
      `
    },
    {
      heading: '4. Nested List (Daftar Bersarang)',
      content: `
        <p>Untuk membuat sub-poin atau menu bertingkat, letakkan elemen <code>&lt;ul&gt;</code> atau <code>&lt;ol&gt;</code> baru <strong>di dalam</strong> salah satu elemen <code>&lt;li&gt;</code> induk.</p>
      `,
      codeExample: {
        html: `<!-- 1. Ordered List dengan Romawi & Nested List -->
<h3>Langkah Belajar Web:</h3>
<ol type="I">
  <li>Dasar HTML
    <ul>
      <li>Struktur Dokumen</li>
      <li>Tag & Elemen</li>
      <li>Tabel & List</li>
    </ul>
  </li>
  <li>Dasar CSS</li>
  <li>Proyek Akhir</li>
</ol>

<!-- 2. Description List Glosarium -->
<h3>Glosarium Singkat:</h3>
<dl>
  <dt><strong>HTML</strong></dt>
  <dd>Bahasa markup untuk menyusun kerangka dokumen web.</dd>
  <dt><strong>CSS</strong></dt>
  <dd>Bahasa stylesheet untuk mengatur tampilan dan gaya visual.</dd>
</dl>`,
        css: ''
      },
      visualOutput: `
        <div style="padding:15px;background:#ffffff;border:1px solid #e2e8f0;border-radius:6px;font-family:Arial,sans-serif;font-size:13px;">
          <h4 style="margin:0 0 8px 0;color:#1e40af;">Langkah Belajar Web:</h4>
          <ol type="I" style="margin:0 0 15px 20px;padding:0;color:#334155;">
            <li>Dasar HTML
              <ul style="margin:4px 0 6px 20px;padding:0;color:#64748b;">
                <li>Struktur Dokumen</li>
                <li>Tag & Elemen</li>
                <li>Tabel & List</li>
              </ul>
            </li>
            <li>Dasar CSS</li>
            <li>Proyek Akhir</li>
          </ol>
          <h4 style="margin:0 0 8px 0;color:#1e40af;">Glosarium Singkat:</h4>
          <dl style="margin:0;color:#334155;">
            <dt style="font-weight:bold;color:#0f172a;">HTML</dt>
            <dd style="margin:0 0 8px 15px;color:#64748b;">Bahasa markup untuk menyusun kerangka dokumen web.</dd>
            <dt style="font-weight:bold;color:#0f172a;">CSS</dt>
            <dd style="margin:0 0 0 15px;color:#64748b;">Bahasa stylesheet untuk mengatur tampilan dan gaya visual.</dd>
          </dl>
        </div>
      `
    }
  ],
  commonMistakes: [
    {
      mistake: 'Menaruh teks langsung di dalam <ul> tanpa membungkusnya dengan <li>, contoh: <ul>Item 1</ul>.',
      fix: 'Semua butir daftar di dalam <ul> atau <ol> WAJIB dibungkus dengan tag <li>.'
    },
    {
      mistake: 'Menaruh nested list <ul> di luar tag <li> induk, contoh: <ul><li>Item 1</li><ul>...</ul></ul>.',
      fix: 'Daftar bersarang harus berada di DALAM elemen <li> induk: <li>Item 1 <ul>...</ul></li>.'
    }
  ],
  challenge: {
    title: 'Daftar Menu Restoran Bersarang & Glosarium',
    description: 'Buatlah daftar menu kafe/restoran menggunakan <ul> bersarang (Kategori Minuman -> Kopi, Teh; Kategori Makanan -> Nasi Goreng, Roti Bakar), serta sebuah <dl> daftar istilah rasa dan bahan kopi (Espresso, Latte, Americano).',
    hint: 'Gunakan <ul> dengan nested <ul> di dalam <li>, serta tag <dl>, <dt>, dan <dd>.',
    starterCode: {
      html: `<!-- 1. Menu Restoran Bersarang -->

<!-- 2. Glosarium Kopi dengan <dl> -->`,
      css: ''
    }
  },
  playgroundExample: {
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Tipe List</title>
</head>
<body>
  <h2>Daftar Topik Perkuliahan</h2>
  <ol type="1" start="1">
    <li>Pengenalan HTML Dasar</li>
    <li>Tag, Elemen, dan Atribut</li>
    <li>Pengaturan Paragraf & Teks</li>
    <li>Hyperlink & Navigasi</li>
    <li>Media Gambar & Tabel</li>
    <li>List & Daftar Bertingkat</li>
  </ol>

  <hr>

  <h2>Status Pengerjaan Tugas</h2>
  <ul style="list-style-type: square;">
    <li>Tugas 1: Selesai ✅</li>
    <li>Tugas 2: Sedang Dikerjakan ⏳</li>
    <li>Tugas Besar: Persiapan 🚀</li>
  </ul>
</body>
</html>`,
    css: `body {
  font-family: 'Segoe UI', Tahoma, sans-serif;
  padding: 20px;
}

ol, ul {
  line-height: 1.8;
  color: #334155;
}`
  }
};

export default week07;
