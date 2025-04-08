from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

API_KEY = "132239f6a2mshdb90976390caecfp19239ejsneb1c3e217797"
HEADERS = {
    "x-apisports-key": API_KEY
}

@app.get("/predict-goals")
def predict_goals():
    url = "https://v3.football.api-sports.io/fixtures?live=all"
    response = requests.get(url, headers=HEADERS)
    data = response.json()

    partidos_filtrados = []

    for match in data.get("response", []):
        fixture = match["fixture"]
        teams = match["teams"]
        goals = match["goals"]
        statistics = match.get("statistics", [])

        minuto = fixture["status"]["elapsed"]
        if minuto is None:
            continue

        # Lógica de predicción básica
        if minuto >= 1:
            partidos_filtrados.append({
                "partido": f"{teams['home']['name']} vs {teams['away']['name']}",
                "minuto": minuto,
                "goles": goals,
                "presion_ofensiva": "alta" if goals['home'] + goals['away'] > 1 else "media",
                "recomendacion": "probable +1 gol" if goals['home'] + goals['away'] <= 2 else "posible pausa en goles"
            })

    return {"partidos": partidos_filtrados}


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
