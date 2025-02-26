'use client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AssessmentLayout from '../../components/AssessmentLayout';
import AssessmentStep from '../../components/AssessmentStep';
import { assessmentFlow } from '../../Utils/assessment-flow';

export default function EducationLevel() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const navigate = useNavigate();

  // Add console.log to debug
  console.log('Assessment Flow:', assessmentFlow);
  console.log('Education Level:', assessmentFlow.educationLevel);

  const handleNext = () => {
    if (selectedLevel) {
      const nextPath = `/Assessment/${selectedLevel.nextStep.toLowerCase()}`;
      navigate(nextPath);
    }
  };

  return (
    <AssessmentLayout
      title="Education Level"
      progress={30}
      prevPage="/Assessment/user-type"
      nextPage={selectedLevel ? `/Assessment/${selectedLevel.nextStep.toLowerCase()}` : null}
    >
      <AssessmentStep title="What's your education level?">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {assessmentFlow.educationLevel.options.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedLevel(option)}
              className={`p-6 rounded-lg border-2 text-left transition-all duration-200 ${
                selectedLevel?.id === option.id
                  ? 'border-white bg-amber-800/50 text-white'
                  : 'border-amber-800/30 text-white/80 hover:border-amber-800/50'
              }`}
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl">{option.icon}</span>
                <div>
                  <h3 className="font-medium text-lg">{option.label}</h3>
                </div>
              </div>
            </button>
          ))}
        </div>
      </AssessmentStep>
    </AssessmentLayout>
  );
}