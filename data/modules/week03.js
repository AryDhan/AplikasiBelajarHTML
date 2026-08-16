/* ============================================================
   data/modules/week03.js — Minggu 3: Paragraf & Pengaturan Teks
   ============================================================ */

export const week03 = {
  weekId: 3,
  title: 'Paragraf & Pengaturan Teks',
  type: 'regular',
  objectives: [
    'Menggunakan tag <p> untuk menyusun blok paragraf teks yang terstruktur.',
    'Memahami mekanisme whitespace collapse (pengabaian spasi ganda dan enter) di browser.',
    'Menggunakan tag <br> untuk pindah baris manual tanpa membuat paragraf baru.',
    'Menggunakan tag <hr> untuk pemisah tematik (horizontal rule).',
    'Menampilkan teks dengan spasi dan tab presisi menggunakan tag <pre> (preformatted text).'
  ],
  competencies: [
    'CPMK-2: Menguasai elemen dan struktur HTML'
  ],
  concepts: [
    {
      heading: '1. Tag Paragraf <p> dan Whitespace Collapse',
      content: `
        <p>Tag <code>&lt;p&gt;</code> digunakan untuk mendefinisikan sebuah paragraf. Secara default, browser akan memberikan jarak margin atas dan bawah pada setiap elemen <code>&lt;p&gt;</code>.</p>
        <p><strong>Aturan Whitespace Collapse:</strong> Browser HTML secara otomatis memadatkan banyak spasi berturut-turut, tombol Tab, dan tombol Enter menjadi <strong>satu spasi tunggal</strong> saja. Oleh karena itu, menekan Enter berkali-kali di dalam kode editor tidak akan membuat baris baru di browser.</p>
      `
    },
    {
      heading: '2. Tag Pindah Baris <br> dan Pemisah <hr>',
      content: `
        <ul>
          <li><code>&lt;br&gt;</code> (<em>Break</em>): Memaksa teks berpindah ke baris berikutnya di dalam paragraf yang sama, tanpa memberi jeda spasi antar-paragraf besar. Sangat cocok untuk penulisan bait puisi, lirik lagu, atau alamat surat.</li>
          <li><code>&lt;hr&gt;</code> (<em>Horizontal Rule</em>): Menghasilkan garis lurus horizontal yang merepresentasikan pergantian topik atau pemisah tematik antar bagian konten.</li>
        </ul>
      `
    },
    {
      heading: '3. Preformatted Text dengan <pre>',
      content: `
        <p>Jika Anda ingin browser <strong>mempertahankan seluruh spasi, spasi ganda, tab, dan baris baru persis seperti yang Anda ketik</strong> di editor kode, gunakan tag <code>&lt;pre&gt;...&lt;/pre&gt;</code>. Secara bawaan, tag ini juga menampilkan font monospaced (seperti Courier/Consolas), sangat cocok untuk puisi, diagram ASCII, atau cuplikan kode pemrograman.</p>
      `,
      codeExample: {
        html: `<!-- Paragraf biasa dengan tag <br> -->
<p>
  Jl. Harsono RM No. 1, Ragunan<br>
  Pasar Minggu, Jakarta Selatan<br>
  DKI Jakarta 12550
</p>

<hr>

<!-- Teks terformat presisi dengan tag <pre> -->
<pre>
  ASCII Art Segitiga:
      *
     ***
    *****
   *******
</pre>`,
        css: ''
      },
      visualOutput: `
        <div style="padding:15px;background:#ffffff;border:1px solid #e2e8f0;border-radius:6px;font-family:Arial,sans-serif;font-size:14px;">
          <p style="margin:0 0 10px 0;line-height:1.5;color:#334155;">
            Jl. Harsono RM No. 1, Ragunan<br>
            Pasar Minggu, Jakarta Selatan<br>
            DKI Jakarta 12550
          </p>
          <hr style="border:none;border-top:1px solid #cbd5e1;margin:12px 0;">
          <pre style="background:#f1f5f9;padding:10px;border-radius:4px;color:#1e293b;margin:0;font-family:monospace;font-size:13px;">
  ASCII Art Segitiga:
      *
     ***
    *****
   *******</pre>
        </div>
      `
    }
  ],
  commonMistakes: [
    {
      mistake: 'Menggunakan tag <br><br><br> berturut-turut untuk membuat jarak vertikal antar bagian.',
      fix: 'Gunakan tag paragraf <p> terpisah atau atur margin CSS untuk tata letak yang bersih dan semantik.'
    },
    {
      mistake: 'Mengetik spasi berkali-kali di dalam <p> dengan harapan teks bergeser ke kanan.',
      fix: 'Gunakan tag <pre> jika butuh mempertahankan spasi presisi, atau gunakan properti CSS padding/margin.'
    }
  ],
  challenge: {
    title: 'Format Alamat & Puisi Sederhana',
    description: 'Buatlah sebuah dokumen yang berisi 1 paragraf alamat pengiriman menggunakan tag <br>, dipisahkan oleh garis horizontal <hr>, dan di bawahnya terdapat 1 bait puisi 4 baris yang disusun rapi menggunakan tag <pre>.',
    hint: 'Kombinasikan tag <p>, <br>, <hr>, dan <pre>.',
    starterCode: {
      html: `<!-- 1. Alamat dengan <p> dan <br> -->

<!-- 2. Garis pemisah <hr> -->

<!-- 3. Bait puisi dengan <pre> -->`,
      css: ''
    }
  },
  playgroundExample: {
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Eksplorasi Paragraf dan Pre</title>
</head>
<body>
  <h2>Informasi Kontak</h2>
  <p>
    Universitas Siber Asia<br>
    Fakultas Sains dan Teknologi<br>
    Program Studi S1 Informatika
  </p>

  <hr>

  <h2>Contoh Preformatted Text</h2>
  <pre>
  Nama    : Antigravity AI
  Fungsi  : Pair Programmer Web
  Status  : Online 🟢
  </pre>
</body>
</html>`,
    css: `body {
  font-family: 'Segoe UI', Tahoma, sans-serif;
  padding: 20px;
  background-color: #f8fafc;
}

h2 {
  color: #1e40af;
  font-size: 18px;
}`
  }
};

export default week03;
