// =====================================================================================
// SEMUA TEKS DI FILE INI ADALAH KARANGAN / PLACEHOLDER.
// Silakan diedit bebas sesuai data asli HMIF & Prodi Informatika Universitas Jambi. -Aziz
// =====================================================================================

export const siteInfo = {
  shortName: "HMIF",
  fullName: "Himpunan Mahasiswa Informatika",
  university: "Universitas Jambi",
  universityShort: "UNJA",
  tagline: "Merangkai Ide, Membangun Solusi",
  email: "hmif@unja.ac.id",
  instagram: "@hmifunja",
  address: "Fakultas Sains dan Teknologi, Universitas Jambi, Kampus Mendalo, Jambi",
};

export const navLinks = [
  { to: "/", label: "Beranda" },
  { to: "/tentang", label: "Tentang HMIF" },
  { to: "/program-kerja", label: "Program Kerja" },
  { to: "/struktur-organisasi", label: "Struktur" },
  { to: "/iforia", label: "IFORIA" },
  { to: "/galeri", label: "Galeri" },
];

// Daftar foto latar belakang yang berganti otomatis.
// Ganti file di /public/backgrounds/ dengan foto asli (nama file boleh sama / diubah di sini).
export const backgroundImages = [
  "/backgrounds/foto-1.jpg",
  "/backgrounds/foto-2.jpg",
  "/backgrounds/foto-3.jpg",
  "/backgrounds/foto-4.jpg",
];

export const aboutHmif = {
  image: "/backgrounds/foto-3.jpg",
  intro:
    "Himpunan Mahasiswa Informatika (HMIF) Universitas Jambi adalah organisasi kemahasiswaan tingkat program studi yang menaungi seluruh mahasiswa Informatika. Terbentuk seiring berdirinya Program Studi Informatika, HMIF hadir sebagai rumah bagi mahasiswa untuk berkarya, berorganisasi, dan bertumbuh bersama mulai dari nol, menuju satu ekosistem mahasiswa Informatika yang solid.",
  sejarah:
    "HMIF UNJA lahir dari semangat sekelompok mahasiswa angkatan pertama Program Studi Informatika yang ingin memiliki wadah resmi untuk menyalurkan aspirasi, minat, dan bakat. Meski masih muda, HMIF dibangun dengan visi jangka panjang: menjadi fondasi budaya organisasi yang akan diwariskan ke angkatan-angkatan berikutnya.",
  visi:
    "Menjadi himpunan mahasiswa yang adaptif, kolaboratif, dan berdampak. Melahirkan lulusan Informatika UNJA yang unggul secara akademik, matang secara organisasi, dan siap berkontribusi bagi masyarakat serta industri teknologi.",
  misi: [
    "Membangun ekosistem belajar dan berbagi ilmu antar mahasiswa Informatika.",
    "Memfasilitasi pengembangan minat, bakat, dan potensi non-akademik mahasiswa.",
    "Menjalin sinergi dengan program studi, fakultas, dan komunitas teknologi eksternal.",
    "Menanamkan budaya organisasi yang sehat dan berkelanjutan dari angkatan ke angkatan.",
    "Menjadi jembatan aspirasi antara mahasiswa dan Program Studi Informatika.",
  ],
  nilai: [
    { title: "Kolaboratif", desc: "Setiap program dikerjakan bersama, lintas angkatan dan lintas minat." },
    { title: "Adaptif", desc: "Terbuka terhadap perkembangan teknologi dan cara kerja baru." },
    { title: "Berintegritas", desc: "Amanah dalam setiap tanggung jawab yang diemban." },
    { title: "Berkelanjutan", desc: "Membangun tradisi baik yang diwariskan antar generasi mahasiswa." },
  ],
};

export const prodiInfo = {
  logo: "/logo-prodi.png",
  intro:
    "Program Studi Informatika Universitas Jambi hadir untuk menjawab kebutuhan sumber daya manusia di bidang teknologi informasi yang terus berkembang. Sebagai salah satu program studi termuda di lingkungan Fakultas Sains dan Teknologi, Informatika UNJA dirancang dengan kurikulum yang relevan dengan kebutuhan industri masa kini. Mulai dari rekayasa perangkat lunak, kecerdasan buatan, hingga infrastruktur jaringan dan data.",
  fokus: [
    { title: "Rekayasa Perangkat Lunak", desc: "Perancangan dan pengembangan aplikasi berbasis kebutuhan nyata." },
    { title: "Kecerdasan Buatan & Data", desc: "Pembelajaran mesin, analitik data, dan pengolahan data skala besar." },
    { title: "Jaringan & Sistem Komputer", desc: "Infrastruktur, keamanan siber, dan sistem terdistribusi." },
    { title: "Interaksi Manusia & Komputer", desc: "Perancangan pengalaman pengguna yang berpusat pada manusia." },
  ],
};

export const programKerja = [
  {
    kode: "PSDA",
    nama: "Pengembangan Sumber Daya Anggota",
    deskripsi: "Menyiapkan mahasiswa Informatika yang siap berorganisasi dan berkembang secara personal.",
    program: [
      "Pelatihan kepemimpinan dasar untuk anggota baru",
      "Mentoring akademik lintas angkatan",
      "Forum diskusi pengembangan diri",
      "Membikin program kerja internal untuk anggota HMIF",
    ],
  },
  {
    kode: "MIT",
    nama: "Media Informasi & Teknologi",
    deskripsi: "Mendorong budaya belajar teknis dan eksplorasi teknologi di luar kelas.",
    program: [
      "Maintenance & pengembangan website HMIF",
      "Workshop pemrograman & teknologi terkini",
      "Kelompok belajar kompetitif (competitive programming, hackathon)",
      "Kolaborasi proyek riset mahasiswa",
    ],
  },
  {
    kode: "HUMAS",
    nama: "Hubungan Masyarakat",
    deskripsi: "Menjaga citra HMIF dan menjadi kanal informasi resmi ke seluruh mahasiswa.",
    program: [
      "Memperkenalkan HMIF ke mahasiswa baru & angkatan lama",
      "Pengelolaan media sosial dan publikasi resmi",
      "Berkolaborasi bersama MIT untuk membuat konten kreatif",
      "Delegasi dan Dokumentasi setiap kegiatan himpunan",
      "Jalinan kerja sama dengan himpunan lain & komunitas eksternal",
    ],
  },
  {
    kode: "DANUS",
    nama: "Dana dan Usaha",
    deskripsi: "Menyalurkan potensi mahasiswa di luar bidang akademik.",
    program: [
      "Turnamen olahraga & e-sport antar angkatan",
      "Malam apresiasi seni dan kreativitas mahasiswa",
      "Klub-klub minat mahasiswa Informatika",
    ],
  },
];

// Tambahkan `foto: "/team/nama-file.jpg"` jika sudah punya foto asli.
// Selama `foto` kosong (null), akan ditampilkan ikon placeholder.
export const strukturInti = [
  { nama: "Nicky Pradithiya Dinata", jabatan: "Ketua Himpunan", angkatan: "2024", foto: null },
  { nama: "Fabianto Dwitama", jabatan: "Wakil Ketua Himpunan", angkatan: "2024", foto: null },
  { nama: "Artika Sari Kosasih", jabatan: "Sekretaris Himpunan", angkatan: "2024", foto: null },
  { nama: "Ela Febriani", jabatan: "Bendahara Himpunan", angkatan: "2024", foto: null },
];

export const strukturBidang = [
  { bidang: "PSDA", koordinator: "Rizky Ramadhan Alfarizi" },
  { bidang: "MIT", koordinator: "Khoirul Faza Perdana" },
  { bidang: "HUMAS", koordinator: "Maulidya Nazlita Az-Zahara" },
  { bidang: "DANUS", koordinator: "Fiqri Arrijal" },
];

// Data lengkap divisi beserta anggotanya untuk halaman Struktur.
// Tambahkan foto: "/team/nama-file.jpg" untuk tiap anggota jika sudah tersedia.
export const divisiOrganisasi = [
  {
    id: "bph",
    nama: "Badan Pengurus Harian",
    singkatan: "BPH",
    deskripsi: "Pengurus inti yang memimpin dan mengoordinasikan seluruh kegiatan HMIF.",
    anggota: [
      { nama: "Nicky Pradithiya Dinata", jabatan: "Ketua Himpunan", foto: "/team/nicky.jpeg" },
      { nama: "Fabianto Dwitama", jabatan: "Wakil Ketua Himpunan", foto: null },
      { nama: "Artika Sari Kosasih", jabatan: "Sekretaris Himpunan", foto: null },
      { nama: "Ela Febriani", jabatan: "Bendahara Himpunan", foto: null },
    ],
  },
  {
    id: "danus",
    nama: "Dana dan Usaha",
    singkatan: "DANUS",
    deskripsi: "Mengelola sumber pendanaan dan kegiatan usaha untuk mendukung program kerja HMIF.",
    anggota: [
      { nama: "Fiqri Arrijal", jabatan: "Ketua Divisi", foto: "/team/piqri.jpeg" },
      { nama: "Novindra Augustiar", jabatan: "Wakil Ketua Divisi", foto: null },
      { nama: "Nandhita Novelie Mykella", jabatan: "Sekretaris Divisi", foto: null },
      { nama: "Nagita Syahira Putri", jabatan: "Bendahara Divisi", foto: null },
      { nama: "Johanes Sinalsal Sinulingga", jabatan: "Ketua Bidang Kewirausahaan", foto: null },
      { nama: "Muhammad Ariq Milzam Alfarabi", jabatan: "Ketua Bidang Relasi dan Marketing", foto: null },
      { nama: "Rafli Rahmat", jabatan: "Anggota", foto: null },
      { nama: "Alfredo Nobel Tambunan", jabatan: "Anggota", foto: null },
      { nama: "Sirr Hanif Al-Mufarrid", jabatan: "Anggota", foto: null },
      { nama: "Farel Herdiyan", jabatan: "Anggota", foto: null },
    ],
  },
  {
    id: "humas",
    nama: "Hubungan Masyarakat",
    singkatan: "HUMAS",
    deskripsi: "Menjaga citra HMIF, mengelola publikasi, dan membangun relasi dengan pihak eksternal.",
    anggota: [
      { nama: "Maulidya Nazlita Az-Zahara", jabatan: "Ketua Divisi", foto: null },
      { nama: "Ridho Pangestu", jabatan: "Wakil Ketua Divisi", foto: null },
      { nama: "Muhammad Albar Alzaky", jabatan: "Ketua Bidang Relasi dan Kemitraan", foto: null },
      { nama: "Alya Resya Madani", jabatan: "Sekretaris Divisi", foto: null },
      { nama: "Reza", jabatan: "Ketua Bidang Manajemen Sosial Media", foto: null },
      { nama: "Albi Muhtarom", jabatan: "Anggota", foto: null },
      { nama: "Fuad Rizqi Abhori", jabatan: "Anggota", foto: null },
      { nama: "Siti Manisa", jabatan: "Anggota", foto: null },
      { nama: "Muhammad Akbar Ciptasati", jabatan: "Anggota", foto: null },
      { nama: "Dego Septiano", jabatan: "Anggota", foto: null },
      { nama: "Riocta Lukie Ramadian", jabatan: "Anggota", foto: null },
      { nama: "Ello Bagas Wicaksono", jabatan: "Anggota", foto: null },
      { nama: "Sebastian Muhtadi", jabatan: "Anggota", foto: null },
    ],
  },
  {
    id: "psda",
    nama: "Pemberdayaan Sumber Daya Anggota",
    singkatan: "PSDA",
    deskripsi: "Menyiapkan mahasiswa Informatika yang siap berorganisasi dan berkembang secara personal.",
    anggota: [
      { nama: "Rizky Ramadhan Alfarizi", jabatan: "Ketua Divisi", foto: null },
      { nama: "Rizki Pratama", jabatan: "Wakil Ketua Divisi", foto: null },
      { nama: "Nurriska Alfadillah", jabatan: "Sekretaris Divisi", foto: null },
      { nama: "Dimas Juliandra Marshall", jabatan: "Ketua Bidang Pengembangan Kapasitas Anggota", foto: null },
      { nama: "Dava Fajar Al'valah", jabatan: "Anggota", foto: null },
      { nama: "Miratil Hayati", jabatan: "Anggota", foto: null },
      { nama: "Muhammad Abizar Al-Ghifari", jabatan: "Anggota", foto: null },
      { nama: "Haikal Razan", jabatan: "Anggota", foto: null },
      { nama: "Jeffry Favian Meker", jabatan: "Anggota", foto: null },
      { nama: "Muhammad Adrian Alfifbran", jabatan: "Anggota", foto: null },
      { nama: "Nawfal Abyaz Sadat", jabatan: "Anggota", foto: null },
    ],
  },
  {
    id: "mit",
    nama: "Media Informasi dan Teknologi",
    singkatan: "MIT",
    deskripsi: "Mendorong budaya belajar teknis, eksplorasi teknologi, dan pengelolaan media digital HMIF.",
    anggota: [
      { nama: "Khoirul Faza Perdana", jabatan: "Ketua Divisi", foto: null },
      { nama: "Dika Jaya Saputra", jabatan: "Wakil Ketua Divisi", foto: null },
      { nama: "Nabilla Lidyan Nisa", jabatan: "Sekretaris Divisi", foto: null },
      { nama: "Diky Bintang Pamungkas", jabatan: "Ketua Bidang Fotografi dan Vidiografi", foto: null },
      { nama: "M. Faris Daffarindra", jabatan: "Anggota", foto: null },
      { nama: "Muhammad Aziz Syah Dani", jabatan: "Anggota", foto: null },
      { nama: "Fajri Aulia", jabatan: "Anggota", foto: null },
      { nama: "Rifky Ramadhan", jabatan: "Anggota", foto: null },
      { nama: "Pascal Touriqe Alkhoiri", jabatan: "Anggota", foto: null },
      { nama: "Measya Shafila Veliandri", jabatan: "Anggota", foto: null },
    ],
  },
];

export const iforiaInfo = {
  singkatan: "Informatics Orientation & Adaptation",
  tagline: "Gerbang pertama menuju keluarga besar Informatika UNJA",
  deskripsi:
    "IFORIA adalah program Pengenalan Kehidupan Kampus (PKK) tingkat Program Studi Informatika Universitas Jambi. Diselenggarakan setiap tahun oleh HMIF, IFORIA menjadi jembatan pertama bagi mahasiswa baru untuk mengenal lingkungan akademik, budaya organisasi, serta keluarga besar Informatika sebelum memulai perjalanan perkuliahan mereka.",
  tujuan: [
    "Mengenalkan mahasiswa baru pada sistem akademik dan lingkungan kampus Informatika.",
    "Membangun rasa kekeluargaan antar mahasiswa lintas angkatan sejak awal.",
    "Menanamkan nilai, budaya, dan identitas Informatika UNJA sejak dini.",
    "Menjadi sarana regenerasi kepemimpinan dan kepanitiaan mahasiswa.",
  ],
  rangkaian: [
    { judul: "Pra-Acara", desc: "Kedatangan peserta dan Pembekalan panitia, pembagian kelompok, dan pengumpulan tugas pengenalan." },
    { judul: "Hari Pengenalan Akademik", desc: "Pengenalan program studi, dosen, dan sistem perkuliahan. Serta penjelasan mengenai proses akademik. Dan materi dari dosen" },
    { judul: "Hari Pengenalan Organisasi", desc: "Pengenalan HMIF, unit kegiatan, dan alur berorganisasi. Prodi Informatika" },
    { judul: "Malam Keakraban", desc: "Sesi kebersamaan lintas angkatan untuk mempererat kekeluargaan." },
    { judul: "Penutupan & Simbolisasi", desc: "Serah-terima simbolis mahasiswa baru ke dalam keluarga besar Informatika." },
  ],
  // Setiap tahun bakalan terus bertambah entrinyo bang, jadi tambahin edisi baru di sini bang. -Aziz
  timeline: [
    {
      tahun: "2026",
      versi: "IFORIA // 2026",
      tema: "Akan diumumkan",
      deskripsi: "Persiapan sedang berlangsung nantikan pengumuman resmi dari HMIF.",
      status: "Edisi Pertama",
    },
  ],
};

export const galleryCategories = [
  { key: "kegiatan", label: "Kegiatan Himpunan" },
  { key: "iforia", label: "IFORIA" },
  { key: "kelas", label: "Kehidupan Kampus" },
  { key: "prestasi", label: "Prestasi" },
];

// Letakkan foto pada /public/gallery/ lalu daftarkan di sini.
export const galleryPlaceholder = new Array(8).fill(0).map((_, i) => ({
  id: i + 1,
  category: galleryCategories[i % galleryCategories.length].key,
  caption: "Ganti dengan keterangan foto bang -Aziz",
}));

export const contactChannels = [
  { label: "Email", value: siteInfo.email, href: `mailto:${siteInfo.email}` },
  { label: "Instagram", value: siteInfo.instagram, href: "https://instagram.com/hmifunja" },
  { label: "Lokasi", value: siteInfo.address, href: "https://www.google.com/maps/place/Fakultas+Sains+dan+Teknologi+UNJA/@-1.614875,103.519825,1086m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e2f62c01aa6b39b:0x79e2b7ce458689aa!8m2!3d-1.614875!4d103.519825!16s%2Fg%2F11c30r4v1m?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D" },
];
