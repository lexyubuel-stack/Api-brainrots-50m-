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

// Datos de prueba (puedes reemplazar con datos reales)
const liveBrainrots = [
  {
    name: "Golden Brainrot",
    jobId: "12345678-aaaa-bbbb-cccc-1234567890ab",
    players: 12
  },
  {
    name: "Ultra Brainrot",
    jobId: "87654321-bbbb-cccc-dddd-0987654321ba",
    players: 8
  }
];

// Endpoint de brainrots vivos
app.get("/brainrots/live", (_, res) => {
  res.json(liveBrainrots);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Lexy AJ API running on port ${PORT}`));
