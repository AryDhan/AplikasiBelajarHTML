/* ============================================================
   data/weeks.js — 16 Weeks Metadata with Type Markers
   Types: 'regular' | 'uts' | 'uas'
   ============================================================ */

export const weeks = [
  {
    id: 1,
    type: 'regular',
    title: 'Pengenalan HTML',
    shortTitle: 'Pengenalan HTML',
    topics: ['Sistem pembelajaran & RPS', 'Pengenalan HTML', 'Pengertian HTML', 'Perintah dasar HTML'],
    icon: '🌐',
    hasQuiz: true,
    hasChallenge: true
  },
  {
    id: 2,
    type: 'regular',
    title: 'Tag, Elemen, dan Atribut',
    shortTitle: 'Tag & Atribut',
    topics: ['Tag HTML', 'Elemen HTML', 'Atribut HTML', 'Atribut global'],
    icon: '🏷️',
    hasQuiz: true,
    hasChallenge: true
  },
  {
    id: 3,
    type: 'regular',
    title: 'Paragraf',
    shortTitle: 'Paragraf',
    topics: ['Tag <p>', 'Line break <br>', 'Horizontal rule <hr>', 'Preformatted text <pre>'],
    icon: '📝',
    hasQuiz: true,
    hasChallenge: true
  },
  {
    id: 4,
    type: 'regular',
    title: 'Heading, Komentar, dan Text Formatting',
    shortTitle: 'Heading & Formatting',
    topics: ['Heading <h1>-<h6>', 'Komentar HTML', 'Bold, Italic, Underline', 'Subscript, Superscript, Mark'],
    icon: '✏️',
    hasQuiz: true,
    hasChallenge: true
  },
  {
    id: 5,
    type: 'regular',
    title: 'Link',
    shortTitle: 'Link',
    topics: ['Tag <a>', 'Atribut href & target', 'Link internal & eksternal', 'Bookmark link'],
    icon: '🔗',
    hasQuiz: true,
    hasChallenge: true
  },
  {
    id: 6,
    type: 'regular',
    title: 'Gambar dan Tabel',
    shortTitle: 'Gambar & Tabel',
    topics: ['Tag <img>', 'Atribut src, alt, width, height', 'Tag <table>, <tr>, <td>, <th>', 'Colspan & rowspan'],
    icon: '🖼️',
    hasQuiz: true,
    hasChallenge: true
  },
  {
    id: 7,
    type: 'regular',
    title: 'List',
    shortTitle: 'List',
    topics: ['Ordered list <ol>', 'Unordered list <ul>', 'Description list <dl>', 'Nested list'],
    icon: '📋',
    hasQuiz: true,
    hasChallenge: true
  },
  {
    id: 8,
    type: 'uts',
    title: 'Ujian Tengah Semester (UTS)',
    shortTitle: 'UTS',
    topics: ['Rangkuman Minggu 1–7'],
    icon: '📝',
    hasQuiz: false,
    hasChallenge: false,
    scope: { weekRange: [1, 7], label: 'Minggu 1 – Minggu 7' }
  },
  {
    id: 9,
    type: 'regular',
    title: 'Form',
    shortTitle: 'Form',
    topics: ['Tag <form>', 'Input types', 'Textarea & select', 'Button & submit'],
    icon: '📄',
    hasQuiz: true,
    hasChallenge: true
  },
  {
    id: 10,
    type: 'regular',
    title: 'Elemen Semantik HTML',
    shortTitle: 'Semantik HTML',
    topics: ['<header>, <nav>, <main>', '<article>, <section>, <aside>', '<footer>, <figure>, <figcaption>', 'Proyek website edukasi'],
    icon: '🏗️',
    hasQuiz: true,
    hasChallenge: true,
    hasProject: 'website-edukasi'
  },
  {
    id: 11,
    type: 'regular',
    title: 'Video dalam HTML',
    shortTitle: 'Video HTML',
    topics: ['Tag <video>', 'Atribut controls, autoplay, loop', 'Format video (MP4, WebM, Ogg)', 'Tag <source>'],
    icon: '🎬',
    hasQuiz: true,
    hasChallenge: true
  },
  {
    id: 12,
    type: 'regular',
    title: 'Audio dalam HTML',
    shortTitle: 'Audio HTML',
    topics: ['Tag <audio>', 'Atribut controls, autoplay, loop', 'Format audio (MP3, Ogg, WAV)', 'Embed audio'],
    icon: '🔊',
    hasQuiz: true,
    hasChallenge: true
  },
  {
    id: 13,
    type: 'regular',
    title: 'Proyek Website Pribadi',
    shortTitle: 'Web Pribadi',
    topics: ['Perencanaan website', 'Struktur halaman portfolio', 'Menggabungkan semua elemen HTML', 'Proyek website pribadi'],
    icon: '👤',
    hasQuiz: true,
    hasChallenge: true,
    hasProject: 'website-pribadi'
  },
  {
    id: 14,
    type: 'regular',
    title: 'Dasar CSS',
    shortTitle: 'Dasar CSS',
    topics: ['Konsep dasar CSS', 'Unsur-unsur CSS', 'Selector CSS dasar', 'Implementasi CSS ke HTML (inline, internal, external)'],
    icon: '🎨',
    hasQuiz: true,
    hasChallenge: true
  },
  {
    id: 15,
    type: 'regular',
    title: 'Selector dan Warna CSS',
    shortTitle: 'Selector & Warna',
    topics: ['Selector lanjutan', 'Jenis warna CSS', 'Implementasi selector pada HTML', 'Implementasi warna pada HTML'],
    icon: '🎯',
    hasQuiz: true,
    hasChallenge: true
  },
  {
    id: 16,
    type: 'uas',
    title: 'Ujian Akhir Semester (UAS)',
    shortTitle: 'UAS',
    topics: ['Rangkuman Minggu 9–15'],
    icon: '🎓',
    hasQuiz: false,
    hasChallenge: false,
    scope: { weekRange: [9, 15], label: 'Minggu 9 – Minggu 15' }
  }
];

/**
 * Get week data by ID.
 * @param {number} weekId
 * @returns {object|undefined}
 */
export function getWeekById(weekId) {
  return weeks.find(w => w.id === weekId);
}

/**
 * Get all regular (non-exam) weeks.
 * @returns {object[]}
 */
export function getRegularWeeks() {
  return weeks.filter(w => w.type === 'regular');
}

/**
 * Get weeks within a range (inclusive).
 * @param {number} from
 * @param {number} to
 * @returns {object[]}
 */
export function getWeeksInRange(from, to) {
  return weeks.filter(w => w.id >= from && w.id <= to);
}
