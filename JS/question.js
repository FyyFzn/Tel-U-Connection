const params = new URLSearchParams(window.location.search);
const query = params.get("q");

document.getElementById("query").textContent = query;

// Simulasi hasil AI
const aiResults = [
  "Bagaimana cara mengatur jadwal kuliah di Telkom University?",
  "Tips memilih mata kuliah agar tidak bentrok",
  "Pengalaman mahasiswa FIT tentang sistem perkuliahan",
  "Cara mengajukan cuti akademik di Tel-U"
];

const resultsContainer = document.getElementById("results");

aiResults.forEach(item => {
  const card = document.createElement("div");
  card.className = "question-card";
  card.innerHTML = `
    <h3>${item}</h3>
    <p>Diskusi • Relevan dengan pencarian Anda</p>
  `;
  resultsContainer.appendChild(card);
});
