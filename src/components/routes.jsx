import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LiveMatches from './LiveMatches';
import SavedMatches from './SavedMatches';

export default function AppRoutes() {
  return (
    <Router>
      <div className="p-4 flex gap-4">
        <Link to="/" className="text-blue-600 font-semibold">🏟️ En Vivo</Link>
        <Link to="/guardados" className="text-blue-600 font-semibold">📦 Guardados</Link>
      </div>
      <Routes>
        <Route path="/" element={<LiveMatches />} />
        <Route path="/guardados" element={<SavedMatches />} />
      </Routes>
    </Router>
  );
}