/* ============================================================
   data/modules/week14.js — Minggu 14: Dasar & Implementasi CSS
   ============================================================ */

export const week14 = {
  weekId: 14,
  title: 'Dasar CSS & Metode Implementasi',
  type: 'regular',
  objectives: [
    'Memahami pengertian dan peran CSS (Cascading Style Sheets) dalam web.',
    'Memahami anatomi aturan CSS: Selector, Property, dan Value.',
    'Mengetahui 3 metode menghubungkan CSS ke HTML: Inline, Internal, dan External CSS.',
    'Memahami konsep "Cascading" dan hierarki prioritas penerapan aturan CSS (CSS Specificity).',
    'Mengetahui alasan mengapa External CSS adalah standar emas di industri profesional.'
  ],
  competencies: [
    'CPMK-5: Memahami dan menerapkan dasar CSS'
  ],
  concepts: [
    {
      heading: '1. Apa itu CSS dan Mengapa Kita Memerlukannya?',
      content: `
        <p><strong>CSS</strong> singkatan dari <em>Cascading Style Sheets</em>. Jika HTML diibaratkan sebagai <strong>tulang dan kerangka tubuh</strong> bangunan, maka CSS adalah <strong>cat dinding, dekorasi, perabotan, dan tata letak visual</strong> yang membuat website terlihat indah, modern, dan nyaman digunakan.</p>
        <p>CSS memisahkan antara <strong>Struktur Dokumen (HTML)</strong> dan <strong>Presentasi Desain (CSS)</strong>. Prinsip pemisahan ini disebut <em>Separation of Concerns</em>.</p>
      `
    },
    {
      heading: '2. Anatomi Aturan CSS (CSS Rule Set)',
      content: `
        <p>Sebuah aturan CSS terdiri dari 3 bagian utama:</p>
        <div style="background:var(--color-bg-alt);padding:12px;border-radius:6px;font-family:monospace;margin:10px 0;">
          h1 { color: #2563eb; font-size: 24px; }<br>
          |__| |____________Declaration_____________|<br>
          Selector  |___Property___| |____Value____|
        </div>
        <ul>
          <li><strong>Selector (Pemilih):</strong> Elemen HTML yang ingin diberi gaya (contoh: <code>h1</code>, <code>p</code>, <code>.kotak</code>).</li>
          <li><strong>Property (Properti):</strong> Karakteristik gaya yang ingin diubah (contoh: <code>color</code>, <code>background-color</code>, <code>font-size</code>).</li>
          <li><strong>Value (Nilai):</strong> Nilai pengaturan untuk properti tersebut (contoh: <code>blue</code>, <code>#ffffff</code>, <code>16px</code>).</li>
        </ul>
      `
    },
    {
      heading: '3. Tiga Cara Menerapkan CSS ke HTML',
      content: `
        <ol>
          <li><strong>1. Inline CSS:</strong> Dituliskan langsung di dalam atribut <code>style="..."</code> pada tag pembuka HTML.
            <br><em>Kelemahan:</em> Sulit dikelola, mencemari HTML, hanya cocok untuk styling darurat/testing cepat.
          </li>
          <li><strong>2. Internal CSS:</strong> Ditulis di dalam tag <code>&lt;style&gt;...&lt;/style&gt;</code> yang diletakkan di dalam bagian <code>&lt;head&gt;</code> dokumen.
            <br><em>Kelebihan:</em> Bagus untuk halaman tunggal mandiri.
          </li>
          <li><strong>3. External CSS (Standar Industri):</strong> Ditulis di file terpisah berekstensi <code>.css</code> (contoh: <code>style.css</code>), lalu dihubungkan ke HTML menggunakan tag <code>&lt;link rel="stylesheet" href="style.css"&gt;</code> di dalam <code>&lt;head&gt;</code>.
            <br><em>Kelebihan:</em> File CSS dapat digunakan bersama oleh puluhan halaman sekaligus, browser dapat melakukan caching, dan kode sangat rapi.
          </li>
        </ol>
      `,
      codeExample: {
        html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Contoh Penerapan CSS</title>

  <!-- External CSS -->
  <link rel="stylesheet" href="style.css">

  <!-- Internal CSS -->
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background-color: #f1f5f9;
    }
    h1 {
      color: #1e40af;
      border-bottom: 2px solid #3b82f6;
      padding-bottom: 6px;
    }
    .kartu {
      background-color: #ffffff;
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  <h1>Materi Dasar CSS</h1>
  
  <div class="kartu">
    <!-- Inline CSS pada paragraf -->
    <p style="color: #059669; font-weight: bold;">
      Teks ini menggunakan kombinasi internal class dan inline style.
    </p>
  </div>
</body>
</html>`,
        css: ''
      },
      visualOutput: `
        <div style="padding:15px;background:#f1f5f9;border-radius:6px;font-family:'Segoe UI',sans-serif;">
          <h2 style="color:#1e40af;border-bottom:2px solid #3b82f6;padding-bottom:6px;margin-top:0;font-size:18px;">Materi Dasar CSS</h2>
          <div style="background:#ffffff;padding:16px;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,0.1);margin-top:10px;">
            <p style="color:#059669;font-weight:bold;margin:0;">
              Teks ini menggunakan kombinasi internal class dan inline style.
            </p>
          </div>
        </div>
      `
    }
  ],
  commonMistakes: [
    {
      mistake: 'Lupa menuliskan tanda titik koma (;) di akhir setiap deklarasi CSS: h1 { color: red font-size: 16px }.',
      fix: 'Setiap pasangan properti dan nilai WAJIB diakhiri tanda titik koma (;): h1 { color: red; font-size: 16px; }.'
    },
    {
      mistake: 'Menaruh tag <link rel="stylesheet"> di dalam tag <body>.',
      fix: 'Tag <link> stylesheet harus selalu diletakkan di dalam elemen <head> agar browser memuat gaya sebelum merender halaman.'
    },
    {
      mistake: 'Menggunakan Inline CSS di seluruh elemen sehingga kode HTML menjadi sangat panjang dan berantakan.',
      fix: 'Gunakan External CSS atau Internal CSS dengan class selector agar gaya dapat digunakan kembali.'
    }
  ],
  challenge: {
    title: 'Transformasi Halaman Polos dengan Internal & External CSS',
    description: 'Buatlah dokumen HTML yang dihias dengan Internal CSS di dalam <head>. Buat styling untuk: body (background warna cerah), h1 (warna teks biru, font tebal), class .box (latar belakang putih, padding 20px, border-radius 8px), dan satu elemen dengan inline style teks berwarna hijau.',
    hint: 'Gunakan tag <style> di dalam <head>, tuliskan selector body, h1, .box, lalu gunakan style="..." pada salah satu elemen.',
    starterCode: {
      html: `<!-- Tuliskan dokumen lengkap dengan tag <style> di dalam <head> di sini -->`,
      css: ''
    }
  },
  playgroundExample: {
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Eksplorasi Dasar CSS</title>
</head>
<body>
  <h1>Selamat Datang di Dunia CSS 🎨</h1>
  <div class="card">
    <h2>Belajar Styling</h2>
    <p>CSS membuat website HTML yang membosankan menjadi hidup dan menarik!</p>
    <button class="btn-aksi">Klik Saya</button>
  </div>
</body>
</html>`,
    css: `body {
  font-family: 'Segoe UI', Tahoma, sans-serif;
  background-color: #e0f2fe;
  padding: 20px;
}

h1 {
  color: #0369a1;
  text-align: center;
}

.card {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.card h2 {
  color: #0284c7;
  margin-top: 0;
}

.btn-aksi {
  background-color: #0284c7;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}`
  }
};

export default week14;
