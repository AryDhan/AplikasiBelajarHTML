/* ============================================================
   data/projects.js — Project Showcase Data
   Includes complete requirements, starter code, and working solution
   for Website Edukasi (M10) & Website Pribadi (M13).
   ============================================================ */

export const projects = [
  {
    id: 'website-edukasi',
    title: 'Proyek Website Portal Edukasi (Minggu 10)',
    relatedWeek: 10,
    category: 'Struktur Semantik HTML5',
    description: 'Membangun sebuah portal belajar online berbasis HTML semantik penuh. Proyek ini mengintegrasikan seluruh elemen struktur dokumen standar modern seperti `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, dan `<footer>` lengkap dengan konten artikel edukatif, media pendukung, serta form interaksi pembaca.',
    learningGoals: [
      'Menerapkan struktur HTML5 Semantik yang ramah SEO dan aksesibilitas (a11y).',
      'Mengelompokkan konten edukasi ke dalam section dan artikel independen.',
      'Menyusun navigasi internal halaman yang rapi dan mudah diakses.',
      'Menyisipkan media gambar, tabel data materi, dan form interaksi.'
    ],
    requirements: [
      'Gunakan DOCTYPE HTML5 dan tag semantik utama (<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>).',
      'Minimal memiliki 3 bagian/section materi pembelajaran yang berbeda.',
      'Sertakan gambar ilustrasi dengan atribut alt yang jelas.',
      'Sertakan tabel ringkasan perbandingan materi.',
      'Sertakan form komentar / masukan pembaca.'
    ],
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Portal Edukasi Web</title>
</head>
<body>
  <!-- Header: Judul & Navigasi -->
  <header>
    <h1>Portal Edukasi Komputer</h1>
    <nav>
      <!-- Buat link navigasi menu di sini -->
    </nav>
  </header>

  <!-- Main: Konten Utama -->
  <main>
    <section>
      <h2>Materi 1: Pengenalan Web</h2>
      <article>
        <!-- Tulis artikel di sini -->
      </article>
    </section>

    <!-- Tambahkan aside (sidebar) & section lainnya -->
  </main>

  <!-- Footer: Hak Cipta -->
  <footer>
    <p>&copy; 2026 Portal Edukasi. Hak Cipta Dilindungi.</p>
  </footer>
</body>
</html>`,
      css: `body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 20px;
  background-color: #f8fafc;
  color: #1e293b;
}`
    },
    completedCode: {
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EduWeb — Portal Belajar Coding Pemula</title>
</head>
<body>
  <!-- Header Portal -->
  <header>
    <div class="site-branding">
      <h1>🎓 EduWeb Indonesia</h1>
      <p>Platform Belajar Dasar Pemrograman & Teknologi Web</p>
    </div>
    <nav aria-label="Menu Utama">
      <ul class="nav-links">
        <li><a href="#materi-html">Dasar HTML</a></li>
        <li><a href="#materi-css">Dasar CSS</a></li>
        <li><a href="#tabel-roadmap">Tabel Belajar</a></li>
        <li><a href="#kontak-mentor">Tanya Mentor</a></li>
      </ul>
    </nav>
  </header>

  <hr>

  <!-- Konten Utama Semantik -->
  <main>
    <section id="materi-html">
      <h2>1. Memahami Pondasi Web dengan HTML5</h2>
      <article>
        <h3>Apa itu HTML5?</h3>
        <p>HTML (<em>HyperText Markup Language</em>) versi 5 merupakan standar baku untuk menyusun struktur informasi pada halaman website modern.</p>
        
        <figure>
          <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=60" alt="Kode HTML di layar monitor" width="500">
          <figcaption>Ilustrasi: Penyusunan kode tag dan elemen HTML pada text editor.</figcaption>
        </figure>

        <p>Keunggulan utama HTML5 adalah penggunaan tag <strong>semantik</strong> yang memberi arti struktural bagi browser maupun mesin pencari.</p>
      </article>
    </section>

    <section id="materi-css">
      <h2>2. Menghias Tampilan dengan CSS</h2>
      <article>
        <h3>Peran CSS dalam Desain Web</h3>
        <p>CSS (<em>Cascading Style Sheets</em>) bertugas mengatur warna, tata letak, ukuran font, hingga animasi responsif dari elemen HTML.</p>
      </article>
    </section>

    <!-- Tabel Data Materi -->
    <section id="tabel-roadmap">
      <h2>Tabel Perbandingan Teknologi Frontend</h2>
      <table border="1" cellpadding="8" cellspacing="0" width="100%">
        <thead>
          <tr bgcolor="#e2e8f0">
            <th>Teknologi</th>
            <th>Fungsi Utama</th>
            <th>Tingkat Kesulitan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>HTML5</strong></td>
            <td>Struktur dan konten dokumen</td>
            <td>Dasar (Pemula)</td>
          </tr>
          <tr>
            <td><strong>CSS3</strong></td>
            <td>Styling, tata letak, dan animasi visual</td>
            <td>Menengah</td>
          </tr>
          <tr>
            <td><strong>JavaScript</strong></td>
            <td>Interaktivitas dan logika klien</td>
            <td>Menengah - Lanjut</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Sidebar Informasi Tambahan -->
    <aside>
      <h3>💡 Tips Belajar Efektif</h3>
      <ul>
        <li>Ketik ulang kode contoh daripada copy-paste.</li>
        <li>Gunakan inspect element browser untuk menganalisis website lain.</li>
        <li>Buat proyek kecil secara mandiri setiap menyelesaikan 1 topik.</li>
      </ul>
    </aside>

    <!-- Form Interaksi Tanya Mentor -->
    <section id="kontak-mentor">
      <h2>Tanya Mentor / Kirim Feedback</h2>
      <form action="#" method="POST">
        <div>
          <label for="nama">Nama Lengkap:</label><br>
          <input type="text" id="nama" name="nama" placeholder="Masukkan nama Anda..." required>
        </div>
        <br>
        <div>
          <label for="email">Alamat Email:</label><br>
          <input type="email" id="email" name="email" placeholder="nama@email.com" required>
        </div>
        <br>
        <div>
          <label for="topik">Topik Pertanyaan:</label><br>
          <select id="topik" name="topik">
            <option value="html">HTML Dasar & Semantik</option>
            <option value="css">CSS Styling & Selector</option>
            <option value="umum">Konsultasi Tugas Kuliah</option>
          </select>
        </div>
        <br>
        <div>
          <label for="pesan">Pesan / Pertanyaan:</label><br>
          <textarea id="pesan" name="pesan" rows="4" cols="50" placeholder="Tuliskan pertanyaan detail Anda di sini..."></textarea>
        </div>
        <br>
        <button type="submit">Kirim Pertanyaan</button>
      </form>
    </section>
  </main>

  <hr>

  <!-- Footer Halaman -->
  <footer>
    <p>&copy; 2026 EduWeb Indonesia — Proyek Pembelajaran Pemrograman Web I.</p>
    <p><small>Dibangun untuk tujuan edukasi akademik Universitas Siber Asia.</small></p>
  </footer>
</body>
</html>`,
      css: `/* Styling dasar untuk portal edukasi */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8fafc;
  color: #1e293b;
}

header {
  background: #2563eb;
  color: white;
  padding: 20px;
  border-radius: 8px;
}

header h1 {
  margin: 0;
}

.nav-links {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 15px;
  margin-top: 15px;
}

.nav-links a {
  color: #eff6ff;
  text-decoration: none;
  font-weight: bold;
}

.nav-links a:hover {
  text-decoration: underline;
}

aside {
  background: #eff6ff;
  border-left: 4px solid #2563eb;
  padding: 15px;
  margin: 20px 0;
  border-radius: 4px;
}

table {
  border-collapse: collapse;
  background: white;
}

form {
  background: white;
  padding: 20px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
}`
    }
  },
  {
    id: 'website-pribadi',
    title: 'Proyek Website Pribadi / Portofolio (Minggu 13)',
    relatedWeek: 13,
    category: 'Portofolio Profesional Mahasiswa',
    description: 'Membangun website portofolio pribadi lengkap untuk mahasiswa informatika. Menggabungkan profil biodata, riwayat pendidikan, showcase keahlian (skills), portofolio proyek tugas kuliah, tautan media sosial, serta formulir kontak langsung.',
    learningGoals: [
      'Merancang arsitektur informasi halaman profil pribadi yang profesional.',
      'Mengintegrasikan foto profil, badge keahlian, dan deskripsi proyek nyata.',
      'Membuat daftar riwayat hidup (CV singkat) menggunakan list dan tabel HTML.',
      'Membuat formulir pesan untuk rekruter atau rekan kolaborasi.'
    ],
    requirements: [
      'Gunakan struktur HTML yang rapi dengan heading berurutan (h1 sampai h4).',
      'Sertakan foto diri / avatar dengan tag <img>.',
      'Tampilkan daftar keahlian teknis menggunakan tag list (<ul> atau <ol>).',
      'Tampilkan riwayat pendidikan / sertifikasi menggunakan tabel atau list.',
      'Sertakan form kirim pesan kontak yang lengkap dengan tombol submit.'
    ],
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Portofolio Pribadi</title>
</head>
<body>
  <!-- Bagian Hero / Perkenalan -->
  <header>
    <h1>Halo, Saya [Nama Mahasiswa]</h1>
    <p>Mahasiswa S1 Informatika — Universitas Siber Asia</p>
  </header>

  <!-- Biodata Diri & Keahlian -->
  <main>
    <section>
      <h2>Tentang Saya</h2>
      <!-- Tulis bio singkat di sini -->
    </section>

    <section>
      <h2>Keahlian Saya</h2>
      <!-- Buat daftar keahlian di sini -->
    </section>
  </main>
</body>
</html>`,
      css: `body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}`
    },
    completedCode: {
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portofolio — Budi Pratama | Web Developer Pemula</title>
</head>
<body>
  <!-- Header & Profil Diri -->
  <header>
    <div align="center">
      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80" alt="Foto Profil Budi Pratama" width="160" height="160" style="border-radius: 50%;">
      <h1>Budi Pratama</h1>
      <p><strong>Calon Frontend Web Developer & Mahasiswa Informatika</strong></p>
      <p>📍 Jakarta, Indonesia | ✉️ budi.pratama@student.unsia.ac.id</p>
    </div>
  </header>

  <hr>

  <main>
    <!-- Tentang Saya -->
    <section id="tentang">
      <h2>👨‍💻 Tentang Saya</h2>
      <p>Saya adalah mahasiswa semester 2 Program Studi Informatika di <strong>Universitas Siber Asia</strong>. Memiliki antusiasme tinggi dalam mempelajari pengembangan website modern, standar HTML5, styling CSS, dan prinsip desain antarmuka yang ramah pengguna.</p>
    </section>

    <!-- Keahlian Teknis -->
    <section id="skills">
      <h2>🛠️ Keahlian Teknis</h2>
      <ul>
        <li><strong>Bahasa Markup & Styling:</strong> HTML5 Semantik, CSS3, Flexbox dasar</li>
        <li><strong>Tools Pengembangan:</strong> Visual Studio Code, Git & GitHub, Google Chrome DevTools</li>
        <li><strong>Soft Skills:</strong> Problem Solving, Komunikasi Tim, Pembelajaran Mandiri Online</li>
      </ul>
    </section>

    <!-- Riwayat Pendidikan & Prestasi -->
    <section id="pendidikan">
      <h2>🎓 Riwayat Pendidikan & Sertifikasi</h2>
      <table border="1" cellpadding="8" cellspacing="0" width="100%">
        <thead>
          <tr bgcolor="#f1f5f9">
            <th>Tahun</th>
            <th>Institusi / Penyelenggara</th>
            <th>Jurusan / Program</th>
            <th>Status / Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2025 - Sekarang</td>
            <td>Universitas Siber Asia</td>
            <td>S1 Informatika</td>
            <td>Sedang Menempuh (IPK: 3.85)</td>
          </tr>
          <tr>
            <td>2024</td>
            <td>Dicoding Academy</td>
            <td>Belajar Dasar Pemrograman Web</td>
            <td>Lulus Sertifikasi</td>
          </tr>
          <tr>
            <td>2021 - 2024</td>
            <td>SMA Negeri 1 Jakarta</td>
            <td>MIPA</td>
            <td>Lulus</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Showcase Proyek -->
    <section id="proyek">
      <h2>🚀 Proyek Terkini</h2>
      <div>
        <h3>1. Web Portal Edukasi Sains</h3>
        <p>Website edukasi berbasis HTML5 semantik untuk mempublikasikan artikel pembelajaran komputer pemula.</p>
        <p><small>Teknologi: HTML5, CSS Dasar, Tabel Data</small></p>
      </div>
      <div>
        <h3>2. Form Pendaftaran Kegiatan Kampus</h3>
        <p>Aplikasi formulir interaktif lengkap dengan validasi tipe input HTML5 untuk seminar daring mahasiswa.</p>
        <p><small>Teknologi: HTML5 Form, Radio, Checkbox, Textarea</small></p>
      </div>
    </section>

    <!-- Form Hubungi Saya -->
    <section id="kontak">
      <h2>📬 Hubungi Saya</h2>
      <p>Tertarik untuk berdiskusi proyek atau kolaborasi? Kirimkan pesan melalui form di bawah:</p>
      <form action="#" method="POST">
        <p>
          <label for="pengirim">Nama Anda:</label><br>
          <input type="text" id="pengirim" name="pengirim" size="40" required placeholder="Contoh: Andi Wijaya">
        </p>
        <p>
          <label for="email_pengirim">Email Anda:</label><br>
          <input type="email" id="email_pengirim" name="email_pengirim" size="40" required placeholder="andi@perusahaan.com">
        </p>
        <p>
          <label for="keperluan">Tujuan Pesan:</label><br>
          <select id="keperluan" name="keperluan">
            <option value="kolaborasi">Ajakan Kolaborasi Proyek</option>
            <option value="magang">Peluang Magang / Kerja</option>
            <option value="tanya">Tanya Jawab Seputar Kuliah</option>
          </select>
        </p>
        <p>
          <label for="isi_pesan">Pesan:</label><br>
          <textarea id="isi_pesan" name="isi_pesan" rows="5" cols="45" placeholder="Tuliskan pesan Anda..." required></textarea>
        </p>
        <p>
          <button type="submit">Kirim Pesan Sekarang 🚀</button>
          <button type="reset">Bersihkan Form</button>
        </p>
      </form>
    </section>
  </main>

  <hr>

  <footer>
    <div align="center">
      <p>&copy; 2026 Budi Pratama. Dibuat dengan cinta menggunakan HTML & CSS murni.</p>
      <p>
        <a href="https://github.com" target="_blank" rel="noopener">GitHub</a> | 
        <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a> | 
        <a href="mailto:budi.pratama@student.unsia.ac.id">Email</a>
      </p>
    </div>
  </footer>
</body>
</html>`,
      css: `/* Styling elegan untuk portofolio pribadi */
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.7;
  max-width: 850px;
  margin: 0 auto;
  padding: 30px 20px;
  background-color: #ffffff;
  color: #334155;
}

header {
  padding: 20px 0;
}

header img {
  border: 4px solid #3b82f6;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}

h1 { color: #0f172a; margin-bottom: 5px; }
h2 { color: #1e40af; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-top: 30px; }
h3 { color: #2563eb; }

table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
}

table th {
  background: #f8fafc;
  color: #0f172a;
}

form {
  background: #f8fafc;
  padding: 25px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

input[type="text"], input[type="email"], select, textarea {
  width: 100%;
  max-width: 500px;
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
}

button {
  background: #2563eb;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

button[type="reset"] {
  background: #94a3b8;
}`
    }
  }
];
