const contenedor = document.getElementById("partidos");

fetch("/api/partidos")
  .then(res => res.json())
  .then(partidos => {
    if (partidos.length === 0) {
      contenedor.innerHTML = "<p>No hay partidos en este rango.</p>";
      return;
    }

    partidos.forEach(p => {
      const div = document.createElement("div");
      div.className = "partido";
      div.innerHTML = `
        <strong>${p.teams.home.name} vs ${p.teams.away.name}</strong><br>
        Minuto: ${p.fixture.status.elapsed}<br>
        Goles: ${p.goals.home} - ${p.goals.away}<br>
        Liga: ${p.league.name}
      `;
      contenedor.appendChild(div);
    });
  })
  .catch(err => {
    console.error("Error:", err);
    contenedor.innerHTML = "<p>Error al cargar los datos.</p>";
  });
