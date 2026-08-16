/* ============================================================
   data/modules/week12.js — Minggu 12: Audio dalam HTML5
   ============================================================ */

export const week12 = {
  weekId: 12,
  title: 'Audio dalam HTML5',
  type: 'regular',
  objectives: [
    'Menyematkan pemutar suara native menggunakan elemen <audio> tanpa ketergantungan plugin pihak ketiga.',
    'Memahami atribut utama pada tag audio: controls, autoplay, loop, muted, dan preload.',
    'Mengetahui format audio web standar: MP3, Ogg, dan WAV beserta codec-nya.',
    'Menyusun pemutar audio podcast/musik interaktif dengan multi-format fallback.'
  ],
  competencies: [
    'CPMK-3: Menguasai elemen interaktif dan multimedia HTML'
  ],
  concepts: [
    {
      heading: '1. Elemen <audio> Native HTML5',
      content: `
        <p>Sama seperti video, HTML5 menyediakan elemen <code>&lt;audio&gt;</code> untuk memutar rekaman suara, podcast, efek suara game, maupun musik latar secara native di peramban web.</p>
        <p>Format audio web yang didukung luas:</p>
        <ul>
          <li><strong>MP3 (MPEG Audio Layer III / <code>audio/mpeg</code>):</strong> Format paling populer dan didukung oleh 100% browser modern.</li>
          <li><strong>Ogg (Ogg Vorbis / <code>audio/ogg</code>):</strong> Format terbuka dan bebas paten yang sangat disukai komunitas open source.</li>
          <li><strong>WAV (Waveform Audio / <code>audio/wav</code>):</strong> Format audio tanpa kompresi (lossless) berkualitas tinggi, namun ukuran filenya lebih besar.</li>
        </ul>
      `
    },
    {
      heading: '2. Atribut-Atribut Elemen <audio>',
      content: `
        <ul>
          <li><code>controls</code>: Menampilkan kontrol pemutar audio (tombol play/pause, durasi waktu, scrubber pemutar, dan pengatur volume suara). <strong>Wajib digunakan</strong> agar pemutar tampak di halaman.</li>
          <li><code>autoplay</code>: Memutar audio secara otomatis begitu halaman selesai dimuat.</li>
          <li><code>loop</code>: Mengulang putaran lagu/rekaman terus-menerus tanpa henti.</li>
          <li><code>muted</code>: Memulai audio dalam kondisi suara dibisukan (senyap).</li>
          <li><code>preload="auto|metadata|none"</code>: Mengatur apakah file audio harus diunduh otomatis saat halaman dimuat atau hanya saat tombol play ditekan.</li>
        </ul>
      `
    },
    {
      heading: '3. Menyusun Pemutar Audio dengan <source>',
      content: `
        <p>Gunakan tag <code>&lt;source&gt;</code> di dalam tag <code>&lt;audio&gt;</code> untuk memberikan opsi format audio cadangan jika salah satu format tidak dikenali browser tertentu:</p>
      `,
      codeExample: {
        html: `<!-- Pemutar Audio Podcast Kampus dengan Kontrol Penuh -->
<audio controls preload="metadata">
  <source src="podcast-kuliah.mp3" type="audio/mpeg">
  <source src="podcast-kuliah.ogg" type="audio/ogg">
  <source src="podcast-kuliah.wav" type="audio/wav">
  Browser Anda tidak mendukung pemutar audio HTML5.
</audio>`,
        css: ''
      },
      visualOutput: `
        <div style="padding:15px;background:#ffffff;border:1px solid #e2e8f0;border-radius:6px;font-family:Arial,sans-serif;font-size:13px;">
          <div style="background:#f8fafc;padding:12px;border:1px solid #cbd5e1;border-radius:6px;max-width:380px;">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
              <span style="font-size:20px;">🎙️</span>
              <div>
                <strong style="font-size:13px;color:#0f172a;">Podcast WebProg I — Episode 1</strong><br>
                <span style="font-size:11px;color:#64748b;">Narasumber: Dosen Pengampu</span>
              </div>
            </div>
            <div style="background:#e2e8f0;padding:6px 12px;border-radius:20px;display:flex;align-items:center;gap:10px;font-size:12px;">
              <span style="cursor:pointer;color:#2563eb;font-weight:bold;">▶ Play</span>
              <div style="flex:1;height:4px;background:#cbd5e1;border-radius:2px;">
                <div style="width:45%;height:100%;background:#2563eb;border-radius:2px;"></div>
              </div>
              <span style="color:#64748b;font-size:11px;">04:20 / 12:00</span>
              <span>🔊</span>
            </div>
          </div>
        </div>
      `
    }
  ],
  commonMistakes: [
    {
      mistake: 'Lupa menuliskan atribut controls pada elemen <audio>.',
      fix: 'Jika controls dihilangkan, browser tidak akan menampilkan kontrol visual apapun di halaman (elemen audio menjadi tidak kasat mata).'
    },
    {
      mistake: 'Salah menentukan MIME type pada tag <source>, misal menuliskan type="audio/mp3".',
      fix: 'MIME type resmi untuk format MP3 adalah type="audio/mpeg" (bukan audio/mp3).'
    }
  ],
  challenge: {
    title: 'Pemutar Podcast Edukasi dengan Deskripsi',
    description: 'Buatlah kartu podcast edukasi sederhana yang memuat: Judul Podcast (h3), deskripsi episode singkat dalam tag <p>, pemutar audio dengan atribut controls dan loop, minimal dua <source> (MP3 dan OGG), serta tombol download cadangan jika browser lawas.',
    hint: 'Gunakan <audio controls loop> dengan <source src="..." type="audio/mpeg"> dan <source src="..." type="audio/ogg">.',
    starterCode: {
      html: `<!-- Buat pemutar audio podcast lengkap di sini -->`,
      css: ''
    }
  },
  playgroundExample: {
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Audio HTML5</title>
</head>
<body>
  <h2>Podcast Edukasi Mahasiswa</h2>
  <p>Dengarkan rekaman ringkasan materi HTML & CSS berikut:</p>

  <audio controls>
    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
    Browser Anda tidak mendukung tag audio HTML5.
  </audio>

  <p><small>Keterangan: Audio di atas diputar langsung via HTML5 native player.</small></p>
</body>
</html>`,
    css: `body {
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 500px;
}

audio {
  width: 100%;
  margin-top: 10px;
}`
  }
};

export default week12;
