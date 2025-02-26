'use client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AssessmentLayout from '../../components/AssessmentLayout';
import AssessmentStep from '../../components/AssessmentStep';
import { assessmentFlow } from '../../Utils/assessment-flow';

export default function UserType() {
  const [selectedType, setSelectedType] = useState(null);
  const navigate = useNavigate();
  const { userType } = assessmentFlow;

  const handleNext = () => {
    if (selectedType) {
      const nextPath = selectedType.id === 'student' 
        ? '/Assessment/educationlevel'
        : `/Assessment/${selectedType.nextStep.toLowerCase()}`;
      navigate(nextPath);
    }
  };

  return (
    <AssessmentLayout
      title={userType.title}
      progress={20}
      prevPage="/Assessment/language"
      nextPage={selectedType ? `/Assessment/${selectedType.nextStep.toLowerCase()}` : null}
    >
      <AssessmentStep title={userType.title}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {userType.options.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedType(option)}
              className={`p-6 rounded-lg border-2 text-left transition-all duration-200 ${
                selectedType?.id === option.id
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