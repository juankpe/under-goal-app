import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent } from '@/components/ui/card';

export default function SavedMatches() {
  const [savedMatches, setSavedMatches] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/saved-matches/')
      .then((res) => setSavedMatches(res.data))
      .catch((err) => console.error('❌ Error al cargar partidos guardados', err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">📦 Partidos Guardados</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {savedMatches.map((match) => (
          <Card key={match.id} className="rounded-xl shadow">
            <CardContent>
              <h2 className="text-xl font-semibold">
                {match.home_team} vs {match.away_team}
              </h2>
              <p className="text-sm">Fecha: {new Date(match.date).toLocaleString()}</p>
              <p className="text-sm">Marcador: {match.goals_home} - {match.goals_away}</p>
              <p className="text-sm">xG: {match.xg} | Corners: {match.corners}</p>
              <p className="text-sm">BTTS: {match.btts} | Over 2.5: {match.over_25}%</p>
              <p className="text-sm font-semibold">🔍 Riesgo: {match.risk_level}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}