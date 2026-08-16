/* ============================================================
   data/modules/week05.js — Minggu 5: Hyperlink (Tautan Web)
   ============================================================ */

export const week05 = {
  weekId: 5,
  title: 'Hyperlink & Navigasi Web',
  type: 'regular',
  objectives: [
    'Memahami konsep hyperlink sebagai inti dari web (World Wide Web).',
    'Menggunakan tag jangkar (anchor) <a> beserta atribut wajib href.',
    'Membedakan link absolut (eksternal) dan link relatif (internal proyek).',
    'Mengontrol target pembukaan link dengan atribut target="_blank" dan rel="noopener".',
    'Membuat link email (mailto:), link telepon (tel:), dan tautan bookmark internal halaman (#id).'
  ],
  competencies: [
    'CPMK-2: Menguasai elemen dan struktur HTML'
  ],
  concepts: [
    {
      heading: '1. Tag Anchor <a> dan Atribut href',
      content: `
        <p>Hyperlink atau tautan dibuat menggunakan tag <code>&lt;a&gt;</code> (singkatan dari <em>anchor</em>). Atribut terpentingnya adalah <code>href</code> (<em>hypertext reference</em>) yang menentukan alamat URL tujuan.</p>
        <p>Sintaks dasar: <code>&lt;a href="alamat_tujuan"&gt;Teks Tautan&lt;/a&gt;</code></p>
      `
    },
    {
      heading: '2. Link Absolut vs Link Relatif',
      content: `
        <ul>
          <li><strong>Link Absolut:</strong> Mengarah ke website lain dengan menyertakan protokol lengkap (<code>https://...</code>). Contoh: <code>&lt;a href="https://unsia.ac.id"&gt;Universitas Siber Asia&lt;/a&gt;</code>.</li>
          <li><strong>Link Relatif:</strong> Mengarah ke file di dalam satu folder proyek website yang sama. Contoh: <code>&lt;a href="kontak.html"&gt;Halaman Kontak&lt;/a&gt;</code> atau <code>&lt;a href="pages/tentang.html"&gt;Tentang&lt;/a&gt;</code>.</li>
        </ul>
      `
    },
    {
      heading: '3. Atribut target="_blank" dan Keamanan rel="noopener"',
      content: `
        <p>Secara default, saat tautan diklik, halaman baru akan terbuka di tab yang sama. Jika Anda ingin link terbuka di <strong>tab baru</strong> browser, tambahkan atribut <code>target="_blank"</code>.</p>
        <p><strong>Praktik Keamanan:</strong> Selalu tambahkan <code>rel="noopener noreferrer"</code> ketika menggunakan <code>target="_blank"</code> untuk mencegah eksploitasi keamanan phishing (tabnabbing) dari situs eksternal.</p>
      `
    },
    {
      heading: '4. Link Khusus: Email, Telepon, dan Bookmark Halaman',
      content: `
        <ul>
          <li><strong>Link Email:</strong> <code>&lt;a href="mailto:info@unsia.ac.id"&gt;Kirim Email&lt;/a&gt;</code> (membuka aplikasi email pengguna).</li>
          <li><strong>Link Telepon / WhatsApp:</strong> <code>&lt;a href="tel:+62812345678"&gt;Hubungi Kami&lt;/a&gt;</code>.</li>
          <li><strong>Bookmark / Loncat Halaman (Page Jump):</strong> Mengarahkan layar langsung ke elemen yang memiliki atribut <code>id</code> tertentu, contoh: <code>&lt;a href="#bagian-bawah"&gt;Loncat ke Bawah&lt;/a&gt;</code>.</li>
        </ul>
      `,
      codeExample: {
        html: `<!-- Link Eksternal di Tab Baru dengan Keamanan -->
<p>Kunjungi <a href="https://unsia.ac.id" target="_blank" rel="noopener">Website Resmi UNSIA</a> (Buka di tab baru).</p>

<!-- Link Interaktif Email dan Telepon -->
<p>Butuh bantuan? <a href="mailto:bantuan@unsia.ac.id">Kirim Email</a> atau <a href="tel:+628123456789">Telepon Admin</a>.</p>

<!-- Link Bookmark Internal -->
<p><a href="#footer-section">Loncat langsung ke bagian Footer ↓</a></p>

<div style="height: 100px;"></div> <!-- Jarak spasi -->

<div id="footer-section">
  <h3>Bagian Footer Halaman</h3>
  <p>&copy; 2026 Universitas Siber Asia.</p>
</div>`,
        css: ''
      },
      visualOutput: `
        <div style="padding:15px;background:#ffffff;border:1px solid #e2e8f0;border-radius:6px;font-family:Arial,sans-serif;font-size:14px;">
          <p style="margin:0 0 8px 0;">Kunjungi <a href="#" style="color:#2563eb;text-decoration:underline;">Website Resmi UNSIA</a> (Buka di tab baru).</p>
          <p style="margin:0 0 8px 0;">Butuh bantuan? <a href="#" style="color:#2563eb;text-decoration:underline;">Kirim Email</a> atau <a href="#" style="color:#2563eb;text-decoration:underline;">Telepon Admin</a>.</p>
          <p style="margin:0 0 12px 0;"><a href="#" style="color:#0891b2;font-weight:bold;">Loncat langsung ke bagian Footer ↓</a></p>
          <div style="padding:8px;background:#f8fafc;border:1px dashed #cbd5e1;border-radius:4px;">
            <strong style="color:#1e40af;">[Target ID: footer-section]</strong>
            <p style="margin:4px 0 0 0;color:#64748b;font-size:12px;">&copy; 2026 Universitas Siber Asia.</p>
          </div>
        </div>
      `
    }
  ],
  commonMistakes: [
    {
      mistake: 'Lupa menuliskan https:// pada link eksternal, contoh: href="www.google.com".',
      fix: 'Browser akan menganggapnya sebagai file lokal di komputer. Selalu sertakan protokol lengkap: href="https://www.google.com".'
    },
    {
      mistake: 'Menggunakan teks tautan generik seperti "Klik di sini" atau "Click here".',
      fix: 'Gunakan teks link yang deskriptif dan ramah SEO/aksesibilitas, contoh: "Unduh Modul Pemrograman Web I (PDF)".'
    },
    {
      mistake: 'Menggunakan target="_blank" tanpa menyertakan rel="noopener".',
      fix: 'Selalu pasangkan target="_blank" dengan rel="noopener" untuk melindungi aplikasi dari kerentanan keamanan.'
    }
  ],
  challenge: {
    title: 'Navigasi Menu Lengkap',
    description: 'Buatlah menu navigasi sederhana yang memuat 1 link eksternal yang membuka tab baru ke https://unsia.ac.id dengan rel="noopener", 1 link mailto ke dosen@unsia.ac.id, dan 1 link bookmark ke id="kontak-kami".',
    hint: 'Gunakan <a href="..." target="_blank" rel="noopener">, <a href="mailto:...">, dan <a href="#kontak-kami">.',
    starterCode: {
      html: `<!-- 1. Link eksternal tab baru -->

<!-- 2. Link email dosen -->

<!-- 3. Link bookmark ke #kontak-kami -->

<div id="kontak-kami">
  <h2>Kontak Kami</h2>
  <p>Silakan hubungi kami melalui formulir ini.</p>
</div>`,
      css: ''
    }
  },
  playgroundExample: {
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Hyperlink</title>
</head>
<body>
  <h1>Navigasi & Tautan Web</h1>

  <nav>
    <a href="#materi">Materi</a> |
    <a href="#tanya">Tanya Jawab</a> |
    <a href="https://unsia.ac.id" target="_blank" rel="noopener">Web UNSIA ↗</a>
  </nav>

  <hr>

  <section id="materi">
    <h2>Daftar Materi</h2>
    <p>Pelajari HTML dan CSS dasar dari minggu 1 sampai minggu 16.</p>
  </section>

  <section id="tanya">
    <h2>Tanya Jawab</h2>
    <p>Hubungi admin via email: <a href="mailto:info@unsia.ac.id">info@unsia.ac.id</a></p>
  </section>
</body>
</html>`,
    css: `body {
  font-family: 'Segoe UI', sans-serif;
  padding: 20px;
  background-color: #f8fafc;
}

nav a {
  color: #2563eb;
  font-weight: bold;
  text-decoration: none;
  margin-right: 8px;
}

nav a:hover {
  text-decoration: underline;
}`
  }
};

export default week05;
