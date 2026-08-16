/* ============================================================
   data/modules/week04.js — Minggu 4: Heading, Komentar, & Text Formatting
   ============================================================ */

export const week04 = {
  weekId: 4,
  title: 'Heading, Komentar, dan Text Formatting',
  type: 'regular',
  objectives: [
    'Memahami hierarki dan semantik heading <h1> sampai <h6> (bukan sekadar ukuran teks).',
    'Menuliskan komentar HTML untuk dokumentasi kode dan menonaktifkan kode sementara.',
    'Menerapkan tag pemformatan teks semantik: <strong>, <em>, <mark>, <del>, <ins>, <sub>, <sup>.',
    'Memahami perbedaan visual vs semantik antara <b> vs <strong> dan <i> vs <em>.'
  ],
  competencies: [
    'CPMK-2: Menguasai elemen dan struktur HTML'
  ],
  concepts: [
    {
      heading: '1. Hierarki Heading <h1> sampai <h6>',
      content: `
        <p>HTML menyediakan 6 level heading, mulai dari <code>&lt;h1&gt;</code> (paling penting/utama) hingga <code>&lt;h6&gt;</code> (paling rendah). Heading bukan sekadar untuk memperbesar font, tetapi memberi struktur logis dokumen bagi <strong>Search Engine (SEO)</strong> dan pembaca layar (screen reader tuna netra).</p>
        <ul>
          <li><code>&lt;h1&gt;</code>: Judul utama halaman (sangat disarankan <strong>hanya 1 buah h1</strong> per halaman).</li>
          <li><code>&lt;h2&gt;</code>: Sub-judul atau bab utama.</li>
          <li><code>&lt;h3&gt; - &lt;h6&gt;</code>: Sub-bab bertingkat di bawah h2.</li>
        </ul>
      `
    },
    {
      heading: '2. Komentar HTML',
      content: `
        <p>Komentar digunakan untuk memberi catatan dokumentasi bagi pengembang atau menyembunyikan sementara kode tertentu. Komentar <strong>tidak akan ditampilkan</strong> di layar browser oleh engine rendering.</p>
        <p>Sintaks komentar: <code>&lt;!-- Ini adalah komentar --&gt;</code></p>
      `
    },
    {
      heading: '3. Text Formatting: Semantik vs Presentasional',
      content: `
        <p>Standar HTML5 sangat menekankan makna (semantik) pada pemformatan teks:</p>
        <ul>
          <li><code>&lt;strong&gt;</code>: Menandakan teks sangat penting (ditebalkan, diucapkan dengan penekanan oleh screen reader). Bandingkan dengan <code>&lt;b&gt;</code> yang hanya tebal visual murni.</li>
          <li><code>&lt;em&gt;</code>: Penekanan intonasi kata (huruf miring). Bandingkan dengan <code>&lt;i&gt;</code> yang hanya miring visual.</li>
          <li><code>&lt;mark&gt;</code>: Memberikan efek stabilo kuning (highlighted text).</li>
          <li><code>&lt;del&gt;</code>: Teks yang dicoret (dihapus/kadaluarsa).</li>
          <li><code>&lt;ins&gt;</code>: Teks sisipan baru bergaris bawah.</li>
          <li><code>&lt;sub&gt;</code>: Subscript (teks kecil di bawah, contoh rumus kimia: H<sub>2</sub>O).</li>
          <li><code>&lt;sup&gt;</code>: Superscript (teks kecil di atas, contoh kuadrat: E = mc<sup>2</sup>).</li>
          <li><code>&lt;small&gt;</code>: Teks catatan kaki / hak cipta berukuran kecil.</li>
        </ul>
      `,
      codeExample: {
        html: `<!-- Hierarki Heading -->
<h1>Belajar Pemrograman Web</h1>
<h2>Materi Minggu 4: Formatting Teks</h2>

<!-- Penggunaan Komentar -->
<!-- Catatan: Jangan lupa review rumus kimia di bawah -->

<p>Air memiliki rumus kimia <strong>H<sub>2</sub>O</strong>.</p>
<p>Rumus luas lingkaran adalah <em>&pi;r<sup>2</sup></em>.</p>
<p>Harga promo: <del>Rp 100.000</del> <ins><mark>Rp 49.000</mark></ins> saja!</p>`,
        css: ''
      },
      visualOutput: `
        <div style="padding:15px;background:#ffffff;border:1px solid #e2e8f0;border-radius:6px;font-family:Arial,sans-serif;">
          <h1 style="font-size:22px;color:#0f172a;margin:0 0 5px 0;">Belajar Pemrograman Web</h1>
          <h2 style="font-size:16px;color:#2563eb;margin:0 0 12px 0;">Materi Minggu 4: Formatting Teks</h2>
          <p style="margin:6px 0;font-size:14px;">Air memiliki rumus kimia <strong>H<sub>2</sub>O</strong>.</p>
          <p style="margin:6px 0;font-size:14px;">Rumus luas lingkaran adalah <em>&pi;r<sup>2</sup></em>.</p>
          <p style="margin:6px 0;font-size:14px;">Harga promo: <del style="color:#94a3b8;">Rp 100.000</del> <ins style="color:#059669;background:#fef08a;padding:2px 4px;">Rp 49.000</ins> saja!</p>
        </div>
      `
    }
  ],
  commonMistakes: [
    {
      mistake: 'Menggunakan tag <h1> hanya karena ingin teks berukuran besar untuk paragraf biasa.',
      fix: 'Gunakan <h1> khusus untuk judul utama halaman. Jika ingin memperbesar font paragraf biasa, atur dengan CSS font-size.'
    },
    {
      mistake: 'Melompati level heading secara acak, misalnya langsung dari <h1> melompat ke <h4>.',
      fix: 'Susun heading secara hierarkis berurutan: <h1> lalu <h2> lalu <h3> untuk struktur dokumen yang rapi.'
    },
    {
      mistake: 'Lupa menutup tag komentar: <!-- Komentar...',
      fix: 'Komentar HTML wajib ditutup dengan tanda --> agar kode di bawahnya tidak ikut tersembunyi.'
    }
  ],
  challenge: {
    title: 'Halaman Artikel Berita & Rumus Matematika',
    description: 'Buatlah struktur artikel berita sederhana yang memuat: 1 judul utama h1, 1 subjudul h2, komentar HTML untuk dokumentasi, paragraf dengan kata kunci tebal (strong) dan miring (em), teks diskon (del dan ins), serta rumus matematika pythagoras: a² + b² = c² menggunakan tag <sup>.',
    hint: 'Gunakan kombinasi <h1>, <h2>, <!-- -->, <p>, <strong>, <em>, <del>, <ins>, dan <sup>.',
    starterCode: {
      html: `<!-- 1. Judul h1 & h2 -->

<!-- 2. Komentar pengembang -->

<!-- 3. Paragraf berformat strong, em, del, ins -->

<!-- 4. Rumus pythagoras dengan sup -->`,
      css: ''
    }
  },
  playgroundExample: {
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Text Formatting</title>
</head>
<body>
  <h1>Artikel Sains & Teknologi</h1>
  <h2>Rumus & Hukum Fisika Terkenal</h2>

  <!-- Komentar tidak akan muncul di browser -->
  <p>Teori Relativitas Khusus: <strong>E = mc<sup>2</sup></strong></p>
  <p>Fotosintesis memerlukan gas <em>CO<sub>2</sub></em> dan air <em>H<sub>2</sub>O</em>.</p>
  
  <hr>

  <h2>Pengumuman Toko</h2>
  <p>Diskon Spesial: <del>Rp 250.000</del> menjadi <ins><mark>Rp 150.000</mark></ins>!</p>
  <p><small>&copy; 2026 Hak Cipta Dilindungi.</small></p>
</body>
</html>`,
    css: `body {
  font-family: 'Segoe UI', Tahoma, sans-serif;
  padding: 20px;
  background-color: #f8fafc;
  color: #1e293b;
}

h1 { color: #1e40af; }
h2 { color: #0891b2; font-size: 18px; }`
  }
};

export default week04;
