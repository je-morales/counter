
module.exports = async (req, res) => {
  const now = new Date();
  const target = new Date("2025-04-29T05:59:59Z"); // 28 de abril 2025 a las 23:59:59 CDT

  const diff = Math.max(0, target - now);
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const d = String(days).padStart(2, '0');
  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="322" height="86">
    <image href="https://github.com/je-morales/counter/blob/main/contador.png" x="0" y="0" height="86" width="322"/>
    <style>
      .number { font-family: 'Poppins', sans-serif; font-weight: bold; font-size: 35px; fill: #004951; }
    </style>
    <text x="21" y="49" class="number">${d}</text>
    <text x="136" y="49" class="number">${h}</text>
    <text x="259" y="49" class="number">${m}</text>
  </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "no-cache");
  res.send(svg);
};
