import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Assessment from './components/Assessment/Assessment';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/assessment" replace />} />
        <Route path="/assessment" element={<Assessment />} />
      </Routes>
    </Router>
  );
};

export default App; 