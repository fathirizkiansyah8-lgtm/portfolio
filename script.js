/* =========================================================
   PORTFOLIO — Fathi Rizkiansyah
   Vanilla JS, dipakai bersama oleh index.html & project.html
   ========================================================= */
"use strict";

document.documentElement.classList.remove("no-js");

/* =========================================================
   1. DATA KONTEN — ubah semua isi website dari sini
   ========================================================= */
const PROFILE = {
  name: "Fathi Rizkiansyah",
  website: "www.fathirizkiansyah.my.id",
  email: "fathirizkiansyah8@gmail.com",
  cv: "assets/cv/cv-Fathi.jpg",
  internshipMonths: 2,
  social: [
    {
      name: "GitHub",
      icon: "github",
      url: "https://github.com/fathirizkiansyah8-lgtm",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/fathi-rizkiansyah-701524408/",
    },
    {
      name: "Instagram",
      icon: "instagram",
      url: "https://www.instagram.com/fathirizkiansyahh/",
    },
    { name: "Email", icon: "mail", url: "mailto:fathirizkiansyah8@gmail.com" },
  ],
};

/* Data pendidikan */
const EDUCATION = [
  {
    level: { id: "SD", en: "Elementary School" },
    school: { id: "SDN Kedoya Selatan 01 Pagi", en: "SDN Kedoya Selatan 01 Pagi" },
    year: "2015 – 2021",
    icon: "award",
  },
  {
    level: { id: "SMP", en: "Junior High School" },
    school: { id: "SMPN 127 Jakarta", en: "SMPN 127 Jakarta" },
    year: "2021 – 2024",
    icon: "award",
  },
  {
    level: { id: "SMA / SMK", en: "Senior High School" },
    school: { id: "SMKN 20 Jakarta – Rekayasa Perangkat Lunak", en: "SMKN 20 Jakarta – Software Engineering" },
    year: "2024 – 2027",
    icon: "code",
  },
];

/* category: 'web-dinamis' | 'web-statis' | 'mobile'
   demo / github: kosongkan ('') bila tidak ada, tombolnya otomatis disembunyikan */
const PROJECTS = [
  {
    id: "poin-sekolah",
    category: "web-dinamis",
    image: "assets/images/projects/poin-sekolah.jpeg",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    demo: "https://poin-sekolah-production.up.railway.app/",
    github: "https://github.com/fathirizkiansyah8-lgtm/poin-sekolah",
    title: {
      id: "Aplikasi Sistem Poin Sekolah",
      en: "School Points System App",
    },
    desc: {
      id: "Sistem poin sekolah yang mencatat poin siswa secara otomatis.",
      en: "A school points system that records student points through a website.",
    },
    features: {
      id: [
        "Pencatatan poin otomatis berbasis Website",
        "Dashboard rekap poin",
        "Ekspor laporan poin",
      ],
      en: [
        "Automatic point recording via website",
        "Points summary dashboard",
        "Points report export",
      ],
    },
  },
  {
    id: "Web-BMS",
    category: "web-statis",
    image: "assets/images/projects/web-bms.jpeg",
    tech: ["HTML", "CSS", "JavaScript",],
    demo: "https://bank-melasa-syariah.netlify.app/",
    github: "https://github.com/fathirizkiansyah8-lgtm/lpss.git",
    title: {
      id: "Bank Melasa Syariah",
      en: "Bank Melasa Syariah",
    },
    desc: {
      id: "Website profil Bank Melasa Syariah yang menampilkan layanan, produk, dan informasi bank secara lengkap.",
      en: "A profile website for Bank Melasa Syariah showcasing the bank's services, products, and information.",
    },
    features: {
      id: [
        "Halaman profil dan sejarah bank",
        "Informasi produk & layanan perbankan syariah",
        "Tampilan responsif di semua perangkat",
      ],
      en: [
        "Bank profile and history page",
        "Islamic banking products & services information",
        "Fully responsive layout across all devices",
      ],
    },
  },
  {
    id: "Aplikasi Eventty",
    category: "mobile",
    image: "assets/images/projects/eventty.jpeg",
    tech: ["Flutter", "Supabase", "Dart",],
    github: "https://github.com/fathirizkiansyah8-lgtm/web-eventty",
    title: {
      id: "Aplikasi Eventty",
      en: "Eventty App",
    },
    desc: {
      id: "Aplikasi pencatatan event yang memudahkan pengelolaan acara secara digital.",
      en: "An event recording application that simplifies digital event management.",
    },
    features: {
      id: [
        "Jelajahi dan daftar event OSIS secara online",
        "Kelola event, peserta, dan sertifikat digital",
        "Akses kalender, pengumuman, chat, dan notifikasi event",
      ],
      en: [
        "Browse and register for student council events online",
        "Manage events, participants, and digital certificates",
        "Access event calendars, announcements, chat, and notifications",
      ],
    },
  },
];

const CERTIFICATES = [
  {
    image: "assets/images/certificates/magang-pca.png",
    title: {
      id: "Surat Keterangan Magang - PT Mitra Semeru Indonesia",
      en: "Internship Verification Letter - PT Mitra Semeru Indonesia",
    },
    issuer: "PT Mitra Semeru Indonesia",
  },
  {
    image: "assets/images/certificates/osn-Fathi.jpeg",
    title: {
      id: "Penghargaan 5 Besar OSN Tingkat Sekolah Bidang Informatika",
      en: "Top 5 Award in the School-Level National Science Olympiad (Informatics)",
    },
    issuer: "SMKN 20 Jakarta",
  },
  {
    image: "assets/images/certificates/gsi-Fathi.jpeg",
    title: {
      id: "Juara I Tim Jakarta Barat - Gala Siswa Indonesia (GSI) SMP Tingkat Kota",
      en: "First Place, West Jakarta Team - City-Level Junior High School Gala Siswa Indonesia (GSI)",
    },
    issuer: "Suku Dinas Pendidikan Wilayah II Kota Administrasi Jakarta Barat",
  },
  {
    image: "assets/images/certificates/topskor-Fathi.jpeg",
    title: {
      id: "Juara 1 Liga TopSkor U-14 Divisi 1 Musim 2021/2022",
      en: "Champion, Liga TopSkor U-14 Division 1, 2021/2022 Season",
    },
    issuer: "PT TopSkor Indonesia",
  },
];

/* icon: nama class Devicon (https://devicon.dev). Kosongkan untuk memakai inisial. */
const TECH_STACK = [
  { name: "HTML", icon: "devicon-html5-plain colored" },
  { name: "CSS", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
  { name: "PHP", icon: "devicon-php-plain colored" },
  { name: "Laravel", icon: "devicon-laravel-original colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "Flutter", icon: "devicon-flutter-plain colored" },
  { name: "Dart", icon: "devicon-dart-plain colored" },
  { name: "Kotlin", icon: "devicon-kotlin-plain colored" },
  { name: "Firebase", icon: "devicon-firebase-plain colored" },
  { name: "Android Studio", icon: "devicon-androidstudio-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "Figma", icon: "devicon-figma-plain colored" },
  { name: "VS Code", icon: "devicon-vscode-plain colored" },
  { name: "Arduino", icon: "devicon-arduino-plain colored" },
];

/* =========================================================
   2. TERJEMAHAN (ID / EN)
   ========================================================= */
const I18N = {
  id: {
    a11y: {
      skip: "Lewati ke konten utama",
      lang: "Ganti bahasa ke English",
      themeLight: "Aktifkan mode terang",
      themeDark: "Aktifkan mode gelap",
      close: "Tutup",
      menuOpen: "Buka menu",
      menuClose: "Tutup menu",
    },
    nav: {
      home: "Beranda",
      about: "Tentang",
      education: "Pendidikan",
      portfolio: "Portofolio",
      contact: "Kontak",
    },
    intro: {
      title: "Selamat Datang di Website Portfolio Saya",
      desc: "Membangun aplikasi web yang modern, andal, dan cepat dengan kode yang rapi.",
      skip: "Lewati",
    },
    hero: {
      roles: ["Web Developer", "Laravel Developer", "RPL Student"],
      desc: "Siswa kelas XII Rekayasa Perangkat Lunak di SMKN 20 Jakarta yang berfokus pada pengembangan web dengan Laravel, PHP, dan MySQL.",
      projects: "Projects",
      contact: "Kontak",
    },
    about: {
      title: "Tentang Saya",
      subtitle: "Mengubah ide menjadi pengalaman digital",
      hello: "Halo, saya",
      desc: "Saya siswa kelas XII jurusan Rekayasa Perangkat Lunak di SMKN 20 Jakarta. Pada April-Mei 2026, saya menjalani magang sebagai Technology Support Intern di PT Mitra Semeru Indonesia. Saya pernah membuat website bank syariah dan e-commerce menggunakan Laravel, serta mengembangkan aplikasi sistem poin sekolah.",
      quote: "Terus belajar, terus membangun.",
      cv: "Unduh CV",
      viewCv: "Lihat CV",
      viewProjects: "Lihat Project",
      photoAlt: "Foto Fathi Rizkiansyah",
    },
    stats: {
      projects: "Total project",
      projectsDesc: "Project yang ditampilkan di portofolio",
      certs: "Sertifikat",
      certsDesc: "Keahlian yang tervalidasi",
      exp: "Bulan magang",
      expDesc: "Technology Support Intern di PT Mitra Semeru Indonesia",
    },
    portfolio: {
      title: "Portfolio Showcase",
      desc: "Kumpulan project, sertifikat, dan teknologi yang saya pelajari. Setiap bagian adalah satu langkah dalam proses belajar saya.",
      more: "Lihat detail",
      viewCert: "Lihat sertifikat",
      empty: "Belum ada item di kategori ini.",
    },
    tabs: { projects: "Projects", certs: "Sertifikat", tech: "Tech Stack" },
    filter: { "web-dinamis": "Web Dinamis", "web-statis": "Web Statis", mobile: "Mobile" },
    education: {
      title: "Pendidikan",
      subtitle: "Perjalanan akademis saya",
    },
    contact: {
      title: "Hubungi Saya",
      subtitle:
        "Terbuka untuk kesempatan magang, kolaborasi, maupun project freelance.",
      leftTitle: "Mari terhubung",
      leftDesc:
        "Punya pertanyaan atau tawaran kerja sama? Kirimkan saya pesan dan mari kita bicara.",
      name: "Nama",
      namePh: "Nama Anda",
      email: "Email",
      emailPh: "Email Anda",
      message: "Pesan",
      messagePh: "Pesan Anda",
      send: "Kirim pesan",
      social: "Temukan saya di",
    },
    comments: {
      title: "Komentar",
      name: "Nama",
      namePh: "Masukkan nama Anda",
      message: "Pesan",
      messagePh: "Tulis pesan Anda di sini...",
      photo: "Foto profil",
      optional: "(opsional)",
      choose: "Pilih foto profil",
      max: "Ukuran maksimal 5MB",
      post: "Kirim komentar",
      empty: "Belum ada komentar. Jadilah yang pertama menulis.",
      justNow: "Baru saja",
    },
    val: {
      required: "Kolom ini wajib diisi.",
      email: "Format email belum benar, contoh: nama@email.com.",
      min: "Pesan minimal 10 karakter.",
      fileSize: "Ukuran foto melebihi 5MB. Pilih foto yang lebih kecil.",
      fileType: "File harus berupa gambar (JPG, PNG, atau WEBP).",
    },
    toast: {
      sent: "Pesan terkirim. Terima kasih sudah menghubungi saya!",
      comment: "Komentar terkirim.",
    },
    footer: { rights: "Hak cipta dilindungi.", top: "Kembali ke atas" },
    project: {
      back: "Kembali",
      crumb: "Projects",
      totalTech: "Total teknologi",
      features: "Fitur utama",
      demo: "Live Demo",
      github: "GitHub",
      techUsed: "Teknologi yang digunakan",
      featureList: "Fitur utama",
      diagrams: "Diagram Sistem",
      flowTitle: "Flowchart Alur Aplikasi",
      flowDesc: "Alur login dan penggunaan fitur berdasarkan peran pengguna.",
      erdTitle: "ERD dan Relasi Database",
      erdDesc: "Struktur tabel dan relasi berdasarkan migration Laravel terbaru.",
      notFoundTitle: "Project tidak ditemukan",
      notFoundDesc: "Tautan project ini tidak valid atau sudah dihapus.",
      backToPortfolio: "Kembali ke portofolio",
    },
  },
  en: {
    a11y: {
      skip: "Skip to main content",
      lang: "Switch language to Bahasa Indonesia",
      themeLight: "Switch to light mode",
      themeDark: "Switch to dark mode",
      close: "Close",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
    nav: {
      home: "Home",
      about: "About",
      education: "Education",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    intro: {
      title: "Welcome to my Portfolio Website",
      desc: "Building modern, reliable, and fast web applications with clean, solid code.",
      skip: "Skip",
    },
    hero: {
      roles: ["Web Developer", "Laravel Developer", "RPL Student"],
      desc: "A 12th-grade Software Engineering student at SMKN 20 Jakarta, focused on web development with Laravel, PHP, and MySQL.",
      projects: "Projects",
      contact: "Contact",
    },
    about: {
      title: "About Me",
      subtitle: "Turning ideas into digital experiences",
      hello: "Hello, I'm",
      desc: "I'm a 12th-grade Software Engineering student at SMKN 20 Jakarta. From April to May 2026, I interned as a Technology Support Intern at PT Mitra Semeru Indonesia. I have built a sharia bank website and an e-commerce website with Laravel, and developed a school points system app.",
      quote: "Keep learning, keep building.",
      cv: "Download CV",
      viewCv: "View CV",
      viewProjects: "View Projects",
      photoAlt: "Fathi Rizkiansyah's photo",
    },
    stats: {
      projects: "Total projects",
      projectsDesc: "Projects displayed in this portfolio",
      certs: "Certificates",
      certsDesc: "Validated professional skills",
      exp: "Internship months",
      expDesc: "Technology Support Intern at PT Mitra Semeru Indonesia",
    },
    portfolio: {
      title: "Portfolio Showcase",
      desc: "A collection of projects, certificates, and the technologies I've learned. Each section is a step in my learning path.",
      more: "View details",
      viewCert: "View certificate",
      empty: "No items in this category yet.",
    },
    tabs: { projects: "Projects", certs: "Certificates", tech: "Tech Stack" },
    filter: { "web-dinamis": "Dynamic Web", "web-statis": "Static Web", mobile: "Mobile" },
    education: {
      title: "Education",
      subtitle: "My academic journey",
    },
    contact: {
      title: "Contact Me",
      subtitle: "Open to internships, collaborations, and freelance projects.",
      leftTitle: "Let's connect",
      leftDesc:
        "Have a question or a project in mind? Send me a message and let's talk.",
      name: "Name",
      namePh: "Your name",
      email: "Email",
      emailPh: "Your email",
      message: "Message",
      messagePh: "Your message",
      send: "Send message",
      social: "Find me on",
    },
    comments: {
      title: "Comments",
      name: "Name",
      namePh: "Enter your name",
      message: "Message",
      messagePh: "Write your message here...",
      photo: "Profile photo",
      optional: "(optional)",
      choose: "Choose profile photo",
      max: "Max file size: 5MB",
      post: "Post comment",
      empty: "No comments yet. Be the first to write one.",
      justNow: "Just now",
    },
    val: {
      required: "This field is required.",
      email: "Enter a valid email, e.g. name@email.com.",
      min: "Message must be at least 10 characters.",
      fileSize: "Photo is larger than 5MB. Choose a smaller one.",
      fileType: "File must be an image (JPG, PNG, or WEBP).",
    },
    toast: {
      sent: "Message sent. Thanks for reaching out!",
      comment: "Comment posted.",
    },
    footer: { rights: "All rights reserved.", top: "Back to top" },
    project: {
      back: "Back",
      crumb: "Projects",
      totalTech: "Technologies",
      features: "Key features",
      demo: "Live Demo",
      github: "GitHub",
      techUsed: "Technologies used",
      featureList: "Key features",
      diagrams: "System Diagrams",
      flowTitle: "Application Flowchart",
      flowDesc: "Login and feature workflows by user role.",
      erdTitle: "ERD and Database Relationships",
      erdDesc: "Tables and relationships based on the latest Laravel migrations.",
      notFoundTitle: "Project not found",
      notFoundDesc: "This project link is invalid or has been removed.",
      backToPortfolio: "Back to portfolio",
    },
  },
};

/* =========================================================
   3. UTILITAS
   ========================================================= */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const PAGE = document.body.dataset.page;

const store = {
  get(key, session = false) {
    try {
      return (session ? sessionStorage : localStorage).getItem(key);
    } catch {
      return null;
    }
  },
  set(key, val, session = false) {
    try {
      (session ? sessionStorage : localStorage).setItem(key, val);
    } catch {
      /*storage tidak tersedia*/
    }
  },
};

let lang = store.get("lang") == "en" ? "en" : "id";

// ambil teks terjemah, contoh: this('nav.home')
const t = (key) =>
  key.split(".").reduce((obj, k) => (obj ? obj[k] : undefined), I18N[lang]) ??
  key;
// ambil nilai sesuai bahasa dari objek {id, en}
const L = (obj) => (obj && (obj[lang] ?? obj.id)) || "";

const escapeHTML = (str) =>
  String(str).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );

/* Ikon SVG (garis, gaya Lucide) disuntikkan sekali sebagai sprite */
const ICONS = {
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  award:
    '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
  layers:
    '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  message:
    '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  "arrow-left": '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  "arrow-up-right": '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  external:
    '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  github:
    '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  linkedin:
    '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  instagram:
    '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>',
  globe:
    '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  download:
    '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><path d="M12 15V3"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  sparkles:
    '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>',
  image:
    '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  terminal: '<polyline points="4 17 10 11 4 5"/><path d="M12 19h8"/>',
  cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  server:
    '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/>',
  cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
  zoom: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6M8 11h6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',
  moon: '<path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>',
};

function injectIconSprite() {
  const symbols = Object.entries(ICONS)
    .map(
      ([name, paths]) =>
        `<symbol id="i-${name}" viewBox="0 0 24 24">${paths}</symbol>`,
    )
    .join("");
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<svg width="0" height="0" style="position:absolute" aria-hidden="true">${symbols}</svg>`,
  );
}
const ic = (name, cls = "") =>
  `<svg class="icon ${cls}" aria-hidden="true"><use href="#i-${name}"></use></svg>`;

/* Toast notifikasi */
let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-show"), 3200);
}

/* =========================================================
   4. BAHASA
   ========================================================= */
const langListeners = [];
const onLangChange = (fn) => langListeners.push(fn);

function applyLanguage() {
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  $$("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  $$("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });
  $$("[data-i18n-alt]").forEach((el) => {
    el.alt = t(el.dataset.i18nAlt);
  });
  $$(".lang-toggle [data-lang]").forEach((el) =>
    el.classList.toggle("is-active", el.dataset.lang === lang),
  );
  updateThemeToggleLabel();
  langListeners.forEach((fn) => fn());
}

function initLanguage() {
  $("#langToggle")?.addEventListener("click", () => {
    lang = lang === "id" ? "en" : "id";
    store.set("lang", lang);
    applyLanguage();
  });
}

function updateThemeToggleLabel() {
  const button = $("#themeToggle");
  if (!button) return;
  const label = t(
    document.documentElement.dataset.theme === "light"
      ? "a11y.themeDark"
      : "a11y.themeLight",
  );
  button.setAttribute("aria-label", label);
  button.setAttribute(
    "aria-pressed",
    String(document.documentElement.dataset.theme === "light"),
  );
  button.title = label;
}

function applyTheme(theme, persist = false) {
  const nextTheme = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  const themeColor = $('meta[name="theme-color"]');
  if (themeColor) {
    themeColor.content = nextTheme === "light" ? "#f4f7fc" : "#050a14";
  }
  if (persist) store.set("portfolio-theme", nextTheme);
  updateThemeToggleLabel();
}

function initTheme() {
  applyTheme(store.get("portfolio-theme") === "light" ? "light" : "dark");
  $("#themeToggle")?.addEventListener("click", () => {
    applyTheme(
      document.documentElement.dataset.theme === "light" ? "dark" : "light",
      true,
    );
  });
}

/* =========================================================
   5. NAVBAR — sticky, hamburger, menu aktif
   ========================================================= */
function initNavbar() {
  const navbar = $("#navbar");
  const burger = $("#navBurger");
  const menu = $("#navMenu");

  const onScroll = () =>
    navbar.classList.toggle("is-scrolled", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const setMenu = (open) => {
    menu.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute(
      "aria-label",
      t(open ? "a11y.menuClose" : "a11y.menuOpen"),
    );
  };
  burger.addEventListener("click", () =>
    setMenu(!menu.classList.contains("is-open")),
  );
  $$(".navbar__link", menu).forEach((link) =>
    link.addEventListener("click", () => setMenu(false)),
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
  });
  document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target)) setMenu(false);
  });

  // Indikator menu aktif (khusus halaman utama)
  if (PAGE !== "home") return;
  const links = $$(".navbar__link[data-section]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => {
          const active = l.dataset.section === entry.target.id;
          l.classList.toggle("is-active", active);
          if (active) l.setAttribute("aria-current", "true");
          else l.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  $$("main section[id]").forEach((s) => observer.observe(s));
}

/* =========================================================
   6. INTRO / WELCOME SCREEN (sekali per sesi)
   ========================================================= */
function initIntro(onDone) {
  const intro = $("#intro");
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  if (!intro || (!isMobile && store.get("introSeen", true))) {
    if (intro) intro.hidden = true; // pastikan tersembunyi saat refresh di sesi yang sama
    onDone();
    return;
  }

  let closed = false;
  const close = () => {
    if (closed) return;
    closed = true;
    intro.classList.add("is-hidden");
    document.body.classList.remove("is-locked");
    document.removeEventListener("keydown", onKey);
    setTimeout(() => {
      intro.hidden = true;
    }, 650);
    onDone();
  };
  const onKey = (e) => {
    if (e.key === "Escape" || e.key === "Enter") close();
  };

  // Pasang timer penutup PALING AWAL, supaya intro tetap tertutup walau ada error setelahnya
  setTimeout(close, reducedMotion ? 1200 : isMobile ? 5000 : 3300);

  intro.hidden = false;
  intro.removeAttribute("aria-hidden");
  document.body.classList.add("is-locked");
  store.set("introSeen", "1", true);
  $("#introSkip").addEventListener("click", close);
  document.addEventListener("keydown", onKey);
  $("#introSkip").focus({ preventScroll: true });
}

/* =========================================================
   7. EFEK MENGETIK DI HERO
   ========================================================= */
function initTyping() {
  const el = $("#typingText");
  if (!el) return;
  let timer;

  const start = () => {
    clearTimeout(timer);
    const roles = t("hero.roles");
    if (reducedMotion) {
      el.textContent = roles[0];
      return;
    }

    let roleIdx = 0,
      charIdx = 0,
      deleting = false;
    const tick = () => {
      const word = roles[roleIdx];
      charIdx += deleting ? -1 : 1;
      el.textContent = word.slice(0, charIdx);

      let delay = deleting ? 45 : 95;
      if (!deleting && charIdx === word.length) { delay = 1800; deleting = true; }
      else if (deleting && charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; delay = 350; }
      timer = setTimeout(tick, delay);
    };
    el.textContent = '';
    tick();
  };

  start();
  onLangChange(start);
}

/* =========================================================
   8. ANIMASI — AOS (scroll) & particles.js (background)
   ========================================================= */
const hasAOS = () => typeof window.AOS !== "undefined";

function initAOS() {
  if (!hasAOS()) {
    // CDN gagal dimuat: tampilkan semua elemen agar tidak ada yang tersembunyi
    $$("[data-aos]").forEach((el) => el.classList.add("aos-animate"));
    return;
  }
  AOS.init({
    duration: 750,
    easing: "ease-out-cubic",
    once: true, // animasi hanya sekali per elemen
    offset: 60,
    disable: reducedMotion,
  });
}

/** Panggil setelah konten dirender ulang (filter, ganti bahasa, dsb.) */
function refreshAOS() {
  if (hasAOS()) AOS.refreshHard();
  else $$("[data-aos]").forEach((el) => el.classList.add("aos-animate"));
}

function initParticles() {
  if (
    reducedMotion ||
    typeof window.particlesJS === "undefined" ||
    !$("#particles-js")
  )
    return;
  const isMobile = window.innerWidth < 768;

  particlesJS("particles-js", {
    particles: {
      number: {
        value: isMobile ? 35 : 80,
        density: { enable: true, value_area: 900 },
      },
      color: { value: ["#60a5fa", "#38bdf8", "#93c5fd"] },
      shape: { type: "circle" },
      opacity: {
        value: 0.45,
        random: true,
        anim: { enable: true, speed: 0.6, opacity_min: 0.1, sync: false },
      },
      size: { value: 2.6, random: true },
      line_linked: {
        enable: true,
        distance: 140,
        color: "#3b82f6",
        opacity: 0.22,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: !isMobile, mode: "grab" },
        onclick: { enable: false },
        resize: true,
      },
      modes: { grab: { distance: 170, line_linked: { opacity: 0.55 } } },
    },
    retina_detect: true,
  });

  // Hemat baterai: hentikan animasi saat tab tidak aktif
  document.addEventListener("visibilitychange", () => {
    const p = window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS;
    if (!p) return;
    if (document.hidden) cancelAnimationFrame(p.fn.drawAnimFrame);
    else p.fn.vendors.draw();
  });
}

/* =========================================================
   9. STATISTIK — angka naik saat terlihat
   ========================================================= */
function initCounters() {
  const values = {
    projects: PROJECTS.length,
    certs: CERTIFICATES.length,
    months: PROFILE.internshipMonths,
  };
  const counters = $$("[data-count]");
  if (!counters.length) return;

  const animate = (el) => {
    const target = values[el.dataset.count] ?? 0;
    if (reducedMotion) {
      el.textContent = target;
      return;
    }
    const duration = 1200;
    const startTime = performance.now();
    const step = (now) => {
      const p = Math.min((now - startTime) / duration, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animate(e.target);
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.6 },
  );
  counters.forEach((c) => obs.observe(c));
}

/* =========================================================
   10. PENDIDIKAN — render kartu timeline
   ========================================================= */
function renderEducation() {
  const list = $("#educationList");
  if (!list) return;
  list.innerHTML = EDUCATION.map(
    (edu, i) => `
    <article class="edu-card" data-aos="fade-up" data-aos-delay="${i * 100}">
      <span class="edu-card__icon">${ic(edu.icon)}</span>
      <div class="edu-card__body">
        <span class="edu-card__level">${escapeHTML(L(edu.level))}</span>
        <h3 class="edu-card__school">${escapeHTML(L(edu.school))}</h3>
        <span class="edu-card__year">${escapeHTML(edu.year)}</span>
      </div>
    </article>`,
  ).join("");
  refreshAOS();
}

/* =========================================================
   11. PORTFOLIO — tab, filter, render kartu
   ========================================================= */
let activeFilter = "web-dinamis";

function renderProjects() {
  const grid = $("#projectGrid");
  if (!grid) return;
  const items = PROJECTS.filter((p) => p.category === activeFilter);

  grid.innerHTML = items.length
    ? items
        .map(
          (p, i) => `
      <a class="project-card" data-aos="fade-up" data-aos-delay="${i * 80}" href="project.html?id=${encodeURIComponent(p.id)}">
        <div class="project-card__media">
          <img src="${p.image}" alt="${escapeHTML(L(p.title))}" loading="lazy" width="1200" height="900">
        </div>
        <div class="project-card__overlay">
          <h3 class="project-card__title">${escapeHTML(L(p.title))}</h3>
          <ul class="project-card__tags">${p.tech
            .slice(0, 3)
            .map((tch) => `<li>${escapeHTML(tch)}</li>`)
            .join("")}</ul>
          <span class="project-card__more">${t("portfolio.more")} ${ic("arrow-right")}</span>
        </div>
      </a>`,
        )
        .join("")
    : `<p class="empty">${t("portfolio.empty")}</p>`;

  refreshAOS();
}

function renderCertificates() {
  const grid = $("#certGrid");
  if (!grid) return;
  grid.innerHTML = CERTIFICATES.length
    ? CERTIFICATES.map(
        (c, i) => `
      <button class="cert-card" data-aos="zoom-in" data-aos-delay="${i * 80}" type="button" data-cert="${i}"
        aria-label="${t("portfolio.viewCert")}: ${escapeHTML(L(c.title))}">
        <img src="${c.image}" alt="" loading="lazy" width="600" height="820">
        <span class="cert-card__overlay">${ic("zoom")}${t("portfolio.viewCert")}</span>
      </button>`,
      ).join("")
    : `<p class="empty">${t("portfolio.empty")}</p>`;
  refreshAOS();
}

function renderTechStack() {
  const grid = $("#techGrid");
  if (!grid || grid.childElementCount) return; // tidak perlu dirender ulang saat ganti bahasa
  grid.innerHTML = TECH_STACK.map(
    (tech, i) => `
    <div class="tech-card" data-aos="zoom-in" data-aos-delay="${(i % 6) * 50}">
      ${
        tech.icon
          ? `<i class="${tech.icon}" aria-hidden="true"></i>`
          : `<span class="tech-card__fallback" aria-hidden="true">${escapeHTML(tech.name.slice(0, 2))}</span>`
      }
      <span>${escapeHTML(tech.name)}</span>
    </div>`,
  ).join("");
  refreshAOS();
}

function initPortfolio() {
  const tabs = $$(".tab");
  if (!tabs.length) return;

  const selectTab = (tab, focus = false) => {
    tabs.forEach((tb) => {
      const active = tb === tab;
      tb.classList.toggle("is-active", active);
      tb.setAttribute("aria-selected", String(active));
      tb.tabIndex = active ? 0 : -1;
      $(`#${tb.getAttribute("aria-controls")}`).hidden = !active;
    });
    if (focus) tab.focus();
    refreshAOS();
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => selectTab(tab));
    // Navigasi keyboard: panah kiri/kanan
    tab.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const next =
        (i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
      selectTab(tabs[next], true);
    });
  });

  $$(".filter__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter;
      $$(".filter__btn").forEach((b) => {
        b.classList.toggle("is-active", b === btn);
        b.setAttribute("aria-pressed", String(b === btn));
      });
      renderProjects();
    });
  });

  // Set filter pertama sebagai aktif secara visual
  const firstFilterBtn = $(".filter__btn[data-filter='web-dinamis']");
  if (firstFilterBtn) {
    $$(".filter__btn").forEach((b) => {
      b.classList.toggle("is-active", b === firstFilterBtn);
      b.setAttribute("aria-pressed", String(b === firstFilterBtn));
    });
  }

  renderProjects();
  renderCertificates();
  renderTechStack();
  onLangChange(() => {
    renderProjects();
    renderCertificates();
  });
}

/* =========================================================
   11. MODAL SERTIFIKAT
   ========================================================= */
function initCertModal() {
  const modal = $("#certModal");
  const grid = $("#certGrid");
  if (!modal || !grid) return;
  let lastFocus = null;

  const open = (index) => {
    const cert = CERTIFICATES[index];
    lastFocus = document.activeElement;
    $("#certModalImg").src = cert.image;
    $("#certModalImg").alt = L(cert.title);
    $("#certModalCap").textContent = `${L(cert.title)} | ${cert.issuer}`;
    modal.hidden = false;
    document.body.classList.add("is-locked");
    $(".modal__close", modal).focus();
  };
  const close = () => {
    modal.hidden = true;
    document.body.classList.remove("is-locked");
    lastFocus?.focus();
  };

  grid.addEventListener("click", (e) => {
    const card = e.target.closest("[data-cert]");
    if (card) open(Number(card.dataset.cert));
  });
  $$("[data-close]", modal).forEach((el) =>
    el.addEventListener("click", close),
  );
  document.addEventListener("keydown", (e) => {
    if (modal.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "Tab") {
      e.preventDefault();
      $(".modal__close", modal).focus();
    } // jaga fokus di dalam modal
  });
}

/* =========================================================
   12. FORM — validasi client-side (tampilan saja, tanpa backend)
   ========================================================= */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function setError(input, message) {
  const field = input.closest(".field");
  field.classList.toggle("has-error", Boolean(message));
  $(".field__error", field).textContent = message || "";
  input.setAttribute("aria-invalid", message ? "true" : "false");
}

function validateText(input, { email = false, min = 0 } = {}) {
  const val = input.value.trim();
  let msg = "";
  if (!val) msg = t("val.required");
  else if (email && !EMAIL_RE.test(val)) msg = t("val.email");
  else if (min && val.length < min) msg = t("val.min");
  setError(input, msg);
  return !msg;
}

function clearErrors(form) {
  $$(".field", form).forEach((f) => f.classList.remove("has-error"));
  $$(".field__error", form).forEach((e) => {
    e.textContent = "";
  });
  $$("[aria-invalid]", form).forEach((i) =>
    i.setAttribute("aria-invalid", "false"),
  );
}

function initContactForm() {
  const form = $("#contactForm");
  if (!form) return;
  const name = $("#cName"),
    email = $("#cEmail"),
    msg = $("#cMsg");

  // Validasi ulang saat user memperbaiki isian
  name.addEventListener(
    "input",
    () => form.dataset.tried && validateText(name),
  );
  email.addEventListener(
    "input",
    () => form.dataset.tried && validateText(email, { email: true }),
  );
  msg.addEventListener(
    "input",
    () => form.dataset.tried && validateText(msg, { min: 10 }),
  );

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.dataset.tried = "1";
    const ok = [
      validateText(name),
      validateText(email, { email: true }),
      validateText(msg, { min: 10 }),
    ];
    if (ok.includes(false)) {
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }

    // TODO: hubungkan ke layanan seperti Formspree / EmailJS jika ingin benar-benar terkirim
    showToast(t("toast.sent"));
    form.reset();
    delete form.dataset.tried;
    clearErrors(form);
  });

  onLangChange(() => clearErrors(form));
}

function initCommentForm() {
  const form = $("#commentForm");
  if (!form) return;
  const name = $("#cmName"),
    msg = $("#cmMsg"),
    photo = $("#cmPhoto"),
    fileHint = $("#cmFileName");
  const list = $("#commentList");
  const comments = []; // hanya di memori, hilang saat halaman di-refresh

  const validatePhoto = () => {
    const file = photo.files[0];
    let message = "";
    if (file && !file.type.startsWith("image/")) message = t("val.fileType");
    else if (file && file.size > 5 * 1024 * 1024) message = t("val.fileSize");
    setError(photo, message);
    return !message;
  };

  const renderComments = () => {
    list.innerHTML = comments.length
      ? comments
          .map(
            (c) => `
        <li class="comment">
          ${
            c.photo
              ? `<img class="comment__avatar" src="${c.photo}" alt="" width="42" height="42">`
              : `<span class="comment__avatar" aria-hidden="true">${escapeHTML(c.name.charAt(0).toUpperCase())}</span>`
          }
          <div>
            <div class="comment__head"><span class="comment__name">${escapeHTML(c.name)}</span><span class="comment__time">${t("comments.justNow")}</span></div>
            <p class="comment__text">${escapeHTML(c.message)}</p>
          </div>
        </li>`,
          )
          .join("")
      : `<li class="comment-empty">${t("comments.empty")}</li>`;
  };

  photo.addEventListener("change", () => {
    if (validatePhoto() && photo.files[0])
      fileHint.textContent = photo.files[0].name;
    else fileHint.textContent = t("comments.max");
  });
  name.addEventListener(
    "input",
    () => form.dataset.tried && validateText(name),
  );
  msg.addEventListener("input", () => form.dataset.tried && validateText(msg));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.dataset.tried = "1";
    const ok = [validateText(name), validateText(msg), validatePhoto()];
    if (ok.includes(false)) {
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }

    const file = photo.files[0];
    comments.unshift({
      name: name.value.trim(),
      message: msg.value.trim(),
      photo: file ? URL.createObjectURL(file) : "",
    });
    renderComments();
    showToast(t("toast.comment"));
    form.reset();
    delete form.dataset.tried;
    fileHint.textContent = t("comments.max");
    clearErrors(form);
  });

  renderComments();
  onLangChange(() => {
    clearErrors(form);
    renderComments();
    fileHint.textContent = photo.files[0]?.name || t("comments.max");
  });
}

/* Link sosial media di bagian kontak */
function renderSocial() {
  const wrap = $("#socialList");
  if (!wrap) return;
  wrap.innerHTML = PROFILE.social
    .map(
      (s) => `
    <a class="social__link" href="${s.url}" ${s.url.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>
      ${ic(s.icon)}<span>${escapeHTML(s.name)}</span>
    </a>`,
    )
    .join("");
}

/* =========================================================
   13. HALAMAN DETAIL PROJECT (project.html?id=...)
   ========================================================= */
function renderProjectPage() {
  const root = $("#projectDetail");
  if (!root) return;
  const id = new URLSearchParams(location.search).get("id");
  const p = PROJECTS.find((item) => item.id === id);

  if (!p) {
    document.title = `${t("project.notFoundTitle")} | ${PROFILE.name}`;
    root.innerHTML = `
      <div class="not-found">
        <h1>${t("project.notFoundTitle")}</h1>
        <p>${t("project.notFoundDesc")}</p>
        <a class="btn btn--primary" href="index.html#portfolio">${ic("arrow-left")}${t("project.backToPortfolio")}</a>
      </div>`;
    return;
  }

  const title = escapeHTML(L(p.title));
  const features = L(p.features) || [];
  document.title = `${L(p.title)} | ${PROFILE.name}`;

  root.innerHTML = `
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a class="btn-back" href="index.html#portfolio">${ic("arrow-left")}<span>${t("project.back")}</span></a>
      <ol>
        <li><a href="index.html#portfolio">${t("project.crumb")}</a></li>
        <li aria-current="page">${title}</li>
      </ol>
    </nav>

    <div class="detail-grid">
      <div class="detail-info">
        <h1 class="detail-title">${title}</h1>
        <span class="detail-line" aria-hidden="true"></span>
        <p class="detail-desc">${escapeHTML(L(p.desc))}</p>

        <div class="detail-stats">
          <div class="mini-stat">
            <span class="mini-stat__icon">${ic("code")}</span>
            <div><strong>${p.tech.length}</strong><span>${t("project.totalTech")}</span></div>
          </div>
          <div class="mini-stat">
            <span class="mini-stat__icon">${ic("layers")}</span>
            <div><strong>${features.length}</strong><span>${t("project.features")}</span></div>
          </div>
        </div>

        <div class="detail-actions">
          ${p.demo ? `<a class="btn btn--primary" href="${p.demo}" target="_blank" rel="noopener noreferrer">${ic("external")}${t("project.demo")}</a>` : ""}
          ${p.github ? `<a class="btn btn--outline" href="${p.github}" target="_blank" rel="noopener noreferrer">${ic("github")}${t("project.github")}</a>` : ""}
        </div>

        <section class="detail-block">
          <h2>${ic("code")}${t("project.techUsed")}</h2>
          <ul class="tag-list">${p.tech.map((tch) => `<li class="badge">${escapeHTML(tch)}</li>`).join("")}</ul>
        </section>

        <section class="detail-block">
          <h2>${ic("sparkles")}${t("project.featureList")}</h2>
          <ul class="feature-list">${features.map((f) => `<li>${ic("check")}<span>${escapeHTML(f)}</span></li>`).join("")}</ul>
        </section>
      </div>

      <div class="detail-media">
        <img src="${p.image}" alt="${title}" width="1200" height="900">
      </div>
    </div>`;

  refreshAOS();
}

/* =========================================================
   14. INIT
   ========================================================= */
/** Jalankan modul dengan aman: kalau satu gagal, sisanya tetap jalan */
function safe(fn, ...args) {
  try {
    fn(...args);
  } catch (err) {
    console.error(`[portfolio] ${fn.name} gagal:`, err);
  }
}

function start() {
  safe(injectIconSprite);

  $$(".js-year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
  $$(".js-website").forEach((el) => {
    el.textContent = PROFILE.website;
  });
  $$(".js-cv").forEach((el) => {
    el.href = PROFILE.cv;
  });

  safe(initLanguage);
  safe(initTheme);
  safe(initNavbar);
  safe(initParticles);

  if (PAGE === "home") {
    safe(renderEducation);
    safe(initPortfolio);
    safe(initCertModal);
    safe(initContactForm);
    safe(initCommentForm);
    safe(renderSocial);
    safe(applyLanguage);
    // Animasi scroll & mengetik baru dimulai setelah intro selesai
    safe(initIntro, () => {
      safe(initAOS);
      safe(initTyping);
      safe(initCounters);
    });
  } else {
    safe(renderProjectPage);
    onLangChange(renderProjectPage);
    safe(applyLanguage);
    safe(initAOS);
  }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
else start();