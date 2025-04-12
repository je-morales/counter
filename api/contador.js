
const { createCanvas, loadImage, registerFont } = require("canvas");

module.exports = async (req, res) => {
  registerFont(__dirname + "/Poppins-Bold.ttf", { family: "Poppins" });

  const canvas = createCanvas(322, 86);
  const ctx = canvas.getContext("2d");

  const bg = await loadImage(__dirname + "/contador.png");
  ctx.drawImage(bg, 0, 0);

  const now = new Date();
  const target = new Date("2025-04-29T05:59:59Z"); // 28 abril 2025 23:59:59 CDT
  const diff = Math.max(0, target - now);
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const d = String(days).padStart(2, '0');
  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');

  ctx.fillStyle = "#004951";
  ctx.font = "35pt Poppins";
  ctx.fillText(d, 21, 62);
  ctx.fillText(h, 136, 62);
  ctx.fillText(m, 259, 62);

  res.setHeader("Content-Type", "image/png");
  res.setHeader("Cache-Control", "no-cache");
  canvas.createPNGStream().pipe(res);
};
