/* ============================================================
   data/modules/week06.js — Minggu 6: Gambar dan Tabel
   ============================================================ */

export const week06 = {
  weekId: 6,
  title: 'Gambar dan Tabel',
  type: 'regular',
  objectives: [
    'Menyematkan gambar menggunakan tag <img> dengan atribut wajib src dan alt.',
    'Memahami pentingnya atribut alt untuk aksesibilitas screen reader dan SEO.',
    'Membungkus gambar dengan elemen semantik <figure> dan <figcaption>.',
    'Menyusun struktur tabel data menggunakan <table>, <tr>, <th>, dan <td>.',
    'Menerapkan pengelompokan <thead>, <tbody>, <tfoot> serta penggabungan sel colspan dan rowspan.'
  ],
  competencies: [
    'CPMK-2: Menguasai elemen dan struktur HTML'
  ],
  concepts: [
    {
      heading: '1. Menyematkan Gambar dengan Tag <img>',
      content: `
        <p>Tag <code>&lt;img&gt;</code> adalah tag tunggal (void element) yang digunakan untuk menampilkan gambar. Dua atribut wajib pada tag ini adalah:</p>
        <ul>
          <li><code>src</code> (<em>source</em>): Lokasi file gambar (bisa URL online atau path relatif di lokal).</li>
          <li><code>alt</code> (<em>alternative text</em>): Teks deskriptif yang muncul jika gambar gagal dimuat, serta dibacakan oleh pembaca layar (screen reader) bagi penyandang disabilitas netra.</li>
          <li><code>width</code> & <code>height</code>: Menentukan dimensi lebar dan tinggi gambar dalam satuan piksel.</li>
        </ul>
        <p>Gunakan tag semantik <code>&lt;figure&gt;</code> dan <code>&lt;figcaption&gt;</code> jika gambar memiliki keterangan teks di bawahnya.</p>
      `
    },
    {
      heading: '2. Struktur Tabel HTML',
      content: `
        <p>Tabel digunakan untuk menampilkan <strong>data tabular</strong> (bukan untuk layout halaman). Komponen dasar tabel meliputi:</p>
        <ul>
          <li><code>&lt;table&gt;</code>: Pembungkus tabel utama.</li>
          <li><code>&lt;tr&gt;</code> (<em>table row</em>): Baris tabel.</li>
          <li><code>&lt;th&gt;</code> (<em>table header</em>): Sel judul kolom (tebal dan rata tengah otomatis).</li>
          <li><code>&lt;td&gt;</code> (<em>table data</em>): Sel data biasa.</li>
          <li><code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>: Pengelompokan semantik kepala, badan, dan kaki tabel.</li>
        </ul>
      `
    },
    {
      heading: '3. Penggabungan Sel: colspan dan rowspan',
      content: `
        <ul>
          <li><code>colspan="n"</code>: Menggabungkan beberapa kolom secara horizontal (ke kanan).</li>
          <li><code>rowspan="n"</code>: Menggabungkan beberapa baris secara vertikal (ke bawah).</li>
        </ul>
      `,
      codeExample: {
        html: `<!-- Gambar dengan figure dan figcaption -->
<figure>
  <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300" alt="Laptop dan Koding" width="280">
  <figcaption>Gambar 1: Aktivitas pemrograman web.</figcaption>
</figure>

<!-- Tabel Jadwal Kuliah dengan colspan dan rowspan -->
<table border="1" cellpadding="6" cellspacing="0">
  <thead>
    <tr bgcolor="#e2e8f0">
      <th>Hari</th>
      <th>Mata Kuliah</th>
      <th>SKS</th>
      <th>Ruang</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Senin</td>
      <td>Pemrograman Web I</td>
      <td>3</td>
      <td>Lab Online 1</td>
    </tr>
    <tr>
      <td>Algoritma & Struktur Data</td>
      <td>3</td>
      <td>Lab Online 2</td>
    </tr>
    <tr>
      <td>Jumat</td>
      <td colspan="3" align="center"><em>Bimbingan Tugas Proyek</em></td>
    </tr>
  </tbody>
</table>`,
        css: ''
      },
      visualOutput: `
        <div style="padding:15px;background:#ffffff;border:1px solid #e2e8f0;border-radius:6px;font-family:Arial,sans-serif;font-size:13px;">
          <div style="margin-bottom:15px;">
            <div style="width:200px;height:70px;background:#e2e8f0;display:flex;align-items:center;justify-content:center;color:#475569;border-radius:4px;">[ Foto: Laptop & Koding ]</div>
            <p style="font-size:11px;color:#64748b;margin:4px 0 0 0;"><em>Gambar 1: Aktivitas pemrograman web.</em></p>
          </div>
          <table style="width:100%;border-collapse:collapse;font-size:12px;border:1px solid #cbd5e1;">
            <thead>
              <tr style="background:#f1f5f9;">
                <th style="border:1px solid #cbd5e1;padding:6px;">Hari</th>
                <th style="border:1px solid #cbd5e1;padding:6px;">Mata Kuliah</th>
                <th style="border:1px solid #cbd5e1;padding:6px;">SKS</th>
                <th style="border:1px solid #cbd5e1;padding:6px;">Ruang</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="border:1px solid #cbd5e1;padding:6px;font-weight:bold;" rowspan="2">Senin</td>
                <td style="border:1px solid #cbd5e1;padding:6px;">Pemrograman Web I</td>
                <td style="border:1px solid #cbd5e1;padding:6px;text-align:center;">3</td>
                <td style="border:1px solid #cbd5e1;padding:6px;">Lab Online 1</td>
              </tr>
              <tr>
                <td style="border:1px solid #cbd5e1;padding:6px;">Algoritma & Data</td>
                <td style="border:1px solid #cbd5e1;padding:6px;text-align:center;">3</td>
                <td style="border:1px solid #cbd5e1;padding:6px;">Lab Online 2</td>
              </tr>
              <tr>
                <td style="border:1px solid #cbd5e1;padding:6px;font-weight:bold;">Jumat</td>
                <td style="border:1px solid #cbd5e1;padding:6px;text-align:center;color:#64748b;" colspan="3"><em>Bimbingan Tugas Proyek</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ],
  commonMistakes: [
    {
      mistake: 'Mengosongkan atau tidak menuliskan atribut alt pada tag <img>.',
      fix: 'Selalu tuliskan deskripsi gambar pada atribut alt="..." demi aksesibilitas pembaca layar dan SEO.'
    },
    {
      mistake: 'Menuliskan teks data langsung di dalam <tr> tanpa membungkusnya dengan <td> atau <th>.',
      fix: 'Semua konten teks dalam baris tabel (<tr>) wajib dibungkus dalam sel <td> (data) atau <th> (header).'
    },
    {
      mistake: 'Menggunakan tabel HTML untuk mengatur tata letak (layout) seluruh halaman website.',
      fix: 'Tabel hanya digunakan untuk data tabular. Tata letak halaman harus menggunakan CSS Flexbox/Grid.'
    }
  ],
  challenge: {
    title: 'Tabel Daftar Nilai Mahasiswa',
    description: 'Buatlah sebuah tabel daftar nilai mahasiswa yang memiliki <thead> dengan judul kolom (No, Nama, Tugas 1, Tugas 2, Nilai Akhir), <tbody> dengan minimal 2 baris data mahasiswa, dan <tfoot> dengan 1 baris rata-rata kelas yang menggunakan atribut colspan.',
    hint: 'Gunakan <table>, <thead>, <tbody>, <tfoot>, <tr>, <th>, <td>, dan colspan="3".',
    starterCode: {
      html: `<!-- Buat tabel nilai lengkap di sini -->`,
      css: ''
    }
  },
  playgroundExample: {
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Gambar & Tabel</title>
</head>
<body>
  <h2>Profil Mata Kuliah</h2>
  
  <table border="1" cellpadding="8" cellspacing="0" width="100%">
    <thead>
      <tr bgcolor="#dbeafe">
        <th>Komponen</th>
        <th>Bobot</th>
        <th>Keterangan</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>UTS</td>
        <td>25%</td>
        <td>Evaluasi Minggu 1-7</td>
      </tr>
      <tr>
        <td>UAS</td>
        <td>25%</td>
        <td>Evaluasi Minggu 9-15</td>
      </tr>
      <tr>
        <td>Tugas & Praktik</td>
        <td>20%</td>
        <td>Tugas 1 dan Tugas 2</td>
      </tr>
    </tbody>
    <tfoot>
      <tr bgcolor="#f1f5f9">
        <td colspan="2"><strong>Total Bobot Evaluasi Pokok</strong></td>
        <td><strong>70%</strong></td>
      </tr>
    </tfoot>
  </table>
</body>
</html>`,
    css: `body {
  font-family: Arial, sans-serif;
  padding: 20px;
}

table {
  border-collapse: collapse;
  margin-top: 15px;
}

th, td {
  text-align: left;
}`
  }
};

export default week06;
