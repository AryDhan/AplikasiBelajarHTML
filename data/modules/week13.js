/* ============================================================
   data/modules/week13.js — Minggu 13: Proyek Website Pribadi
   ============================================================ */

export const week13 = {
  weekId: 13,
  title: 'Proyek Website Pribadi / Portofolio',
  type: 'regular',
  objectives: [
    'Merancang konsep dan struktur informasi sebuah website portofolio pribadi.',
    'Mengintegrasikan seluruh tag HTML: heading, paragraf, gambar profil, tabel riwayat, list keahlian, link sosmed, dan form kontak.',
    'Menerapkan struktur semantik yang siap di-styling dengan CSS di modul berikutnya.',
    'Mempersiapkan portofolio mahasiswa yang representatif untuk kebutuhan akademik dan industri.'
  ],
  competencies: [
    'CPMK-4: Membangun website dengan HTML'
  ],
  concepts: [
    {
      heading: '1. Perencanaan & Arsitektur Website Pribadi',
      content: `
        <p>Website portofolio pribadi adalah media digital yang merepresentasikan identitas, kompetensi, riwayat pendidikan, serta hasil karya mahasiswa di hadapan dosen, calon klien, maupun perusahaan perekrut.</p>
        <p>Struktur bagian esensial dalam website pribadi:</p>
        <ol>
          <li><strong>Hero / Header Section:</strong> Foto profil, nama lengkap, gelar/status mahasiswa, dan ringkasan visi diri.</li>
          <li><strong>About Me (Tentang Saya):</strong> Paragraf narasi latar belakang minat di bidang teknologi informasi.</li>
          <li><strong>Skills & Keahlian:</strong> Daftar keahlian teknis (HTML, CSS, tools coding) menggunakan tag <code>&lt;ul&gt;</code>.</li>
          <li><strong>Pendidikan & Sertifikasi:</strong> Disajikan rapi dalam bentuk <code>&lt;table&gt;</code> data riwayat studi.</li>
          <li><strong>Galeri Proyek:</strong> Kartu-kartu proyek yang pernah dibuat selama perkuliahan.</li>
          <li><strong>Contact Form:</strong> Formulir interaktif untuk mengirimkan pesan ke email mahasiswa.</li>
        </ol>
      `
    },
    {
      heading: '2. Mengintegrasikan Elemen HTML Secara Utuh',
      content: `
        <p>Proyek ini menguji pemahaman komprehensif Anda terhadap seluruh materi dari Minggu 1 hingga Minggu 12 sebelum kita memasuki babak styling visual menggunakan CSS.</p>
      `,
      codeExample: {
        html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Portofolio Mahasiswa Informatika</title>
</head>
<body>
  <!-- Header Profil -->
  <header>
    <img src="https://via.placeholder.com/120" alt="Foto Profil" width="120" height="120">
    <h1>Ahmad Fauzi</h1>
    <p>Mahasiswa S1 Informatika | Universitas Siber Asia</p>
  </header>

  <hr>

  <main>
    <section>
      <h2>Tentang Saya</h2>
      <p>Saya antusias mempelajari pengembangan website modern dan teknologi cloud computing.</p>
    </section>

    <section>
      <h2>Keahlian</h2>
      <ul>
        <li>HTML5 Semantik & Aksesibilitas Web</li>
        <li>Dasar Styling CSS3</li>
        <li>Version Control dengan Git & GitHub</li>
      </ul>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Ahmad Fauzi</p>
  </footer>
</body>
</html>`,
        css: ''
      },
      visualOutput: `
        <div style="padding:15px;background:#ffffff;border:1px solid #e2e8f0;border-radius:6px;font-family:Arial,sans-serif;font-size:13px;">
          <div style="display:flex;gap:15px;align-items:center;">
            <div style="width:60px;height:60px;border-radius:50%;background:#3b82f6;color:white;display:flex;align-items:center;justify-content:center;font-size:24px;">👨‍💻</div>
            <div>
              <h3 style="margin:0;color:#0f172a;">Ahmad Fauzi</h3>
              <p style="margin:2px 0 0 0;color:#64748b;font-size:12px;">Mahasiswa S1 Informatika | Universitas Siber Asia</p>
            </div>
          </div>
          <hr style="margin:12px 0;border:none;border-top:1px solid #e2e8f0;">
          <h4 style="margin:0 0 4px 0;color:#1e40af;">Tentang Saya</h4>
          <p style="margin:0 0 10px 0;color:#475569;font-size:12px;">Saya antusias mempelajari pengembangan website modern dan teknologi cloud computing.</p>
          <h4 style="margin:0 0 4px 0;color:#1e40af;">Keahlian</h4>
          <ul style="margin:0 0 0 20px;padding:0;color:#475569;font-size:12px;">
            <li>HTML5 Semantik & Aksesibilitas Web</li>
            <li>Dasar Styling CSS3</li>
          </ul>
        </div>
      `
    }
  ],
  commonMistakes: [
    {
      mistake: 'Mengabaikan struktur semantik saat membuat portfolio (hanya menggunakan paragraf panjang).',
      fix: 'Kelompokkan halaman menjadi bagian logis menggunakan <section>, <article>, <table>, dan <ul> agar terstruktur rapi.'
    },
    {
      mistake: 'Menggunakan gambar profil lokal tanpa memastikan file gambar berada di direktori proyek yang benar.',
      fix: 'Pastikan jalur (path) gambar relatif seperti assets/img/profil.jpg terhubung tepat dengan struktur file HTML Anda.'
    }
  ],
  challenge: {
    title: 'Membangun Kerangka Portofolio Mahasiswa Lengkap',
    description: 'Buatlah kerangka website portofolio diri Anda sendiri yang memuat: Foto profil, Judul nama (h1), Bio singkat, Tabel riwayat pendidikan (3 baris), Daftar keahlian teknis (ul), dan Formulir pesan kontak (nama, email, pesan).',
    hint: 'Buka halaman Project Showcase untuk melihat contoh lengkap kode portofolio.',
    starterCode: {
      html: `<!-- Bangun website pribadi lengkap Anda di sini -->`,
      css: ''
    }
  },
  playgroundExample: {
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Portofolio Pribadi</title>
</head>
<body>
  <h1>Siti Nurhaliza</h1>
  <p><strong>Web Designer & Mahasiswa Informatika</strong></p>

  <h2>Riwayat Studi</h2>
  <table border="1" cellpadding="6" cellspacing="0" width="100%">
    <tr>
      <th>Tahun</th>
      <th>Institusi</th>
      <th>Jurusan</th>
    </tr>
    <tr>
      <td>2025 - Sekarang</td>
      <td>Universitas Siber Asia</td>
      <td>Informatika</td>
    </tr>
  </table>

  <h2>Keahlian</h2>
  <ul>
    <li>HTML5 & CSS Dasar</li>
    <li>UI/UX Design di Figma</li>
  </ul>
</body>
</html>`,
    css: `body {
  font-family: Arial, sans-serif;
  padding: 20px;
  line-height: 1.6;
}

h1 { color: #2563eb; }
h2 { color: #0891b2; font-size: 16px; margin-top: 20px; }
table { border-collapse: collapse; margin-top: 10px; }`
  }
};

export default week13;
