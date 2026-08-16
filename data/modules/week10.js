/* ============================================================
   data/modules/week10.js — Minggu 10: Semantik HTML & Proyek Web Edukasi
   ============================================================ */

export const week10 = {
  weekId: 10,
  title: 'Elemen Semantik HTML & Proyek Website Edukasi',
  type: 'regular',
  objectives: [
    'Memahami konsep Semantik HTML dan mengapa <div> soup dihindari di era web modern.',
    'Menerapkan elemen struktur semantik: <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>.',
    'Mengetahui perbedaan penggunaan <section> vs <article> secara tepat.',
    'Merancang dan membangun Proyek Website Portal Edukasi berbasis standar HTML5.'
  ],
  competencies: [
    'CPMK-3: Menguasai elemen interaktif dan multimedia HTML',
    'CPMK-4: Membangun website dengan HTML'
  ],
  concepts: [
    {
      heading: '1. Mengapa Elemen Semantik Sangat Penting?',
      content: `
        <p>Elemen <strong>semantik</strong> adalah tag yang secara jelas mendeskripsikan arti atau peran kontennya, baik bagi pengembang (manusia) maupun mesin (web browser, Googlebot, screen reader tuna netra). Sebelum HTML5, pengembang membuat semua layout dengan <code>&lt;div class="header"&gt;</code>, <code>&lt;div class="footer"&gt;</code> (dikenal dengan istilah <em>div soup</em>).</p>
        <p>Keuntungan semantik HTML5:</p>
        <ul>
          <li><strong>SEO (Search Engine Optimization):</strong> Mesin pencari dapat memahami bagian mana yang merupakan artikel utama dan bagian mana yang hanya sidebar iklan.</li>
          <li><strong>Aksesibilitas (a11y):</strong> Pengguna disabilitas dapat menavigasi langsung ke konten <code>&lt;main&gt;</code> atau menu <code>&lt;nav&gt;</code> menggunakan teknologi pembaca layar.</li>
          <li><strong>Kemudahan Pemeliharaan (Maintainability):</strong> Kode menjadi jauh lebih rapi dan mudah dibaca oleh tim developer.</li>
        </ul>
      `
    },
    {
      heading: '2. Tag Semantik Utama HTML5',
      content: `
        <ul>
          <li><code>&lt;header&gt;</code>: Kepala halaman atau kepala section (berisi logo, judul situs, atau metadata pengarang).</li>
          <li><code>&lt;nav&gt;</code>: Blok navigasi tautan menu utama.</li>
          <li><code>&lt;main&gt;</code>: Wadah konten utama yang dominan dan unik pada halaman (hanya boleh ada <strong>satu &lt;main&gt;</strong> per dokumen).</li>
          <li><code>&lt;article&gt;</code>: Konten mandiri yang dapat didistribusikan ulang (misal artikel berita, postingan blog, kartu produk).</li>
          <li><code>&lt;section&gt;</code>: Bagian/bab tematik yang mengelompokkan konten serumpun (biasanya diawali dengan heading h2/h3).</li>
          <li><code>&lt;aside&gt;</code>: Bagian samping (sidebar) yang berisi konten pelengkap (tips, artikel terkait, profil penulis).</li>
          <li><code>&lt;footer&gt;</code>: Kaki halaman (berisi informasi hak cipta, kontak, tautan kebijakan privasi).</li>
        </ul>
      `
    },
    {
      heading: '3. Membangun Proyek Website Edukasi',
      content: `
        <p>Pada modul ini, mahasiswa ditugaskan untuk mengintegrasikan seluruh materi HTML yang telah dipelajari ke dalam <strong>Proyek Portal Edukasi</strong>. Pastikan dokumen memiliki tata letak semantik yang utuh, menyertakan gambar, tabel perbandingan materi, serta form tanya mentor.</p>
      `,
      codeExample: {
        html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Portal Belajar Pemrograman</title>
</head>
<body>
  <header>
    <h1>🎓 Portal Belajar Web</h1>
    <nav>
      <a href="#materi">Materi</a> | <a href="#sidebar">Info</a>
    </nav>
  </header>

  <main>
    <section id="materi">
      <h2>Materi HTML5</h2>
      <article>
        <h3>Elemen Semantik Modern</h3>
        <p>Elemen semantik memberikan makna struktural pada setiap bagian dokumen web.</p>
      </article>
    </section>

    <aside id="sidebar">
      <h3>💡 Tips</h3>
      <p>Gunakan tag semantik untuk meningkatkan skor SEO website Anda.</p>
    </aside>
  </main>

  <footer>
    <p>&copy; 2026 Universitas Siber Asia.</p>
  </footer>
</body>
</html>`,
        css: ''
      },
      visualOutput: `
        <div style="padding:15px;background:#ffffff;border:1px solid #e2e8f0;border-radius:6px;font-family:Arial,sans-serif;font-size:13px;">
          <div style="background:#2563eb;color:white;padding:10px;border-radius:4px;">
            <strong style="font-size:16px;">🎓 Portal Belajar Web</strong>
            <div style="font-size:12px;margin-top:4px;color:#eff6ff;">[ Navigasi: Materi | Info ]</div>
          </div>
          <div style="display:flex;gap:15px;margin-top:12px;">
            <div style="flex:2;background:#f8fafc;padding:10px;border-radius:4px;border:1px solid #e2e8f0;">
              <strong style="color:#1e40af;">[ <main> Konten Utama ]</strong>
              <h4 style="margin:6px 0;color:#0f172a;">Elemen Semantik Modern</h4>
              <p style="margin:0;font-size:12px;color:#475569;">Elemen semantik memberikan makna struktural pada setiap bagian dokumen web.</p>
            </div>
            <div style="flex:1;background:#eff6ff;padding:10px;border-radius:4px;border:1px dashed #93c5fd;">
              <strong style="color:#1d4ed8;">[ <aside> Sidebar ]</strong>
              <p style="margin:4px 0 0 0;font-size:11px;color:#1e40af;">💡 Gunakan tag semantik untuk meningkatkan skor SEO.</p>
            </div>
          </div>
          <div style="background:#f1f5f9;padding:8px;text-align:center;margin-top:12px;font-size:11px;color:#64748b;border-radius:4px;">
            [ <footer> Hak Cipta &copy; 2026 Universitas Siber Asia ]
          </div>
        </div>
      `
    }
  ],
  commonMistakes: [
    {
      mistake: 'Menggunakan lebih dari satu tag <main> yang terlihat aktif di halaman yang sama.',
      fix: 'Satu halaman dokumen HTML hanya boleh memiliki SATU elemen <main> untuk konten utamanya.'
    },
    {
      mistake: 'Menggunakan <div> untuk semua bagian (header, footer, nav) tanpa memanfaatkan tag semantik.',
      fix: 'Ganti <div class="header"> dengan <header>, <div class="nav"> dengan <nav>, dsb.'
    }
  ],
  challenge: {
    title: 'Rancang Struktur Portal Edukasi Semantik',
    description: 'Rancanglah kerangka halaman portal edukasi lengkap yang terdiri dari <header> dengan logo dan <nav>, <main> yang berisi minimal dua <section> materi beserta <article>, satu <aside> tips belajar, dan <footer> hak cipta.',
    hint: 'Gunakan susunan elemen: <header>, <nav>, <main>, <section>, <article>, <aside>, dan <footer>.',
    starterCode: {
      html: `<!-- Bangun layout portal edukasi semantik di sini -->`,
      css: ''
    }
  },
  playgroundExample: {
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Layout Semantik HTML5</title>
</head>
<body>
  <header>
    <h1>Akademi Web UNSIA</h1>
    <nav>
      <a href="#beranda">Beranda</a> |
      <a href="#kursus">Kursus</a> |
      <a href="#tentang">Tentang</a>
    </nav>
  </header>

  <main>
    <section id="kursus">
      <h2>Kursus Populer</h2>
      <article>
        <h3>1. Pemrograman Web Dasar</h3>
        <p>Pelajari HTML dan CSS dari instruktur berpengalaman.</p>
      </article>
      <article>
        <h3>2. Desain Antarmuka Modern</h3>
        <p>Memahami estetika UI dan aksesibilitas web.</p>
      </article>
    </section>

    <aside>
      <h3>Jadwal Ujian</h3>
      <p>UTS: Minggu ke-8<br>UAS: Minggu ke-16</p>
    </aside>
  </main>

  <footer>
    <p>&copy; 2026 Universitas Siber Asia</p>
  </footer>
</body>
</html>`,
    css: `body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 15px;
  background: #f8fafc;
}

header {
  background: #1e40af;
  color: white;
  padding: 15px;
  border-radius: 6px;
}

header a {
  color: #dbeafe;
  text-decoration: none;
  font-weight: bold;
}

main {
  display: flex;
  gap: 15px;
  margin: 15px 0;
}

section { flex: 2; background: white; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0; }
aside { flex: 1; background: #eff6ff; padding: 15px; border-radius: 6px; }
footer { background: #0f172a; color: white; text-align: center; padding: 10px; border-radius: 6px; }`
  }
};

export default week10;
