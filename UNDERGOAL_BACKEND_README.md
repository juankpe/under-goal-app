# ⚽ UnderGoal Backend (FastAPI + SQLite)

Este backend permite guardar y consultar partidos de fútbol en vivo analizados por la app de predicción de goles.

## 🚀 Funcionalidades

- `POST /save-match/`: Guarda un partido analizado
- `GET /saved-matches/`: Devuelve todos los partidos guardados
- Base de datos local SQLite (`undergoal.db`)
- Preparado para migrar fácilmente a PostgreSQL

## 🧪 Tecnologías

- FastAPI
- SQLAlchemy
- SQLite
- Pydantic
- Uvicorn

## 🛠️ Instalación local

1. Clonar el repositorio:

```bash
git clone https://github.com/tuusuario/undergoal-backend.git
cd undergoal-backend
```

2. Instalar dependencias:

```bash
pip install -r requirements.txt
```

3. Ejecutar el servidor:

```bash
uvicorn app.main:app --reload
```

## 🧩 Endpoints

- `POST /save-match/`  
  Recibe un JSON con los datos del partido y lo guarda en SQLite

- `GET /saved-matches/`  
  Devuelve todos los partidos guardados como lista JSON

## 🌐 Despliegue en Render.com

- Crear nuevo Web Service
- Entorno: Python 3.11
- Comando de inicio:

```bash
uvicorn app.main:app --host=0.0.0.0 --port=10000
```

- Plan gratuito ✅

## 📁 Estructura del proyecto

```
.
├── app/
│   ├── main.py
│   ├── models.py
│   ├── schemas.py
│   ├── crud.py
│   └── database.py
├── undergoal.db
└── requirements.txt
```

## 👨‍💻 Desarrollado por

Proyecto asistido por IA (ChatGPT + Usuario experto)