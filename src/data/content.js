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
  instagram: "hmifunja",
  address: "Fakultas Sains dan Teknologi, Universitas Jambi, Kampus Mendalo, Jambi",
};

export const navLinks = [
  { to: "/", label: "Beranda" },
  { to: "/tentang", label: "Tentang HMIF" },
  { to: "/program-kerja", label: "Program Kerja" },
  { to: "/struktur-organisasi", label: "Struktur" },
  { to: "/berita", label: "Berita" },
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
    "HMIF UNJA resmi berdiri sejak tanggal 1 April 2026. HMIF UNJA lahir dari semangat sekelompok mahasiswa angkatan pertama Program Studi Informatika yang ingin memiliki wadah resmi untuk menyalurkan aspirasi, minat, dan bakat. Meski masih muda, HMIF dibangun dengan visi jangka panjang: menjadi fondasi budaya organisasi yang akan diwariskan ke angkatan-angkatan berikutnya.",
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
    deskripsi: "Bergerak di bidang publikasi digital dan berfungsi sebagai media penyampaian informasi.",
    program: [
      "Maintenance & pengembangan website HMIF",
      "Workshop pemrograman & teknologi terkini",
      "Menghandle media sosial HMIF dan publikasi konten kreatif",
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
    deskripsi: "Mengelola dan mengusahakan sumber pendanaan dan berbagai kebutuhan yang diperlukan untuk menunjang kelancaran setiap program kerja yang akan dilaksanakan oleh Himpunan Mahasiswa Informatika.",
    program: [
      "Menjual merchandise official HMIF (Jaket, Pdh, dll.)",
      "Menjual souvenir/merchandise resmi HMIF (Stiker, Gantungan kunci, dll.)",
      "Menyelenggarakan bazar atau event kreatif",
    ],
  },
];

// Tambahkan `foto: "/team/nama-file.jpg"` jika sudah punya foto asli.
// Selama `foto` kosong (null), akan ditampilkan ikon placeholder.
export const strukturInti = [
  { nama: "Nicky Pradithiya Dinata", jabatan: "Ketua Himpunan", angkatan: "2024", foto: "/team/NICKY PRADHITIYA DINATA.JPG" },
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
// Tambahkan fotoBersama: "/team/nama-file-bersama.jpg" untuk foto kelompok divisi
// Tambahkan foto: "/team/nama-file.jpg" untuk tiap anggota jika sudah tersedia.
export const divisiOrganisasi = [
  {
    id: "bph",
    nama: "Badan Pengurus Harian",
    singkatan: "BPH",
    fotoBersama: "/team/BPH.JPG", // Masukkan path foto bersama pengurus BPH, misal: "/team/bph-bersama.jpg"
    deskripsi:
      "Badan Pengurus Harian (BPH) merupakan poros utama kepemimpinan dan manajemen organisasi di lingkungan Himpunan Mahasiswa Informatika (HMIF). Divisi inti ini bertanggung jawab penuh dalam merumuskan arah kebijakan strategis, mengoordinasikan seluruh divisi dan badan otonom, mengawal stabilitas internal, serta menjaga kesinambungan visi dan misi himpunan agar seluruh agenda kerja terlaksana secara terarah, akuntabel, dan profesional.",
    anggota: [
      { nama: "Nicky Pradithiya Dinata", jabatan: "Ketua Himpunan", foto: "/team/NICKY PRADHITIYA DINATA.JPG" },
      { nama: "Fabianto Dwitama", jabatan: "Wakil Ketua Himpunan", foto: null },
      { nama: "Artika Sari Kosasih", jabatan: "Sekretaris Himpunan", foto: null },
      { nama: "Naufal Faisa", jabatan: "Sekretaris 2 Himpunan", foto: null },
      { nama: "Ela Febriani", jabatan: "Bendahara Himpunan", foto: "/team/Ela.JPG" },
    ],
  },
  {
    id: "danus",
    nama: "Dana dan Usaha",
    singkatan: "DANUS",
    fotoBersama: "/team/Danus.JPG", // Masukkan path foto bersama pengurus Danus, misal: "/team/danus-bersama.jpg"
    deskripsi:
      "Divisi Dana Usaha (Danus) adalah divisi yang bertanggung jawab dalam merancang, mengelola, dan melaksanakan kegiatan usaha organisasi guna memperoleh sumber pendanaan mandiri. Divisi ini berperan sebagai penunjang keuangan himpunan mahasiswa melalui kegiatan kewirausahaan yang kreatif, inovatif, dan berkelanjutan, sehingga dapat mendukung pelaksanaan program kerja serta meningkatkan kemandirian finansial organisasi.",
    anggota: [
      { nama: "Fiqri Arrijal", jabatan: "Ketua Divisi", foto: "/team/Fiqri Arrijal.JPG" },
      { nama: "Novindra Augustiar", jabatan: "Wakil Ketua Divisi", foto: "/team/Novindraaugustiar.JPG" },
      { nama: "Nandhita Novelie Mykella", jabatan: "Sekretaris Divisi", foto: "/team/Nandhita Novelie Mykella .JPG" },
      { nama: "Nagita Syahira Putri", jabatan: "Bendahara Divisi", foto: "/team/NAGITA SYAHIRA PUTRI .JPG" },
      { nama: "Johanes Sinalsal Sinulingga", jabatan: "Ketua Bidang Kewirausahaan", foto: "/team/Johanes Sinalsal.JPG" },
      { nama: "Muhammad Ariiq Milzam Alfarabi", jabatan: "Ketua Bidang Relasi dan Marketing", foto: null },
      { nama: "Rafli Rahmat", jabatan: "Anggota", foto: "/team/Rafli Rahmat .jpg" },
      { nama: "Alfredo Nobel Tambunan", jabatan: "Anggota", foto: "/team/nobel.JPG" },
      { nama: "Sirr Hanif Al-Mufarrid", jabatan: "Anggota", foto: "/team/Sir.JPG" },
      { nama: "Farrel Herdiyan", jabatan: "Anggota", foto: "/team/Farrel.JPG" },
    ],
  },
  {
    id: "humas",
    nama: "Hubungan Masyarakat",
    singkatan: "HUMAS",
    fotoBersama: "/team/HUMAS.JPG", // Masukkan path foto bersama pengurus Humas, misal: "/team/humas-bersama.jpg"
    deskripsi:
      "Divisi Hubungan Masyarakat (Humas) merupakan garda terdepan dalam membangun dan menjaga citra positif Himpunan Mahasiswa Informatika (HMIF). Divisi ini bertugas menjalin komunikasi strategis, memperluas jejaring kemitraan dengan instansi eksternal, alumni, dan organisasi mitra, serta mengelola publikasi media sosial untuk memastikan keterbukaan informasi dan relasi yang harmonis.",
    anggota: [
      { nama: "Maulidya Nazlita Az-Zahara", jabatan: "Ketua Divisi", foto: "/team/Maulidya Nazlita Az-Zahara .JPG" },
      { nama: "Ridho Pangestu", jabatan: "Wakil Ketua Divisi", foto: "/team/Ridho Pangestu .JPG" },
      { nama: "Muhammad Albar Alzaky", jabatan: "Ketua Bidang Relasi dan Kemitraan", foto: "/team/jekz.JPG" },
      { nama: "Alya Resya Madani", jabatan: "Sekretaris Divisi", foto: "/team/Alya Resya Madani.JPG" },
      { nama: "Reza", jabatan: "Ketua Bidang Manajemen Sosial Media", foto: "/team/Reza.JPG" },
      { nama: "Albi Muhtarom", jabatan: "Anggota", foto: "/team/Albi Muhtarom.JPG" },
      { nama: "Fuad Rizqi Abrori", jabatan: "Anggota", foto: "/team/Fuad.JPG" },
      { nama: "Siti Manisa", jabatan: "Anggota", foto: "/team/Siti Manisa.JPG" },
      { nama: "Muhammad Akbar Ciptasati", jabatan: "Anggota", foto: "/team/Muhammad Akbar Ciptasati.JPG" },
      { nama: "Dego Septiano", jabatan: "Anggota", foto: "/team/Dego septiano.JPG" },
      { nama: "Riolocta Lukie Ramadian", jabatan: "Anggota", foto: null },
      { nama: "Ello Bagas Wicaksono", jabatan: "Anggota", foto: "/team/Ello Bagas Wicaksono .JPG" },
      { nama: "Sebastian Muhtadi", jabatan: "Anggota", foto: "/team/Sebastian Muhtadi.jpg" },
    ],
  },
  {
    id: "psda",
    nama: "Pemberdayaan Sumber Daya Anggota",
    singkatan: "PSDA",
    fotoBersama: "/team/PSDA.JPG", // Masukkan path foto bersama pengurus PSDA, misal: "/team/psda-bersama.jpg"
    deskripsi:
      "Divisi Pemberdayaan Sumber Daya Anggota (PSDA) berfokus pada pembinaan karakter, pengembangan potensi diri, dan penguatan solidaritas antar-anggota HMIF. Divisi ini menginisiasi berbagai program kaderisasi, pelatihan kepemimpinan, dan kegiatan pengembangan internal guna mencetak insan akademis Informatika yang berintegritas, aktif, dan berdaya saing.",
    anggota: [
      { nama: "Rizky Ramadhan Alfarizi", jabatan: "Ketua Divisi", foto: "/team/Rizky Ramadhan Alfarizi.JPG" },
      { nama: "Rizki Pratama", jabatan: "Wakil Ketua Divisi", foto: "/team/prat.JPG" },
      { nama: "Nurriska Alfadillah", jabatan: "Sekretaris Divisi", foto: "/team/Nurriska Alfadilah.JPG" },
      { nama: "Dimas Juliandra Marshall", jabatan: "Ketua Bidang Pengembangan Kapasitas Anggota", foto: null },
      { nama: "Dava Fajar Al'valah", jabatan: "Anggota", foto: "/team/Dava fajar Al'valah.JPG" },
      { nama: "Miratil Hayati", jabatan: "Anggota", foto: "/team/MIRATIL HAYATI.JPG" },
      { nama: "Muhammad Abizar Al-Ghifari", jabatan: "Anggota", foto: "/team/M.Abizar Al-Ghifari.jpeg" },
      { nama: "Haikal Razan", jabatan: "Anggota", foto: "/team/Haikal Razan.JPG" },
      { nama: "Jeffry Favian Meker", jabatan: "Anggota", foto: "/team/Jeffry.jpeg" },
      { nama: "Muhammad Adrian Alfifbran", jabatan: "Anggota", foto: "/team/Muhammad Adrian alfibran.JPG" },
      { nama: "Nawfal Abyaz Sadat", jabatan: "Anggota", foto: "/team/Katsuto.JPG" },
    ],
  },
  {
    id: "mit",
    nama: "Media Informasi dan Teknologi",
    singkatan: "MIT",
    fotoBersama: "/team/MIT.JPG", // Masukkan path foto bersama pengurus MIT, misal: "/team/mit-bersama.jpg"
    deskripsi:
      "Divisi Media Informasi dan Teknologi (MIT) adalah divisi teknis dan kreatif yang bertugas mendorong eksplorasi teknologi informasi, riset, serta pengembangan inovasi digital di lingkungan HMIF. Selain itu, divisi ini bertanggung jawab atas pengelolaan infrastruktur sistem informasi himpunan, dokumentasi multimedia, serta penciptaan aset visual dan konten kreatif yang edukatif dan inspiratif.",
    anggota: [
      { nama: "Khoirul Faza Perdana", jabatan: "Ketua Divisi", foto: "/team/Faza.JPG" },
      { nama: "Dika Jaya Saputra", jabatan: "Wakil Ketua Divisi", foto: "/team/Dika.JPG" },
      { nama: "Nabila Lidyan Nisa", jabatan: "Sekretaris Divisi", foto: "/team/Nabila Lidyan Nisa_F1E325037.JPG" },
      { nama: "Diky Bintang Pamungkas", jabatan: "Ketua Bidang Fotografi dan Vidiografi", foto: null },
      { nama: "M. Faris Daffarindra", jabatan: "Ketua Bidang Desain", foto: "/team/M. Faris Daffarindra.JPG" },
      { nama: "Muhammad Aziz Syah Dani", jabatan: "Anggota", foto: "/team/Muhammad Aziz Syah Dani.JPG" },
      { nama: "Fajri Aulia", jabatan: "Anggota", foto: "/team/Fajri Aulia.JPG" },
      { nama: "Rifky Ramadhan", jabatan: "Anggota", foto: "/team/Rifky Ramadan.JPG" },
      { nama: "Pascal Touriqe Alkhoiri", jabatan: "Anggota", foto: "/team/Pascal Touriqe Alkhoiri .JPG" },
      { nama: "Measya Shafila Veliandri", jabatan: "Anggota", foto: "/team/Measya Shafila Veliandri.JPG" },
    ],
  },
];

export const galleryCategories = [
  { key: "kegiatan", label: "Kegiatan Himpunan" },
  { key: "kelas", label: "Kehidupan Kampus" },
  { key: "prestasi", label: "Prestasi" },
];

// Letakkan foto pada /public/gallery/ lalu daftarkan di sini.
// export const galleryPlaceholder = new Array(8).fill(0).map((_, i) => ({
//   id: i + 1,
//   category: galleryCategories[i % galleryCategories.length].key,
//   caption: "Ganti dengan keterangan foto bang -Aziz",
// }));

// Letakkan foto pada /public/gallery/ lalu daftarkan di sini.
export const galleryPlaceholder = [
  { id: 1, category: "kegiatan", caption: "Pengukuhan Himpunan Mahasiswa Informatika", src: "/gallery/pengukuhan-1.jpg" },
  { id: 2, category: "kegiatan", caption: "Pembukaan Himpunan Mahasiswa Informatika", src: "/gallery/Pengukuhan-2.JPG" },
  { id: 3, category: "kegiatan", caption: "Malam Keakraban Himpunan Mahasiswa Informatika", src: "/gallery/Makrab.JPG" },
  { id: 4, category: "kegiatan", caption: "Lomba antar Divisi saat Makrab HMIF", src: "/gallery/Makrab-2.JPG" },
  { id: 5, category: "kegiatan", caption: " Pkkmb-Fst Universitas Jambi", src: "/gallery/pkkmb-fst.jpg" },
  { id: 6, category: "kegiatan", caption: " Malam Keakraban Himpunan Mahasiswa Informatika", src: "/gallery/makrab-3.jpg" },
  { id: 7, category: "kegiatan", caption: " Pengukuhan Himpunan Mahasiswa Informatika", src: "/gallery/pengukuhan-3.jpg" },
  { id: 8, category: "kegiatan", caption: " Malam Keakraban Himpunan Mahasiswa Informatika", src: "/gallery/makrab-4.jpg" },




];

export const contactChannels = [
  { label: "Email", value: siteInfo.email, href: `mailto:${siteInfo.email}` },
  { label: "Instagram", value: siteInfo.instagram, href: "https://instagram.com/hmifunja" },
  { label: "Lokasi", value: siteInfo.address, href: "https://www.google.com/maps/place/Fakultas+Sains+dan+Teknologi+UNJA/@-1.614875,103.519825,1086m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e2f62c01aa6b39b:0x79e2b7ce458689aa!8m2!3d-1.614875!4d103.519825!16s%2Fg%2F11c30r4v1m?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D" },
];

export const beritaCategories = [
  { key: "semua", label: "Semua Berita" },
  { key: "himpunan", label: "Himpunan" },
];

export const beritaList = [
  {
    id: 1,
    slug: "pengukuhan-kepengurusan-hmif-unja",
    judul: "Pengukuhan Resmi Pengurus HMIF UNJA Periode Berjalan",
    ringkasan: "Pelantikan dan pengukuhan resmi pengurus Himpunan Mahasiswa Informatika Universitas Jambi di Fakultas Sains dan Teknologi, menandai komitmen baru penguatan kolaborasi mahasiswa.",
    isi: [
      "Pelantikan dan pengukuhan jajaran pengurus Himpunan Mahasiswa Informatika (HMIF) Universitas Jambi periode berjalan resmi diselenggarakan dengan khidmat di lingkungan Fakultas Sains dan Teknologi. Acara ini dihadiri oleh pimpinan fakultas, koordinator program studi, para dosen pembina, serta perwakilan lembaga kemahasiswaan se-FST UNJA.",
      "Dalam sambutannya, Ketua Himpunan HMIF menyampaikan tekad kepengurusan untuk menjadikan HMIF sebagai wadah akselerasi potensi akademik maupun non-akademik bagi seluruh mahasiswa Informatika. Fokus utama kepengurusan mencakup peningkatan budaya riset dan kompetisi, pengembangan jejaring industri teknologi, serta penanaman karakter kepemimpinan yang berintegritas.",
      "Prosesi pengukuhan diakhiri dengan pembacaan ikrar pengurus dan penandatanganan berita acara serah terima amanah, dilanjutkan dengan sesi foto bersama seluruh jajaran pengurus baru bersama dosen pembina."
    ],
    kategori: "himpunan",
    kategoriLabel: "Himpunan",
    tanggal: "15 Maret 2026",
    penulis: "Divisi Humas",
    waktuBaca: "3 menit",
    gambar: "/gallery/pengukuhan-1.jpg",
    featured: true,
  },
  {
    id: 2,
    slug: "malam-keakraban-makrab-mahasiswa-informatika",
    judul: "Malam Keakraban (Makrab) HMIF: Mempererat Solidaritas Antar-Angkatan",
    ringkasan: "Kegiatan Makrab HMIF sukses digelar dengan berbagai agenda sharing session, team-building, dan dialog terbuka antar-mahasiswa Informatika UNJA.",
    isi: [
      "Guna memupuk rasa kebersamaan dan meruntuhkan sekat antar-angkatan, HMIF menyelenggarakan kegiatan Malam Keakraban (Makrab) yang diikuti oleh mahasiswa aktif program studi Informatika.",
      "Rangkaian acara diawali dengan sesi pembagian kelompok lintas angkatan, perlombaan kekompakan tim, hingga diskusi santai mengenai pengalaman kuliah dan kiat menghadapi tantangan perkuliahan di bidang teknologi.",
      "Koordinator Divisi PSDA menuturkan bahwa kekompakan mahasiswa adalah modal fundamental bagi keberlangsungan organisasi. Melalui suasana kekeluargaan yang hangat, kegiatan ini berhasil memperkuat rasa memiliki terhadap almamater dan himpunan."
    ],
    kategori: "himpunan",
    kategoriLabel: "himpunan",
    tanggal: "28 Februari 2026",
    penulis: "Divisi PSDA",
    waktuBaca: "4 menit",
    gambar: "/gallery/Makrab.JPG",
    featured: false,
  },
];