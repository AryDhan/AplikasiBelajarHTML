# Platform Pembelajaran Interaktif — Pemrograman Web I
**Universitas Siber Asia (UNSIA) — Program Studi S1 Informatika**

Platform pembelajaran interaktif berbasis web (Single Page Application) yang dirancang untuk mendemonstrasikan, melatih, dan menguji seluruh materi dalam Rencana Pembelajaran Semester (RPS) mata kuliah **Pemrograman Web I** (HTML & CSS).

---

## 🌟 Fitur Utama

- **16 Modul Terstruktur Sesuai RPS:** Memuat seluruh 25 topik wajib dari pengenalan HTML, tag/elemen/atribut, paragraf, heading, pemformatan teks, link, gambar & tabel, list, formulir interaktif, semantik HTML5, video, audio, dasar CSS, hingga selector & sistem warna CSS.
- **Evaluasi UTS (M8) & UAS (M16):** Halaman rangkuman dan review khusus evaluasi tengah dan akhir semester dengan pemisahan skema data review.
- **70 Soal Kuis Pilihan Ganda Interaktif:** 14 modul kuis (5 soal per modul) dengan skor otomatis, umpan balik visual benar/salah secara instan, pembahasan mendalam, rekam skor, dan analisis hasil belajar.
- **Playground HTML & CSS Live Preview:** Editor kode dual-panel dengan live preview pada iframe terisolasi (`sandbox="allow-scripts"`), tombol pemuat contoh per topik modul, pintasan tombol Tab, tombol reset, dan penyesuaian mobile view (tab-switch code/preview).
- **Project Showcase:** Panduan, kriteria kelayakan, kode awal (*starter code*), dan implementasi solusi utuh untuk 2 proyek besar:
  1. *Website Portal Edukasi* (Minggu 10) — Struktur semantik penuh, multi-section, media gambar & tabel, formulir tanya mentor.
  2. *Website Portofolio Pribadi* (Minggu 13) — Profil mahasiswa, tabel riwayat studi, list keahlian teknis, galeri proyek, dan formulir kontak.
- **Pelacak Kemajuan Belajar (Progress Tracking):** Menyimpan status penyelesaian modul, skor kuis, dan histori belajar ke `localStorage` dengan fallback aman *in-memory* bila storage privat/terblokir.
- **Dark Mode & Light Mode:** Desain bertema akademik modern dengan peralihan tema mulus dan deteksi preferensi sistem (`prefers-color-scheme`).
- **Aksesibilitas & Standar Industri:** Menggunakan HTML5 semantik, ARIA labels, fokus keyboard (`:focus-visible`), *skip links*, kontras warna WCAG, dan CSS responsive mobile-first.
- **Automated Smoke Test Suite:** Modul verifikasi integritas data bawaan yang memvalidasi seluruh 16 modul, 70 butir soal kuis, routing, dan skema data.

---

## 📁 Struktur Direktori Proyek

```
UAS_WEB_App/
├── index.html                    # Single Page Application (SPA) Shell Utama
├── favicon.svg                   # Favicon kustom SVG
├── README.md                     # Dokumentasi komprehensif proyek
│
├── assets/
│   └── logo.svg                  # Logo vektor brand WebProg I UNSIA
│
├── css/
│   ├── variables.css             # Design tokens: warna, tipografi, radius, shadow (Light & Dark)
│   ├── base.css                  # CSS Reset modern, tipografi Inter, styling fokus & scrollbar
│   ├── layout.css                # Layout shell: sidebar fixed/collapsible, header sticky, grid
│   ├── components.css            # Komponen UI: button, card, badge, alert, accordion, tabs, modal, skeleton
│   ├── modules.css               # Tampilan khusus halaman modul: code blocks, visual output, mistakes
│   ├── playground.css            # Styling editor kode, live iframe, toolbar, & mobile tabs
│   ├── quiz.css                  # Kartu soal, opsi A-D, animasi feedback, ring skor, & quiz hub
│   └── responsive.css            # Breakpoints mobile-first (480px, 768px, 1024px, 1280px)
│
├── js/
│   ├── app.js                    # Titik masuk (Entry Point) & inisialisasi urutan boot
│   ├── router.js                 # Router SPA berbasis hash dengan proteksi 404 & validasi parameter
│   ├── state.js                  # State management & wrapper localStorage dengan in-memory fallback
│   ├── theme.js                  # Pengatur tema Light/Dark & listener preferensi sistem
│   ├── ui.js                     # Reusable UI component builders & clipboard helper
│   ├── navigation.js             # Generator navigasi sidebar dinamis & breadcrumb
│   ├── renderer.js               # Page renderers (Dashboard, About, Roadmap, Modul, Quiz, dll)
│   ├── playground.js             # Engine editor HTML/CSS + sandboxed iframe live renderer
│   ├── quiz.js                   # Engine kuis interaktif, skoring otomatis, & breakdown pembahasan
│   └── smoke-test.js             # Pengujian otomatis integritas seluruh modul & 70 soal kuis
│
└── data/
    ├── course-info.js            # Metadata mata kuliah, dosen, CPMK, media, software, & penilaian
    ├── weeks.js                  # Metadata 16 minggu perkuliahan dengan penanda tipe (regular/uts/uas)
    ├── projects.js               # Data showcase proyek Website Edukasi & Website Pribadi
    ├── references.js             # Bibliografi standar resmi, buku teks akademik ber-ISBN, & tools
    │
    ├── modules/                  # Data konten materi 16 minggu
    │   ├── week01.js             # Pengenalan HTML & Dasar Web
    │   ├── week02.js             # Tag, Elemen, dan Atribut
    │   ├── week03.js             # Paragraf, Whitespace Collapse, <br>, <hr>, <pre>
    │   ├── week04.js             # Heading <h1>-<h6>, Komentar, & Text Formatting
    │   ├── week05.js             # Hyperlink, Anchor <a>, href, target, mailto, bookmark
    │   ├── week06.js             # Gambar <img>, alt, figure, dan Tabel Data <table>
    │   ├── week07.js             # List (<ul>, <ol>, <dl>, nested lists)
    │   ├── week08.js             # Evaluasi UTS (Rangkuman Minggu 1–7)
    │   ├── week09.js             # Formulir <form>, input types, label, textarea, select
    │   ├── week10.js             # Semantik HTML5 (<header>, <nav>, <main>, dll) & Proyek Edukasi
    │   ├── week11.js             # Video HTML5 (<video>, <source>, controls, poster, formats)
    │   ├── week12.js             # Audio HTML5 (<audio>, <source>, controls, formats)
    │   ├── week13.js             # Proyek Website Pribadi / Portofolio Mahasiswa
    │   ├── week14.js             # Dasar CSS (Anatomi, Inline/Internal/External, Specificity)
    │   ├── week15.js             # Selector CSS Lanjutan & Sistem Warna (HEX, RGB, RGBA, HSL)
    │   └── week16.js             # Evaluasi UAS (Rangkuman Minggu 9–15)
    │
    └── quizzes/                  # 14 File Kuis Interaktif (70 butir soal)
        ├── quiz-week01.js
        ├── quiz-week02.js
        ├── quiz-week03.js
        ├── quiz-week04.js
        ├── quiz-week05.js
        ├── quiz-week06.js
        ├── quiz-week07.js
        ├── quiz-week09.js
        ├── quiz-week10.js
        ├── quiz-week11.js
        ├── quiz-week12.js
        ├── quiz-week13.js
        ├── quiz-week14.js
        └── quiz-week15.js
```

---

## 🚀 Cara Menjalankan Aplikasi

Aplikasi dibangun menggunakan **ES Modules (`import`/`export`)** murni tanpa ketergantungan framework pihak ketiga. Karena kebijakan keamanan browser terhadap modul JavaScript lokal (CORS), aplikasi harus dijalankan melalui server HTTP lokal:

### Opsi 1: Menggunakan VS Code Live Server (Direkomendasikan)
1. Buka folder `UAS_WEB_App` di **Visual Studio Code**.
2. Pasang ekstensi **Live Server** (oleh Ritwick Dey).
3. Klik kanan pada file `index.html` dan pilih **"Open with Live Server"** (atau klik tombol *Go Live* di status bar bawah).
4. Browser akan otomatis terbuka di alamat `http://127.0.0.1:5500`.

### Opsi 2: Menggunakan Node.js / NPX Serve
```bash
# Di dalam direktori UAS_WEB_App:
npx -y serve . -l 3000
```
Buka browser di alamat `http://localhost:3000`.

### Opsi 3: Menggunakan Python
```bash
# Python 3
python -m http.server 8000
```
Buka browser di alamat `http://localhost:8000`.

---

## 🧪 Menjalankan Automated Smoke Test

Untuk menguji integritas seluruh 16 modul, kuis (70 butir soal), dan skema routing secara otomatis:

1. Buka aplikasi di browser dengan menambahkan parameter `?debug=true`:
   ```
   http://localhost:3000/?debug=true
   ```
   Buka **Console Developer Tools (F12)** untuk melihat laporan pengujian lengkap.
2. Atau jalankan langsung di terminal menggunakan Node.js:
   ```bash
   node -e "import('./js/smoke-test.js').then(m => m.runSmokeTests())"
   ```

---

## 🗺️ Pemetaan Materi Perkuliahan (RPS)

| Minggu | Topik Materi Utama | Jenis Halaman | Kuis Interaktif | Mini Challenge | Proyek |
|---|---|---|---|---|---|
| **Minggu 1** | Pengenalan HTML, Pengertian, Perintah Dasar | Modul Reguler | ✅ 5 Soal | ✅ Hello World | — |
| **Minggu 2** | Tag, Elemen, dan Atribut (id, class, title) | Modul Reguler | ✅ 5 Soal | ✅ Atribut Global | — |
| **Minggu 3** | Paragraf, Whitespace Collapse, `<br>`, `<hr>`, `<pre>` | Modul Reguler | ✅ 5 Soal | ✅ Format Alamat | — |
| **Minggu 4** | Heading `<h1>`-`<h6>`, Komentar, Text Formatting | Modul Reguler | ✅ 5 Soal | ✅ Artikel & Rumus | — |
| **Minggu 5** | Hyperlink, Anchor `<a>`, href, target, mailto, bookmark | Modul Reguler | ✅ 5 Soal | ✅ Menu Navigasi | — |
| **Minggu 6** | Gambar `<img>`, alt, figure, & Tabel Data `<table>` | Modul Reguler | ✅ 5 Soal | ✅ Tabel Nilai | — |
| **Minggu 7** | List: Ordered `<ol>`, Unordered `<ul>`, Description `<dl>` | Modul Reguler | ✅ 5 Soal | ✅ Menu Kafe Bersarang | — |
| **Minggu 8** | **Evaluasi UTS (Rangkuman Minggu 1–7)** | Evaluasi UTS | — | — | — |
| **Minggu 9** | Formulir `<form>`, Input Types, Label, Textarea, Select | Modul Reguler | ✅ 5 Soal | ✅ Form Pendaftaran | — |
| **Minggu 10** | Elemen Semantik HTML5 & Proyek Website Edukasi | Modul Reguler | ✅ 5 Soal | ✅ Struktur Semantik | 🚀 Web Edukasi |
| **Minggu 11** | Video dalam HTML5 (`<video>`, `<source>`, controls) | Modul Reguler | ✅ 5 Soal | ✅ Video Embed | — |
| **Minggu 12** | Audio dalam HTML5 (`<audio>`, `<source>`, formats) | Modul Reguler | ✅ 5 Soal | ✅ Pemutar Podcast | — |
| **Minggu 13** | Proyek Website Pribadi / Portofolio HTML | Modul Reguler | ✅ 5 Soal | ✅ Portofolio Mahasiswa | 🚀 Web Portofolio |
| **Minggu 14** | Dasar CSS (Anatomi, Inline/Internal/External) | Modul Reguler | ✅ 5 Soal | ✅ Styling Dokumen | — |
| **Minggu 15** | Selector CSS Lanjutan & Sistem Warna (HEX, RGB, RGBA, HSL) | Modul Reguler | ✅ 5 Soal | ✅ UI Glassmorphism | — |
| **Minggu 16** | **Evaluasi UAS (Rangkuman Minggu 9–15)** | Evaluasi UAS | — | — | — |

---

## 🏛️ Informasi Akademik Mata Kuliah

- **Mata Kuliah:** Pemrograman Web I (IF-201)
- **Institusi:** Universitas Siber Asia (UNSIA)
- **Program Studi:** S1 Informatika — Fakultas Sains dan Teknologi
- **Beban Studi:** 3 SKS (Full Online Learning)
- **Komponen Penilaian:**
  - Ujian Tengah Semester (UTS): **25%**
  - Ujian Akhir Semester (UAS): **25%**
  - Tugas 1 & Tugas 2: **20%**
  - Kehadiran / Sikap / Perilaku: **10%**
  - Tugas Besar: **10%**
  - Kuis Interaktif: **10%**

---

## 👨‍💻 Kontributor & Lisensi

Dibuat untuk keperluan media pembelajaran interaktif perkuliahan **Pemrograman Web I** Universitas Siber Asia.
Dilisensikan di bawah lisensi terbuka untuk tujuan pendidikan akademik.
