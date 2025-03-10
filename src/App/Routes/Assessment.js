import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AssessmentFlow from '../../components/AssessmentFlow/AssessmentFlow';
import '../../components/AssessmentFlow/AssessmentFlow.css';

const Assessment = () => {
  return (
    <div className="assessment-page">
      <Routes>
        <Route index element={<AssessmentFlow />} />
        <Route path=":step" element={<AssessmentFlow />} />
      </Routes>
    </div>
  );
};

export default Assessment; 