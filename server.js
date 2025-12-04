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

// Almacenamiento en memoria de servidores vivos
let liveBrainrots = [];

// Endpoint POST: los servidores publican su JobId y jugadores
app.post("/brainrots/live", (req, res) => {
  const { name, jobId, players } = req.body;

  if (!jobId) {
    return res.status(400).json({ ok: false, error: "Falta jobId" });
  }

  // Buscar si ya existe ese servidor
  const existing = liveBrainrots.find(b => b.jobId === jobId);
  if (existing) {
    existing.players = players;
    existing.name = name;
  } else {
    liveBrainrots.push({ name, jobId, players });
  }

  res.json({ ok: true });
});

// Endpoint GET: devuelve todos los brainrots vivos
app.get("/brainrots/live", (_, res) => {
  res.json(liveBrainrots);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Lexy AJ API running on port ${PORT}`));
