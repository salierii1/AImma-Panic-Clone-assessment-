'use client';
import { useState } from 'react';
import AssessmentLayout from '../../components/AssessmentLayout';
import AssessmentStep from '../../components/AssessmentStep';

export default function Language() {
  const [language, setLanguage] = useState('English');
  
  return (
    <AssessmentLayout 
      title="Preferred Language"
      progress={10}
      prevPage="/Assessment"
      nextPage="/Assessment/user-type"  
    >
      <AssessmentStep title="Choose a language">
        <p className="text-white mb-10">For your convenience</p>
        
        <div className="w-full max-w-md mx-auto">
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-11/12 p-3 rounded-2xl text-gray-800 text-center mb-6 border-2 border-white bg-white"
          >
            <option value="English">English</option>
            <option alue="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Japanese">Japanese</option>
            <option value="Chinese">Chinese</option>
          </select>
        </div>
      </AssessmentStep>
    </AssessmentLayout>
  );
}

