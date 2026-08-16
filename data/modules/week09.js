/* ============================================================
   data/modules/week09.js — Minggu 9: Formulir (Form) HTML
   ============================================================ */

export const week09 = {
  weekId: 9,
  title: 'Formulir (Form) & Input Pengguna',
  type: 'regular',
  objectives: [
    'Memahami fungsi elemen <form> beserta atribut action dan method (GET vs POST).',
    'Menggunakan berbagai tipe tag <input>: text, password, email, number, date, radio, checkbox, file, dan submit.',
    'Menghubungkan <label> dengan <input> menggunakan atribut for dan id untuk aksesibilitas.',
    'Menggunakan tag <textarea> untuk teks multi-baris dan <select>/<option> untuk dropdown.',
    'Menerapkan atribut validasi dasar HTML5: required, placeholder, min, max, pattern, dan disabled.'
  ],
  competencies: [
    'CPMK-3: Menguasai elemen interaktif dan multimedia HTML'
  ],
  concepts: [
    {
      heading: '1. Elemen <form>, action, dan method',
      content: `
        <p>Elemen <code>&lt;form&gt;</code> digunakan untuk mengumpulkan input interaktif dari pengguna dan mengirimkannya ke server. Atribut utamanya:</p>
        <ul>
          <li><code>action</code>: Alamat URL script backend pemroses data (contoh: action="proses.php" atau action="/api/daftar").</li>
          <li><code>method="GET"</code>: Mengirim data melalui parameter URL query string (cocok untuk form pencarian, tidak untuk data sensitif/password).</li>
          <li><code>method="POST"</code>: Mengirim data di dalam body request HTTP (aman untuk password, data rahasia, dan upload file).</li>
        </ul>
      `
    },
    {
      heading: '2. Tag <label> dan Beragam Tipe <input>',
      content: `
        <p>Penggunaan <code>&lt;label for="id_input"&gt;</code> sangat penting agar saat label diklik, kursor otomatis aktif di kotak input terkait.</p>
        <p>Tipe input yang paling sering digunakan:</p>
        <ul>
          <li><code>type="text"</code>: Kotak teks satu baris.</li>
          <li><code>type="password"</code>: Teks disamarkan menjadi titik-titik (masking).</li>
          <li><code>type="email"</code>: Otomatis memvalidasi format email mengandung '@' dan domain.</li>
          <li><code>type="number"</code>: Hanya menerima angka (dengan atribut min, max, step).</li>
          <li><code>type="date"</code>: Pemilih kalender tanggal.</li>
          <li><code>type="radio"</code>: Pilihan tunggal (opsi eksklusif). Semua opsi radio dalam 1 grup wajib memiliki <strong>atribut name yang sama</strong>.</li>
          <li><code>type="checkbox"</code>: Pilihan ganda (bisa centang lebih dari satu).</li>
          <li><code>type="file"</code>: Memilih file/dokumen dari komputer.</li>
        </ul>
      `
    },
    {
      heading: '3. Textarea, Dropdown Select, dan Tombol',
      content: `
        <ul>
          <li><code>&lt;textarea rows="4" cols="50"&gt;</code>: Area isian teks multi-baris (misal untuk pesan/komentar).</li>
          <li><code>&lt;select&gt;</code> & <code>&lt;option&gt;</code>: Menu pilihan dropdown (bisa dikelompokkan dengan <code>&lt;optgroup&gt;</code>).</li>
          <li><code>&lt;button type="submit"&gt;</code>: Mengirim formulir.</li>
          <li><code>&lt;button type="reset"&gt;</code>: Mengosongkan kembali seluruh isian formulir.</li>
        </ul>
      `,
      codeExample: {
        html: `<form action="#" method="POST">
  <!-- Input Teks & Email -->
  <p>
    <label for="nama_lengkap">Nama Lengkap:</label><br>
    <input type="text" id="nama_lengkap" name="nama" placeholder="Masukkan nama..." required>
  </p>

  <p>
    <label for="email_user">Email:</label><br>
    <input type="email" id="email_user" name="email" required>
  </p>

  <!-- Pilihan Radio (Name harus sama) -->
  <p>Jenis Kelamin:<br>
    <input type="radio" id="jk_l" name="gender" value="L">
    <label for="jk_l">Laki-laki</label>
    <input type="radio" id="jk_p" name="gender" value="P">
    <label for="jk_p">Perempuan</label>
  </p>

  <!-- Dropdown Select -->
  <p>
    <label for="prodi">Program Studi:</label><br>
    <select id="prodi" name="prodi">
      <option value="if">S1 Informatika</option>
      <option value="si">S1 Sistem Informasi</option>
      <option value="pjj">PJJ Ilmu Komunikasi</option>
    </select>
  </p>

  <!-- Textarea & Tombol -->
  <p>
    <label for="catatan">Catatan Tambahan:</label><br>
    <textarea id="catatan" name="catatan" rows="3" cols="40"></textarea>
  </p>

  <button type="submit">Kirim Formulir</button>
  <button type="reset">Reset</button>
</form>`,
        css: ''
      },
      visualOutput: `
        <div style="padding:15px;background:#ffffff;border:1px solid #e2e8f0;border-radius:6px;font-family:Arial,sans-serif;font-size:13px;">
          <div style="display:grid;gap:10px;max-width:400px;">
            <div>
              <label style="font-weight:bold;font-size:12px;">Nama Lengkap:</label><br>
              <input type="text" placeholder="Masukkan nama..." style="width:100%;padding:6px;border:1px solid #cbd5e1;border-radius:4px;margin-top:2px;">
            </div>
            <div>
              <label style="font-weight:bold;font-size:12px;">Email:</label><br>
              <input type="email" placeholder="nama@email.com" style="width:100%;padding:6px;border:1px solid #cbd5e1;border-radius:4px;margin-top:2px;">
            </div>
            <div>
              <span style="font-weight:bold;font-size:12px;">Jenis Kelamin:</span><br>
              <label><input type="radio" name="demo_g" checked> Laki-laki</label>
              <label style="margin-left:10px;"><input type="radio" name="demo_g"> Perempuan</label>
            </div>
            <div>
              <label style="font-weight:bold;font-size:12px;">Program Studi:</label><br>
              <select style="width:100%;padding:6px;border:1px solid #cbd5e1;border-radius:4px;margin-top:2px;">
                <option>S1 Informatika</option>
                <option>S1 Sistem Informasi</option>
              </select>
            </div>
            <div>
              <button style="background:#2563eb;color:white;border:none;padding:6px 14px;border-radius:4px;font-weight:bold;cursor:pointer;">Kirim Formulir</button>
            </div>
          </div>
        </div>
      `
    }
  ],
  commonMistakes: [
    {
      mistake: 'Memberikan nilai atribut name yang berbeda pada sekelompok input radio yang seharusnya 1 pilihan.',
      fix: 'Semua input radio dalam kelompok yang sama WAJIB memiliki atribut name="..." yang identik agar hanya 1 opsi yang bisa dipilih.'
    },
    {
      mistake: 'Tidak menghubungkan <label for="..."> dengan <input id="...">.',
      fix: 'Nilai atribut "for" pada label harus sama persis dengan atribut "id" pada input agar label bisa diklik.'
    },
    {
      mistake: 'Menggunakan method="GET" untuk formulir login / pendaftaran yang berisi password.',
      fix: 'Gunakan method="POST" agar data password tidak terlihat di kolom URL browser.'
    }
  ],
  challenge: {
    title: 'Formulir Pendaftaran Seminar Online',
    description: 'Buatlah formulir pendaftaran kegiatan webinar kampus dengan elemen: Nama (text, required), Email (email, required), Tanggal Lahir (date), Kategori Peserta (radio: Mahasiswa / Dosen / Umum), Peminatan Workshop (checkbox: HTML / CSS / JavaScript), dan Tombol Submit.',
    hint: 'Gunakan <form method="POST">, <label for="...">, <input type="text|email|date|radio|checkbox">, dan <button type="submit">.',
    starterCode: {
      html: `<!-- Buat formulir pendaftaran seminar lengkap di sini -->`,
      css: ''
    }
  },
  playgroundExample: {
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Form Interaktif</title>
</head>
<body>
  <h2>Formulir Pendaftaran Akun</h2>

  <form action="#" method="POST">
    <p>
      <label for="username">Username:</label><br>
      <input type="text" id="username" name="username" required placeholder="Contoh: user123">
    </p>

    <p>
      <label for="pass">Kata Sandi:</label><br>
      <input type="password" id="pass" name="password" required minlength="6">
    </p>

    <p>
      <input type="checkbox" id="setuju" name="setuju" required>
      <label for="setuju">Saya menyetujui syarat & ketentuan.</label>
    </p>

    <button type="submit">Daftar Sekarang</button>
  </form>
</body>
</html>`,
    css: `body {
  font-family: Arial, sans-serif;
  padding: 20px;
}

input[type="text"], input[type="password"] {
  padding: 8px;
  width: 250px;
  margin-top: 4px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
}

button {
  background-color: #2563eb;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}`
  }
};

export default week09;
