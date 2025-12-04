const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => res.json({ ok: true, service: "Lexy AJ Brainrot API" }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Lexy AJ API running on port ${PORT}`));
