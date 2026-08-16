/* ============================================================
   data/modules/week11.js — Minggu 11: Video dalam HTML
   ============================================================ */

export const week11 = {
  weekId: 11,
  title: 'Video dalam HTML5',
  type: 'regular',
  objectives: [
    'Menyematkan pemutar video native menggunakan elemen <video> tanpa plugin Flash pihak ketiga.',
    'Memahami atribut penting video: controls, autoplay, loop, muted, poster, width, height, dan preload.',
    'Menggunakan elemen <source> ganda untuk mendukung multi-format video (MP4, WebM, Ogg).',
    'Menyediakan teks fallback untuk browser lama yang belum mendukung tag video HTML5.'
  ],
  competencies: [
    'CPMK-3: Menguasai elemen interaktif dan multimedia HTML'
  ],
  concepts: [
    {
      heading: '1. Elemen <video> Native HTML5',
      content: `
        <p>Sebelum HTML5, memutar video di web memerlukan plugin pihak ketiga seperti Adobe Flash Player yang lambat dan rentan celah keamanan. HTML5 memperkenalkan elemen <code>&lt;video&gt;</code> yang memungkinkan browser memutar video secara native dan efisien.</p>
        <p>Format video web yang paling umum didukung:</p>
        <ul>
          <li><strong>MP4 (H.264 + AAC):</strong> Format paling populer dengan kompatibilitas 99% di semua browser dan perangkat mobile.</li>
          <li><strong>WebM (VP8/VP9 + Vorbis/Opus):</strong> Format terbuka dan efisien yang dikembangkan oleh Google.</li>
          <li><strong>Ogg (Theora + Vorbis):</strong> Format open-source alternatif.</li>
        </ul>
      `
    },
    {
      heading: '2. Atribut-Atribut Penting pada Elemen <video>',
      content: `
        <ul>
          <li><code>controls</code>: Menampilkan tombol play/pause, pengatur volume, durasi waktu, dan tombol layar penuh (fullscreen). <strong>Wajib disertakan</strong> agar pengguna bisa mengontrol video.</li>
          <li><code>poster="gambar.jpg"</code>: Menampilkan gambar cover/thumbnail sebelum video diputar.</li>
          <li><code>autoplay</code>: Video otomatis diputar saat halaman dimuat. <em>Catatan:</em> Sebagian besar browser modern hanya mengizinkan autoplay jika disertai atribut <code>muted</code> (suara dimatikan).</li>
          <li><code>muted</code>: Mematikan audio video secara default saat pertama kali dimuat.</li>
          <li><code>loop</code>: Mengulang video secara otomatis setelah selesai diputar.</li>
          <li><code>preload="auto|metadata|none"</code>: Mengatur strategi buffering video di latar belakang.</li>
        </ul>
      `
    },
    {
      heading: '3. Menyediakan Cadangan Multi-Format dengan <source>',
      content: `
        <p>Untuk memastikan video dapat diputar di seluruh jenis browser, disarankan menggunakan tag anak <code>&lt;source&gt;</code> dengan atribut <code>src</code> dan <code>type</code>:</p>
      `,
      codeExample: {
        html: `<!-- Pemutar Video Lengkap dengan Thumbnail & Multi-source -->
<video width="480" height="270" controls poster="https://via.placeholder.com/480x270?text=Cover+Video">
  <source src="video-kuliah.mp4" type="video/mp4">
  <source src="video-kuliah.webm" type="video/webm">
  <!-- Teks fallback jika browser tidak mendukung -->
  Browser Anda tidak mendukung pemutar video HTML5. Silakan unduh video <a href="video-kuliah.mp4">di sini</a>.
</video>`,
        css: ''
      },
      visualOutput: `
        <div style="padding:15px;background:#ffffff;border:1px solid #e2e8f0;border-radius:6px;font-family:Arial,sans-serif;font-size:13px;">
          <div style="width:100%;max-width:400px;background:#0f172a;border-radius:6px;overflow:hidden;color:white;">
            <div style="height:180px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#1e293b;">
              <div style="width:48px;height:48px;border-radius:50%;background:#3b82f6;display:flex;align-items:center;justify-content:center;font-size:20px;cursor:pointer;">▶</div>
              <span style="margin-top:8px;font-size:12px;color:#94a3b8;">Preview Pemutar Video HTML5</span>
            </div>
            <div style="background:#0f172a;padding:8px 12px;display:flex;align-items:center;gap:10px;font-size:12px;">
              <span>▶ Play</span>
              <div style="flex:1;height:4px;background:#334155;border-radius:2px;">
                <div style="width:35%;height:100%;background:#3b82f6;border-radius:2px;"></div>
              </div>
              <span>01:15 / 03:45</span>
              <span>🔊</span>
              <span>⛶</span>
            </div>
          </div>
        </div>
      `
    }
  ],
  commonMistakes: [
    {
      mistake: 'Lupa menambahkan atribut controls pada tag <video>.',
      fix: 'Tanpa atribut controls, video akan tampil seperti gambar mati tanpa tombol putar, jeda, atau volume.'
    },
    {
      mistake: 'Menggunakan autoplay tanpa atribut muted, lalu heran video tidak otomatis berputar.',
      fix: 'Kebijakan browser modern (Chrome, Safari, Edge) memblokir autoplay bersuara untuk mencegah pengguna terkejut. Tambahkan muted: <video autoplay muted>.'
    }
  ],
  challenge: {
    title: 'Embed Video Materi Kuliah dengan Poster & Controls',
    description: 'Buatlah pemutar video HTML5 yang memiliki lebar 100% (max-width 500px), dilengkapi atribut controls, menampilkan poster cover thumbnail, menyediakan minimal dua <source> (mp4 dan webm), serta teks fallback bagi browser lawas.',
    hint: 'Gunakan <video controls poster="..."> dengan tag anak <source src="..." type="...">.',
    starterCode: {
      html: `<!-- Buat pemutar video lengkap di sini -->`,
      css: ''
    }
  },
  playgroundExample: {
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Video HTML5</title>
</head>
<body>
  <h2>Video Edukasi Teknologi Web</h2>

  <video width="100%" height="auto" controls poster="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500">
    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4">
    Browser Anda tidak mendukung tag video HTML5.
  </video>

  <p><small>Catatan: Video di atas menggunakan kontrol bawaan browser.</small></p>
</body>
</html>`,
    css: `body {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

video {
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}`
  }
};

export default week11;
