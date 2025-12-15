// Database fakultas
const fakultasData = {
  fit: {
    nama: "Fakultas Ilmu Terapan",
    subTitle: "School of Applied Science",
    gambar: "media/TU-logogram-238x300.jpg",
    hero: "media/FIT.png",
    deskripsi: "Fakultas Ilmu Terapan fokus pada pendidikan vokasi dan praktik industri.",
    colors: ["#18a63a 0%,  #47c95a 40%,  #a6e86f 100%"],
    prodi: [
      "D3 Sistem Informasi",
      "D3 Teknologi Telekomunikasi",
      "D4 Teknik Informatika"
    ]
  },
  informatika: {
    nama: "Fakultas Informatika",
    subTitle: "School of Computing",
    gambar: "media/TU-logogram-238x300.jpg",
    hero: "media/Informatika.png",
    deskripsi: "Fakultas Informatika berfokus pada pengembangan teknologi dan IT.",
    colors: ["#b91c1c", "#f97316" , "#b91c1c"],
    prodi: [
      "S1 Informatika",
      "S1 Rekayasa Perangkat Lunak",
      "S2 Informatika"
    ]
  },
  feb: {
    nama: "Fakultas Ekonomi dan Bisnis",
    subTitle: "School of Economics and Business",
    gambar: "media/TU-logogram-238x300.jpg",
    hero: "media/FEB.png",
    deskripsi: "FEB membekali mahasiswa dengan kompetensi bisnis dan manajemen.",
    colors: ["#1d4ed8", "#3b82f6" , "#1d4ed8"],
    prodi: [
      "S1 Manajemen",
      "S1 Akuntansi",
      "S2 Manajemen"
    ]
  }
};

// Ambil parameter URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Validasi data
if (fakultasData[id]) {
  const data = fakultasData[id];

  // Teks dan logo
  document.getElementById("namaFakultas").textContent = data.nama;
  document.getElementById("subTitle").textContent = data.subTitle || "";
  document.getElementById("gambarFakultas").src = data.gambar;
  document.getElementById("deskripsiFakultas").textContent = data.deskripsi;

  // Hero image
  const heroImg = document.getElementById("heroImage");
  if (heroImg && data.hero) {
    heroImg.src = data.hero;
  }

      const heroSection = document.getElementById("heroSection");
if (heroSection && data.colors) {
  const [c1, c2 , c3] = data.colors;
  heroSection.style.backgroundImage = `linear-gradient(to right, ${c1}, ${c2}, ${c3})`;
}

  // List prodi
  const prodiList = document.getElementById("prodiList");
  data.prodi.forEach(prodi => {
    const li = document.createElement("li");
    li.textContent = prodi;
    prodiList.appendChild(li);
  });
} else {
  document.body.innerHTML = "<h2>Fakultas tidak ditemukan</h2>";
}


