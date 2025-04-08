# ⚽ UnderGoal Frontend

Interfaz web en React para predecir en vivo si habrá más goles en un partido de fútbol, basada en estadísticas avanzadas y datos de presión ofensiva.

## 🚀 Funcionalidades

- Visualización de partidos en vivo (minuto a minuto).
- Cálculo de riesgo de goles según xG, ataques, tiros, fatiga y más.
- Integración con predicciones BTTS y Over 2.5.
- Gráficas de presión ofensiva.
- Guardado automático en backend (FastAPI).
- Sección para consultar partidos guardados.

## 🧪 Tecnologías

- React 18 + Vite
- React Router DOM
- Axios
- Recharts
- Tailwind CSS (opcional)
- Backend: FastAPI + SQLite/PostgreSQL

## 🔗 Rutas principales

- `/` → Partidos en vivo
- `/guardados` → Partidos guardados

## 🛠️ Instalación

```bash
git clone https://github.com/tuusuario/undergoal-frontend.git
cd undergoal-frontend
npm install
npm run dev
```

> Asegúrate de que el backend esté corriendo en http://localhost:8000

## 🌐 Despliegue

Recomendado: [Vercel](https://vercel.com)

```bash
npm run build
```

Sube la carpeta generada por Vite (`dist/`) a tu plataforma de hosting preferida.

## 📡 Conectar con el backend

Este frontend se conecta automáticamente al backend de FastAPI vía `http://localhost:8000`.

Si lo subes a producción, actualiza las URLs de `axios` en `LiveMatches.jsx` y `SavedMatches.jsx`.

## 👨‍💻 Desarrollado por

Proyecto asistido por IA (ChatGPT + Usuario experto)