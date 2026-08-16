/* ============================================================
   data/modules/week15.js — Minggu 15: Selector & Warna CSS
   ============================================================ */

export const week15 = {
  weekId: 15,
  title: 'Selector Lanjutan & Sistem Warna CSS',
  type: 'regular',
  objectives: [
    'Menguasai berbagai jenis selector CSS: Element, Class (.), ID (#), Universal (*), Grouping (,), dan Descendant (spasi).',
    'Memahami Pseudo-class interaktif seperti :hover, :active, :focus, dan :visited.',
    'Memahami 5 format warna dalam CSS: Named Color, HEX Code (#rrggbb), RGB/RGBA, dan HSL/HSLA.',
    'Menerapkan transparansi (Alpha channel) untuk efek glassmorphism dan overlay modern.',
    'Menerapkan hierarki dan kombinasi warna yang memiliki kontras ramah aksesibilitas (WCAG).'
  ],
  competencies: [
    'CPMK-5: Memahami dan menerapkan dasar CSS'
  ],
  concepts: [
    {
      heading: '1. Ragam Selector CSS Lengkap',
      content: `
        <p>Selector menentukan elemen mana di dalam HTML yang akan dikenakan aturan styling:</p>
        <ul>
          <li><strong>Universal Selector (<code>*</code>):</strong> Memilih semua elemen di halaman (biasanya untuk CSS reset).</li>
          <li><strong>Element / Type Selector (<code>p</code>, <code>h1</code>):</strong> Memilih berdasarkan nama tag HTML.</li>
          <li><strong>Class Selector (<code>.nama-kelas</code>):</strong> Memilih elemen yang memiliki atribut <code>class="nama-kelas"</code> (diawali tanda titik).</li>
          <li><strong>ID Selector (<code>#nama-id</code>):</strong> Memilih satu elemen spesifik dengan atribut <code>id="nama-id"</code> (diawali tanda pagar).</li>
          <li><strong>Grouping Selector (<code>h1, h2, p</code>):</strong> Menerapkan gaya yang sama pada beberapa selector sekaligus (dipisahkan tanda koma).</li>
          <li><strong>Descendant Selector (<code>div p</code>):</strong> Memilih semua tag <code>&lt;p&gt;</code> yang berada di dalam tag <code>&lt;div&gt;</code> (dipisahkan spasi).</li>
          <li><strong>Pseudo-class (<code>a:hover</code>, <code>input:focus</code>):</strong> Memilih elemen berdasarkan status interaksi pengguna (misal saat mouse diarahkan atau kolom teks sedang aktif).</li>
        </ul>
      `
    },
    {
      heading: '2. Sistem & Format Warna dalam CSS',
      content: `
        <p>CSS mendukung beberapa format representasi warna:</p>
        <ol>
          <li><strong>Color Names (Nama Warna):</strong> 140 warna bawaan seperti <code>red</code>, <code>blue</code>, <code>crimson</code>, <code>teal</code>.</li>
          <li><strong>HEX Code (#RRGGBB):</strong> Kode heksadesimal 6 digit (00 sampai FF). Contoh: <code>#2563eb</code> (biru), <code>#ffffff</code> (putih), <code>#000000</code> (hitam).</li>
          <li><strong>RGB (Red, Green, Blue):</strong> Nilai intensitas merah, hijau, biru (0 sampai 255). Contoh: <code>rgb(37, 99, 235)</code>.</li>
          <li><strong>RGBA (dengan Alpha Channel):</strong> Menambahkan nilai transparansi (Alpha: 0.0 transparan penuh hingga 1.0 solid). Contoh: <code>rgba(37, 99, 235, 0.5)</code> untuk transparansi 50%.</li>
          <li><strong>HSL / HSLA (Hue, Saturation, Lightness):</strong> Format berbasis roda warna derajat (Hue 0-360°), saturasi (0-100%), dan kecerahan (0-100%). Sangat disukai desainer UI modern.</li>
        </ol>
      `,
      codeExample: {
        html: `<button class="btn-modern">Arahkan Mouse ke Sini (:hover)</button>
<div class="glass-card">
  <h3>Glassmorphism Card</h3>
  <p>Latar belakang ini menggunakan warna <strong>RGBA</strong> transparan.</p>
</div>`,
        css: `/* Selector Class dengan pseudo-class :hover */
.btn-modern {
  background-color: #2563eb;       /* HEX */
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-modern:hover {
  background-color: #1d4ed8;       /* Warna lebih gelap saat hover */
}

/* Transparansi RGBA modern */
.glass-card {
  background-color: rgba(37, 99, 235, 0.1); /* RGBA 10% opacity */
  border: 1px solid rgba(37, 99, 235, 0.3);
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}`
      },
      visualOutput: `
        <div style="padding:15px;background:#f8fafc;border-radius:6px;font-family:Arial,sans-serif;">
          <button style="background-color:#2563eb;color:#ffffff;padding:8px 16px;border:none;border-radius:6px;font-weight:bold;cursor:pointer;">
            Arahkan Mouse ke Sini (:hover)
          </button>
          <div style="background-color:rgba(37, 99, 235, 0.1);border:1px solid rgba(37, 99, 235, 0.3);padding:12px;border-radius:8px;margin-top:12px;">
            <h4 style="margin:0 0 4px 0;color:#1e40af;">Glassmorphism Card</h4>
            <p style="margin:0;font-size:12px;color:#334155;">Latar belakang ini menggunakan warna <strong>RGBA</strong> transparan.</p>
          </div>
        </div>
      `
    }
  ],
  commonMistakes: [
    {
      mistake: 'Lupa menuliskan tanda titik (.) untuk class atau pagar (#) untuk ID di CSS: card { ... }.',
      fix: 'Jika card adalah class, tulis .card { ... }. Jika ID, tulis #card { ... }.'
    },
    {
      mistake: 'Menuliskan nilai alpha di luar rentang 0.0 sampai 1.0 (misal menulis rgba(0,0,0, 50)).',
      fix: 'Nilai Alpha adalah desimal dari 0.0 (transparan) hingga 1.0 (solid), misal 0.5 untuk 50% opacity.'
    }
  ],
  challenge: {
    title: 'Desain Komponen UI dengan Selector & Sistem Warna',
    description: 'Buatlah tombol interaktif dengan efek :hover, kartu kontainer dengan latar belakang RGBA transparan, serta gunakan grouping selector (h1, h2, h3) untuk mengatur jenis font keluarga bersamaan.',
    hint: 'Gunakan .nama-class:hover, rgba(r, g, b, 0.x), dan h1, h2, h3 { font-family: ... }.',
    starterCode: {
      html: `<!-- Buat komponen HTML dan atur stylenya di sini -->`,
      css: ''
    }
  },
  playgroundExample: {
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Selector & Warna</title>
</head>
<body>
  <div class="container">
    <h1 id="judul">Eksperimen Warna CSS</h1>
    
    <div class="box hex-box">HEX: #3b82f6</div>
    <div class="box rgb-box">RGB: rgb(16, 185, 129)</div>
    <div class="box hsl-box">HSL: hsl(280, 80%, 60%)</div>
    <div class="box rgba-box">RGBA: Transparan 50%</div>

    <button class="cta-btn">Tombol Interaktif</button>
  </div>
</body>
</html>`,
    css: `body {
  font-family: 'Segoe UI', Tahoma, sans-serif;
  background: #f1f5f9;
  padding: 20px;
}

.container {
  max-width: 450px;
  margin: 0 auto;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

#judul {
  color: #1e293b;
  font-size: 20px;
  text-align: center;
}

.box {
  padding: 12px;
  margin: 8px 0;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  text-align: center;
}

.hex-box { background-color: #3b82f6; }
.rgb-box { background-color: rgb(16, 185, 129); }
.hsl-box { background-color: hsl(280, 80%, 60%); }
.rgba-box { 
  background-color: rgba(239, 68, 68, 0.7); 
  border: 2px dashed #ef4444; 
}

.cta-btn {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;
}

.cta-btn:hover {
  background: #3b82f6;
  transform: translateY(-2px);
}`
  }
};

export default week15;
