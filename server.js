const express = require("express");
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/api/partidos", async (req, res) => {
  const url = "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
      }
    });

    const data = await response.json();
    const filtrados = data.response.filter(p => {
      const minuto = p.fixture.status.elapsed;
      return minuto >= 30 && minuto <= 60;
    });

    res.json(filtrados);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error al obtener datos" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
