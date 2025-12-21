// Data prodi; key harus cocok dengan parameter ?fakultas= dari detail-fakultas.js
const prodiData = {
  fit: [
    {
      id: 0,
      nama: "D3 Sistem Informasi",
      jenjang: "Diploma III",
      fakultas: "Fakultas Ilmu Terapan",
      tagline: "Menyiapkan ahli madya di bidang sistem informasi terapan.",
      deskripsi:
        "Program studi D3 Sistem Informasi berfokus pada pengembangan dan penerapan solusi sistem informasi untuk kebutuhan bisnis dan organisasi.",
      visi:
        "Menjadi program studi vokasi unggul di bidang sistem informasi terapan.",
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
      visi:
        "Menjadi program studi vokasi unggul di bidang teknologi telekomunikasi.",
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
      tagline:
        "Menggabungkan kedalaman teori dan kekuatan praktik di bidang informatika.",
      deskripsi:
        "Program studi D4 Teknik Informatika menyiapkan lulusan setara sarjana terapan dengan kompetensi pengembangan perangkat lunak dan solusi TIK.",
      visi:
        "Menjadi program studi terapan unggul di bidang teknik informatika.",
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
  // nanti kalau ada fakultas lain (informatika, feb, dst) tinggal tambah key baru
};

function initDetailProdi() {
  const params = new URLSearchParams(window.location.search);
  const fakultasId = params.get("fakultas"); // contoh: fit
  const index = params.get("id");            // contoh: 0, 1, 2

  const listProdi = prodiData[fakultasId] || [];
  const prodi = listProdi.find((p) => String(p.id) === String(index));

  if (!prodi) {
    document.body.innerHTML = `
      <div style="
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Arial, sans-serif;
        color: #444;
      ">
        Program studi tidak ditemukan
      </div>
    `;
    return;
  }

  // Ambil elemen pakai class (querySelector)
  const heroSection = document.querySelector(".hero-section");
  const heroImg = document.querySelector(".hero-image");
  const namaFakultasEl = document.querySelector(".nama-fakultas-text");
  const namaProdiEl = document.querySelector(".nama-prodi-text");
  const jenjangProdiEl = document.querySelector(".jenjang-prodi-text");
  const taglineProdiEl = document.querySelector(".tagline-prodi-text");
  const deskripsiProdiEl = document.querySelector(".deskripsi-prodi-text");
  const visiProdiEl = document.querySelector(".visi-prodi-text");
  const misiListEl = document.querySelector(".misi-prodi-list");
  const prospekListEl = document.querySelector(".prospek-karir-list");
  const jenjangSideEl = document.querySelector(".jenjang-prodi-side-text");
  const gelarEl = document.querySelector(".gelar-prodi-text");
  const akreditasiEl = document.querySelector(".akreditasi-prodi-text");
  const durasiEl = document.querySelector(".durasi-prodi-text");
  const emailEl = document.querySelector(".email-prodi-text");
  const websiteEl = document.querySelector(".website-prodi-link");
  const subscribeBtn = document.querySelector(".subscribe-prodi-btn");

  // Hero background
  if (heroSection) {
    heroSection.style.backgroundImage =
      "linear-gradient(to right, #18a63a, #47c95a, #a6e86f)";
  }

  // Hero image
  if (heroImg && prodi.hero) {
    heroImg.src = prodi.hero;
  }

  // Teks utama
  if (namaFakultasEl) namaFakultasEl.textContent = prodi.fakultas;
  if (namaProdiEl) namaProdiEl.textContent = prodi.nama;
  if (jenjangProdiEl) jenjangProdiEl.textContent = prodi.jenjang;
  if (taglineProdiEl) taglineProdiEl.textContent = prodi.tagline;

  // Deskripsi, visi
  if (deskripsiProdiEl) deskripsiProdiEl.textContent = prodi.deskripsi;
  if (visiProdiEl) visiProdiEl.textContent = prodi.visi;

  // Misi
  if (misiListEl) {
    misiListEl.innerHTML = "";
    prodi.misi.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      misiListEl.appendChild(li);
    });
  }

  // Prospek karir
  if (prospekListEl) {
    prospekListEl.innerHTML = "";
    prodi.prospekKarir.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      prospekListEl.appendChild(li);
    });
  }

  // Info singkat
  if (jenjangSideEl) jenjangSideEl.textContent = prodi.jenjang;
  if (gelarEl) gelarEl.textContent = prodi.gelar;
  if (akreditasiEl) akreditasiEl.textContent = prodi.akreditasi;
  if (durasiEl) durasiEl.textContent = prodi.durasi;

  // Kontak
  if (emailEl) emailEl.textContent = prodi.email;
  if (websiteEl) {
    websiteEl.textContent = prodi.website;
    websiteEl.onclick = function () {
      window.open(prodi.website, "_blank");
    };
  }

  // Tombol subscribe prodi (localStorage)
  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", function () {
      const key = "subscribedProdi";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");

      if (!existing.includes(prodi.id)) {
        existing.push(prodi.id);
        localStorage.setItem(key, JSON.stringify(existing));
        alert(`Berhasil subscribe prodi ${prodi.nama}`);
      } else {
        alert(`Kamu sudah subscribe prodi ${prodi.nama}`);
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", initDetailProdi);
