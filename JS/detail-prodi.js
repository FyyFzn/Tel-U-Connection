// Data prodi; id harus cocok dengan parameter ?id= dari detail-fakultas.js
const prodiData = [
    fit [
  {
    id: 0,
    nama: "D3 Sistem Informasi",
    jenjang: "Diploma III",
    fakultas: "Fakultas Ilmu Terapan",
    tagline: "Menyiapkan ahli madya di bidang sistem informasi terapan.",
    deskripsi:
      "Program studi D3 Sistem Informasi berfokus pada pengembangan dan penerapan solusi sistem informasi untuk kebutuhan bisnis dan organisasi.",
    visi: "Menjadi program studi vokasi unggul di bidang sistem informasi terapan.",
    misi: [
      "Menyelenggarakan pendidikan vokasi berkualitas di bidang sistem informasi.",
      "Mengembangkan penelitian terapan dan inovasi berbasis TIK.",
      "Meningkatkan kerja sama dengan industri dan masyarakat."
    ],
    prospekKarir: [
      "Programmer",
      "System analyst",
      "IT support",
      "Technopreneur"
    ],
    gelar: "A.Md.Kom",
    akreditasi: "Baik Sekali",
    durasi: "3 tahun (6 semester)",
    email: "d3si@telkomuniversity.ac.id",
    website: "https://telkomuniversity.ac.id",
    hero: "media/FIT.png"
  },
  {
    id: 1,
    nama: "D3 Teknologi Telekomunikasi",
    jenjang: "Diploma III",
    fakultas: "Fakultas Ilmu Terapan",
    tagline: "Fokus pada teknologi jaringan dan telekomunikasi.",
    deskripsi:
      "Program studi yang membekali mahasiswa dengan kompetensi teknis di bidang jaringan, sistem komunikasi, dan perangkat telekomunikasi.",
    visi: "Menjadi program studi vokasi unggul di bidang teknologi telekomunikasi.",
    misi: [
      "Menghasilkan lulusan yang kompeten di bidang telekomunikasi.",
      "Menyelenggarakan penelitian terapan di bidang jaringan dan komunikasi.",
      "Membangun jejaring dengan industri telekomunikasi."
    ],
    prospekKarir: [
      "Network engineer",
      "Telecommunication technician",
      "RF engineer",
      "NOC engineer"
    ],
    gelar: "A.Md.T",
    akreditasi: "Baik Sekali",
    durasi: "3 tahun (6 semester)",
    email: "d3tt@telkomuniversity.ac.id",
    website: "https://telkomuniversity.ac.id",
    hero: "media/FIT.png"
  },
  {
    id: 2,
    nama: "D4 Teknik Informatika",
    jenjang: "Diploma IV",
    fakultas: "Fakultas Ilmu Terapan",
    tagline: "Menggabungkan kedalaman teori dan kekuatan praktik di bidang informatika.",
    deskripsi:
      "Program studi D4 Teknik Informatika menyiapkan lulusan setara sarjana terapan dengan kompetensi pengembangan perangkat lunak dan solusi TIK.",
    visi: "Menjadi program studi terapan unggul di bidang teknik informatika.",
    misi: [
      "Menyelenggarakan pendidikan terapan di bidang rekayasa perangkat lunak.",
      "Mendorong inovasi TIK yang bermanfaat bagi masyarakat.",
      "Membangun kolaborasi dengan industri IT."
    ],
    prospekKarir: [
      "Software engineer",
      "Mobile developer",
      "Full-stack developer",
      "DevOps engineer"
    ],
    gelar: "S.Tr.Kom",
    akreditasi: "Baik Sekali",
    durasi: "4 tahun (8 semester)",
    email: "d4ti@telkomuniversity.ac.id",
    website: "https://telkomuniversity.ac.id",
    hero: "media/FIT.png"
  }
  ]
];

(function initDetailProdi() {
  const params = new URLSearchParams(window.location.search);
const fakultasId = params.get("fakultas"); // misal: fit, informatika, feb
const index = params.get("id");

const listProdi = prodiData[fakultasId] || [];
const prodi = listProdi.find(p => String(p.id) === String(index));


  if (!prodi) {
    document.body.innerHTML =
      "<div style='min-height:100vh;display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif;color:#444;'>Program studi tidak ditemukan</div>";
    return;
  }

  // Hero background
  const heroSection = document.getElementById("heroSection");
  if (heroSection) {
    heroSection.style.backgroundImage =
      "linear-gradient(to right, #18a63a, #47c95a, #a6e86f)";
  }

  const heroImg = document.getElementById("heroImage");
  if (heroImg && prodi.hero) {
    heroImg.src = prodi.hero;
  }

  // Teks utama
  document.getElementById("namaProdi").textContent = prodi.nama;
  document.getElementById("jenjangProdi").textContent = prodi.jenjang;
  document.getElementById("taglineProdi").textContent = prodi.tagline;
  document.getElementById("namaFakultas").textContent = prodi.fakultas;
  document.getElementById("deskripsiProdi").textContent = prodi.deskripsi;
  document.getElementById("visiProdi").textContent = prodi.visi;

  const misiList = document.getElementById("misiProdi");
  prodi.misi.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    misiList.appendChild(li);
  });

  const prospekList = document.getElementById("prospekKarir");
  prodi.prospekKarir.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    prospekList.appendChild(li);
  });

  // Info singkat
  document.getElementById("jenjangProdiSide").textContent = prodi.jenjang;
  document.getElementById("gelarProdi").textContent = prodi.gelar;
  document.getElementById("akreditasiProdi").textContent = prodi.akreditasi;
  document.getElementById("durasiProdi").textContent = prodi.durasi;

  document.getElementById("emailProdi").textContent = prodi.email;

  const webEl = document.getElementById("websiteProdi");
  webEl.textContent = prodi.website;
  webEl.onclick = function () {
    window.open(prodi.website, "_blank");
  };

  // Subscribe prodi (localStorage)
  const subscribeBtn = document.getElementById("subscribeProdiBtn");
  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", function () {
      const key = "subscribedProdi";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      if (!existing.includes(prodi.id)) {
        existing.push(prodi.id);
        localStorage.setItem(key, JSON.stringify(existing));
        alert("Berhasil subscribe prodi " + prodi.nama);
      } else {
        alert("Kamu sudah subscribe prodi " + prodi.nama);
      }
    });
  }
})();
