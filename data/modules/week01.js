/* ============================================================
   data/modules/week01.js — Minggu 1: Pengenalan HTML & Dasar Web
   ============================================================ */

export const week01 = {
  weekId: 1,
  title: 'Pengenalan HTML & Dasar Web',
  type: 'regular',
  objectives: [
    'Memahami sistem pembelajaran dan RPS mata kuliah Pemrograman Web I.',
    'Menjelaskan definisi, sejarah singkat, dan peranan HTML dalam arsitektur web.',
    'Memahami cara kerja browser dalam menerjemahkan dokumen HTML.',
    'Menuliskan struktur dasar dokumen HTML5 dengan perintah dan tag wajib.'
  ],
  competencies: [
    'CPMK-1: Memahami konsep dasar pemrograman web'
  ],
  concepts: [
    {
      heading: '1. Apa itu HTML?',
      content: `
        <p><strong>HTML</strong> merupakan singkatan dari <em>HyperText Markup Language</em>. HTML adalah bahasa markup standar yang digunakan untuk membuat dan menyusun struktur halaman web di seluruh dunia.</p>
        <p>Perlu diingat bahwa HTML <strong>bukanlah bahasa pemrograman</strong> (karena tidak memiliki logika kondisional, perulangan, atau variabel kompleks), melainkan sebuah <strong>bahasa markup</strong> yang menggunakan sekumpulan tanda atau <em>tag</em> untuk memberi tahu web browser bagaimana konten teks, gambar, dan media harus ditampilkan.</p>
        <ul>
          <li><strong>HyperText:</strong> Teks yang memiliki tautan (link) yang memungkinkan navigasi antar halaman dokumen di internet.</li>
          <li><strong>Markup Language:</strong> Bahasa yang menggunakan penanda (tag) untuk mendefinisikan tipe dan struktur setiap bagian konten.</li>
        </ul>
      `
    },
    {
      heading: '2. Cara Kerja Browser dan HTML',
      content: `
        <p>Ketika Anda mengetikkan alamat URL di browser (misalnya Google Chrome atau Firefox), browser akan mengirim permintaan ke web server, kemudian server mengembalikan file berformat <code>.html</code>. Browser kemudian membaca file tersebut dari atas ke bawah dan melakukan proses yang disebut <strong>HTML Parsing & Rendering</strong> untuk menampilkan teks, gambar, dan tombol secara visual kepada pengguna.</p>
      `
    },
    {
      heading: '3. Struktur Dasar Dokumen HTML5',
      content: `
        <p>Setiap dokumen HTML modern wajib memiliki susunan kerangka dasar (boilerplate) berikut:</p>
        <ul>
          <li><code>&lt;!DOCTYPE html&gt;</code>: Deklarasi yang memberi tahu browser bahwa dokumen menggunakan standar HTML5 terbaru.</li>
          <li><code>&lt;html lang="id"&gt;</code>: Elemen utama (root) yang membungkus seluruh konten halaman. Atribut <code>lang="id"</code> menandakan bahasa dokumen adalah Bahasa Indonesia.</li>
          <li><code>&lt;head&gt;</code>: Berisi metadata (informasi tentang dokumen) seperti charset, judul tab browser, dan tautan stylesheet CSS. Bagian ini tidak ditampilkan langsung di area halaman.</li>
          <li><code>&lt;body&gt;</code>: Berisi seluruh konten visual yang dilihat oleh pengunjung (teks, gambar, tabel, tombol, dll).</li>
        </ul>
      `,
      codeExample: {
        html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Halaman Pertama Saya</title>
</head>
<body>
  <h1>Selamat Datang di Pemrograman Web I!</h1>
  <p>Ini adalah halaman web pertama yang saya buat menggunakan HTML5.</p>
</body>
</html>`,
        css: ''
      },
      visualOutput: `
        <div style="font-family: Arial, sans-serif; padding: 15px; border: 1px dashed #cbd5e1; border-radius: 6px; background-color: #ffffff;">
          <h1 style="color: #1e40af; font-size: 20px; margin-top: 0;">Selamat Datang di Pemrograman Web I!</h1>
          <p style="color: #334155; margin-bottom: 0;">Ini adalah halaman web pertama yang saya buat menggunakan HTML5.</p>
        </div>
      `
    }
  ],
  commonMistakes: [
    {
      mistake: '<!DOCTYPE html> diletakkan di dalam tag <html> atau lupa menyertakannya.',
      fix: '<!DOCTYPE html> harus selalu menjadi baris paling pertama (baris 1) sebelum tag <html>.'
    },
    {
      mistake: 'Menaruh tag konten visual seperti <h1> atau <p> di dalam tag <head>.',
      fix: 'Tag <head> hanya untuk metadata (<title>, <meta>). Semua konten yang ingin dilihat pengguna harus berada di dalam <body>.'
    },
    {
      mistake: 'Lupa menuliskan tag penutup </html> atau </body>.',
      fix: 'Selalu pastikan setiap tag pembuka yang berpasangan memiliki tag penutup dengan garis miring, contoh: <body>...</body>.'
    }
  ],
  challenge: {
    title: 'Membuat Dokumen Hello World Lengkap',
    description: 'Buatlah kerangka dokumen HTML5 lengkap dengan deklarasi DOCTYPE, tag html dengan atribut bahasa, head dengan title "Profil Mahasiswa", dan body yang memuat judul utama (h1) nama Anda beserta satu paragraf singkat.',
    hint: 'Gunakan struktur <!DOCTYPE html> <html> <head> <title> lalu <body> <h1> <p>.',
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Profil Mahasiswa</title>
</head>
<body>
  <!-- Tuliskan h1 nama Anda dan p bio singkat di sini -->
</body>
</html>`,
      css: ''
    }
  },
  playgroundExample: {
    html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Minggu 1 - Pengenalan HTML</title>
</head>
<body>
  <h1>Halo, Dunia Web! 🌍</h1>
  <p>Saya mahasiswa Universitas Siber Asia yang sedang belajar HTML.</p>
  <p>HTML sangat menyenangkan karena mudah dipahami dan terstruktur.</p>
</body>
</html>`,
    css: `body {
  font-family: 'Segoe UI', Tahoma, sans-serif;
  padding: 20px;
  background-color: #f8fafc;
  color: #0f172a;
}

h1 {
  color: #2563eb;
}`
  }
};

export default week01;
