/* ============================================================
   data/modules/week02.js — Minggu 2: Tag, Elemen, dan Atribut
   ============================================================ */

export const week02 = {
  weekId: 2,
  title: 'Tag, Elemen, dan Atribut',
  type: 'regular',
  objectives: [
    'Membedakan secara jelas antara tag, elemen, dan atribut dalam HTML.',
    'Mengetahui jenis tag berpasangan (paired tags) dan tag tunggal (void/self-closing tags).',
    'Memahami sintaks penulisan atribut dan nilai atribut (name="value").',
    'Mengenal atribut global yang sering digunakan seperti id, class, style, dan title.'
  ],
  competencies: [
    'CPMK-1: Memahami konsep dasar pemrograman web',
    'CPMK-2: Menguasai elemen dan struktur HTML'
  ],
  concepts: [
    {
      heading: '1. Perbedaan Tag vs Elemen',
      content: `
        <p>Seringkali pemula menganggap tag dan elemen adalah hal yang sama persis, padahal keduanya memiliki definisi yang berbeda:</p>
        <ul>
          <li><strong>Tag (Tanda):</strong> Kode penanda yang diawali tanda kurung siku buka <code>&lt;</code> dan diakhiri kurung siku tutup <code>&gt;</code>. Ada tag pembuka (contoh: <code>&lt;p&gt;</code>) dan tag penutup (contoh: <code>&lt;/p&gt;</code>).</li>
          <li><strong>Elemen:</strong> Keseluruhan kesatuan yang terdiri dari <em>tag pembuka + isi konten di dalamnya + tag penutup</em>.</li>
        </ul>
        <div style="background:var(--color-bg-alt);padding:12px;border-radius:6px;font-family:monospace;margin:10px 0;">
          &lt;p class="info"&gt;Ini adalah konten elemen paragraf.&lt;/p&gt;<br>
          |___Tag Pembuka___| |___________Konten___________| |_Tag Penutup_|
        </div>
      `
    },
    {
      heading: '2. Tag Berpasangan vs Tag Tunggal (Void Element)',
      content: `
        <p>Dalam HTML terdapat 2 kelompok tag:</p>
        <ol>
          <li><strong>Tag Berpasangan (Container Tags):</strong> Memiliki tag pembuka dan penutup untuk membungkus konten teks atau elemen lain. Contoh: <code>&lt;h1&gt;...&lt;/h1&gt;</code>, <code>&lt;div&gt;...&lt;/div&gt;</code>.</li>
          <li><strong>Tag Tunggal / Kosong (Void Elements):</strong> Tag yang tidak memiliki konten penutup karena fungsinya hanya menyisipkan objek tertentu. Contoh: <code>&lt;img&gt;</code> (gambar), <code>&lt;br&gt;</code> (pindah baris), <code>&lt;hr&gt;</code> (garis horizontal), <code>&lt;input&gt;</code> (kotak isian).</li>
        </ol>
      `
    },
    {
      heading: '3. Atribut HTML',
      content: `
        <p><strong>Atribut</strong> adalah informasi tambahan yang disematkan di dalam <strong>tag pembuka</strong> untuk mengatur perilaku, tampilan, atau identitas elemen. Format umum penulisan atribut adalah <code>nama_atribut="nilai_atribut"</code>.</p>
        <p>Beberapa atribut global yang berlaku di hampir semua elemen HTML:</p>
        <ul>
          <li><code>id</code>: Memberi pengenal unik (hanya boleh 1 id yang sama per halaman).</li>
          <li><code>class</code>: Mengelompokkan elemen untuk kebutuhan styling CSS (bisa digunakan berulang kali).</li>
          <li><code>title</code>: Menampilkan tooltip teks ketika kursor mouse diarahkan ke elemen.</li>
          <li><code>style</code>: Menambahkan aturan CSS langsung (inline style).</li>
        </ul>
      `,
      codeExample: {
        html: `<!-- Paragraf dengan atribut class, id, dan title (tooltip) -->
<p id="paragraf-satu" class="teks-penting" title="Arahkan mouse untuk melihat saya">
  Arahkan kursor ke teks ini untuk melihat efek atribut title!
</p>

<!-- Tag tunggal img dengan atribut src dan alt -->
<img src="https://via.placeholder.com/150" alt="Contoh Gambar Placeholder" width="150" height="80">`,
        css: `.teks-penting {
  color: #2563eb;
  font-weight: bold;
  cursor: help;
}`
      },
      visualOutput: `
        <div style="padding:15px;background:#ffffff;border:1px solid #e2e8f0;border-radius:6px;">
          <p style="color:#2563eb;font-weight:bold;cursor:help;margin-top:0;" title="Arahkan mouse untuk melihat saya">
            Arahkan kursor ke teks ini untuk melihat efek atribut title! (Tooltip: "Arahkan mouse untuk melihat saya")
          </p>
          <div style="width:150px;height:50px;background:#e2e8f0;display:flex;align-items:center;justify-content:center;color:#64748b;font-size:12px;border-radius:4px;">
            [ Gambar: 150x80 ]
          </div>
        </div>
      `
    }
  ],
  commonMistakes: [
    {
      mistake: 'Menuliskan atribut di dalam tag penutup, seperti </p class="merah">.',
      fix: 'Atribut HANYA boleh ditulis di dalam tag pembuka: <p class="merah">...</p>.'
    },
    {
      mistake: 'Menggunakan ID yang sama persis pada dua elemen berbeda di halaman yang sama.',
      fix: 'Atribut id harus bersifat UNIK dalam satu dokumen. Jika ingin mengelompokkan banyak elemen, gunakan atribut class.'
    },
    {
      mistake: 'Lupa memberi tanda petik pada nilai atribut, contoh: <img src=gambar.jpg alt=foto saya>.',
      fix: 'Selalu bungkus nilai atribut dengan tanda petik ganda atau tunggal: <img src="gambar.jpg" alt="foto saya">.'
    }
  ],
  challenge: {
    title: 'Penerapan Atribut Global pada Elemen',
    description: 'Buatlah sebuah tag heading <h2> dengan atribut id="judul-utama", sebuah paragraf dengan class="keterangan" dan atribut title="Penjelasan materi minggu 2", serta sebuah tag void horizontal rule <hr>.',
    hint: 'Gunakan sintaks: <h2 id="...">, <p class="..." title="...">, lalu <hr>.',
    starterCode: {
      html: `<!-- Tuliskan h2 dengan id, p dengan class dan title, serta hr di sini -->`,
      css: ''
    }
  },
  playgroundExample: {
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Tag dan Atribut</title>
</head>
<body>
  <h1 id="header-utama" title="Ini adalah judul utama">Tag, Elemen & Atribut</h1>
  
  <p class="highlight" title="Informasi Penting">
    Teks ini menggunakan class "highlight" dan memiliki atribut title.
  </p>

  <hr>

  <p>Tag &lt;hr&gt; di atas adalah contoh void element (tanpa tag penutup).</p>
</body>
</html>`,
    css: `.highlight {
  background-color: #fef08a;
  padding: 10px;
  border-left: 4px solid #ca8a04;
  color: #713f12;
}`
  }
};

export default week02;
