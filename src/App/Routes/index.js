import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Assessment from './Assessment';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Assessment" replace />} />
      <Route path="/Assessment/*" element={<Assessment />} />
    </Routes>
  );
};

export default AppRoutes; 