import React, { useState } from 'react';
import './Assessment.css';

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState('userType');
  const [answers, setAnswers] = useState({});

  const assessmentSteps = {
    userType: {
      title: 'Are you currently...',
      options: [
        { id: 'student', label: 'Student', icon: '🎓', next: 'educationLevel' },
        { id: 'professional', label: 'Working Professional', icon: '</>', next: 'experience' },
        { id: 'jobSeeker', label: 'Job Seeker', icon: '💼', next: 'experience' },
        { id: 'careerShifter', label: 'Career Shifter', icon: '🔄', next: 'experience' }
      ]
    },
    educationLevel: {
      title: 'What is your education level?',
      options: [
        { id: 'highSchool', label: 'High School', next: 'dailyGoal' },
        { id: 'college', label: 'College', next: 'dailyGoal' },
        { id: 'graduate', label: 'Graduate School', next: 'dailyGoal' }
      ]
    },
    experience: {
      title: 'Years of Experience',
      options: [
        { id: 'entry', label: '0-2 years', next: 'dailyGoal' },
        { id: 'mid', label: '3-5 years', next: 'dailyGoal' },
        { id: 'senior', label: '5+ years', next: 'dailyGoal' }
      ]
    },
    dailyGoal: {
      title: 'How much time can you commit daily?',
      options: [
        { id: '15min', label: '15 minutes', next: 'interests' },
        { id: '30min', label: '30 minutes', next: 'interests' },
        { id: '1hour', label: '1 hour', next: 'interests' },
        { id: '2hours', label: '2 hours', next: 'interests' }
      ]
    },
    interests: {
      title: 'What are your interests?',
      options: [
        { id: 'programming', label: 'Programming', icon: '💻', next: 'complete' },
        { id: 'webdev', label: 'Web Development', icon: '🌐', next: 'complete' },
        { id: 'ai', label: 'AI/Machine Learning', icon: '🤖', next: 'complete' },
        { id: 'data', label: 'Data Science', icon: '📊', next: 'complete' },
        { id: 'cyber', label: 'Cybersecurity', icon: '🔒', next: 'complete' }
      ]
    },
    complete: {
      title: 'Assessment Complete!',
      message: 'Thank you for completing the assessment.'
    }
  };

  const handleSelect = (option) => {
    setAnswers({ ...answers, [currentStep]: option });
    if (option.next) {
      setCurrentStep(option.next);
    }
  };

  const currentStepData = assessmentSteps[currentStep];

  if (!currentStepData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="assessment-container">
      <div className="assessment-content">
        <h2>{currentStepData.title}</h2>
        
        {currentStepData.options ? (
          <div className="options-grid">
            {currentStepData.options.map((option) => (
              <button
                key={option.id}
                className="option-button"
                onClick={() => handleSelect(option)}
              >
                {option.icon && <span className="option-icon">{option.icon}</span>}
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="complete-message">
            <p>{currentStepData.message}</p>
            <button onClick={() => setCurrentStep('userType')}>Start Over</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Assessment; 