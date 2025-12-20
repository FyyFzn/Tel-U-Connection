// Database fakultas
const fakultasData = {
  fit: {
    nama: "Fakultas Ilmu Terapan",
    subTitle: "School of Applied Science",
    gambar: "media/TU-logogram-238x300.jpg",
    hero: "media/FIT.png",
    deskripsi: "Fakultas Ilmu Terapan fokus pada pendidikan vokasi dan praktik industri.",
    colors: ["#18a63a", "#47c95a", "#a6e86f"],
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
    colors: ["#b91c1c", "#f97316", "#b91c1c"],
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
    colors: ["#1d4ed8", "#3b82f6", "#1d4ed8"],
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

  // Hero section
  const heroSection = document.getElementById("heroSection");
  if (heroSection && data.colors) {
    const [c1, c2, c3] = data.colors;
    heroSection.style.backgroundImage =
      `linear-gradient(to right, ${c1}, ${c2}, ${c3})`;
    heroSection.style.position = "relative";
    heroSection.style.minHeight = "300px";
    heroSection.style.overflow = "hidden";
  }

  // Hero image (logo besar di tengah)
  const heroImg = document.getElementById("heroImage");
  if (heroImg && data.hero) {
    heroImg.src = data.hero;
    heroImg.style.position = "absolute";
    heroImg.style.inset = "0";
    heroImg.style.margin = "auto";
    heroImg.style.maxHeight = "80%";
    heroImg.style.opacity = "0.15";
    heroImg.style.zIndex = "1";
  }

  // Pastikan konten teks di atas background/gambar
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.style.position = "relative";
    heroContent.style.zIndex = "2";
  }

  // Tombol subscribe di hero (pastikan ada di HTML)
  const subscribeBtn = document.getElementById("subscribeBtn");
  if (subscribeBtn) {
    // Posisi di pojok kanan bawah hero, masih di dalam background
    const parent = subscribeBtn.parentElement;
    if (parent) {
      parent.style.position = "absolute";
      parent.style.right = "20px";
      parent.style.bottom = "20px";
      parent.style.zIndex = "2";
    }

    subscribeBtn.addEventListener("click", () => {
      const key = "subscribedFakultas";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");

      if (!existing.includes(id)) {
        existing.push(id);
        localStorage.setItem(key, JSON.stringify(existing));
        alert(`Berhasil subscribe kategori ${data.nama}`);
      } else {
        alert(`Kamu sudah subscribe kategori ${data.nama}`);
      }
    });
  }

  // List prodi (BAGIAN YANG DIGANTI → kirim juga fakultas)
  const prodiList = document.getElementById("prodiList");
  if (prodiList) {
    data.prodi.forEach((prodi, index) => {
      const li = document.createElement("li");

      // Buat link ke halaman detail-prodi.html
      const link = document.createElement("a");
      link.textContent = prodi;

      // index di sini harus sama dengan id di array prodiData pada detail-prodi.js
      // kirim fakultas + id prodi
      link.href =
        `detail-prodi.html?fakultas=${encodeURIComponent(id)}&id=${encodeURIComponent(index)}`;

      link.style.textDecoration = "none";
      link.style.color = "inherit";
      link.style.cursor = "pointer";

      li.appendChild(link);
      prodiList.appendChild(li);
    });
  }
}
