const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Ruta raíz
app.get("/", (_, res) => {
  res.json({ ok: true, message: "Lexy AJ Brainrot API online" });
});

// Ruta de salud
app.get("/health", (_, res) => {
  res.json({ ok: true, service: "Lexy AJ Brainrot API" });
});

// Datos de prueba
const brainrots = [
  { name: "Golden Brainrot", price: 100000000, mps: 5500000 },
  { name: "Ultra Brainrot", price: 80000000, mps: 4200000 },
  { name: "Basic Brainrot", price: 50000000, mps: 2500000 }
];

// Endpoint de brainrots
app.get("/brainrots", (_, res) => {
  res.json(brainrots);
});

// Endpoint top brainrots
app.get("/brainrots/top", (req, res) => {
  const limit = parseInt(req.query.limit) || 3;
  const sorted = [...brainrots].sort((a, b) => b.price - a.price);
  res.json(sorted.slice(0, limit));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Lexy AJ API running on port ${PORT}`));
