import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { assessmentFlow } from '../../App/Utils/assessment-flow';
import './AssessmentFlow.css';

const AssessmentFlow = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { step } = useParams();
  const [currentStep, setCurrentStep] = useState(step || 'userType');
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState(null);

  const currentStepData = assessmentFlow[currentStep];

  useEffect(() => {
    if (step && step !== currentStep) {
      setCurrentStep(step);
    }
    console.log('Current Step:', currentStep);
    console.log('Current Step Data:', currentStepData);
  }, [step, currentStep, currentStepData]);

  const handleOptionSelect = (option) => {
    try {
      console.log('Selected Option:', option);
      const newAnswers = { ...answers, [currentStep]: option };
      setAnswers(newAnswers);
      
      const nextStep = option.nextStep || currentStepData.nextStep;
      if (nextStep) {
        console.log('Moving to step:', nextStep);
        setCurrentStep(nextStep);
        navigate(`/Assessment/${nextStep.toLowerCase()}`);
      }
    } catch (err) {
      console.error('Error in handleOptionSelect:', err);
      setError('An error occurred while processing your selection');
    }
  };

  const handleQuestionSubmit = (questionAnswers) => {
    try {
      console.log('Submitted Answers:', questionAnswers);
      const newAnswers = { ...answers, [currentStep]: questionAnswers };
      setAnswers(newAnswers);
      
      if (currentStepData.nextStep) {
        console.log('Moving to step:', currentStepData.nextStep);
        setCurrentStep(currentStepData.nextStep);
        navigate(`/Assessment/${currentStepData.nextStep.toLowerCase()}`);
      }
    } catch (err) {
      console.error('Error in handleQuestionSubmit:', err);
      setError('An error occurred while submitting your answers');
    }
  };

  const handleStartOver = () => {
    setCurrentStep('userType');
    setAnswers({});
    navigate('/Assessment');
  };

  if (error) {
    return (
      <div className="assessment-flow error">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={() => setError(null)}>Try Again</button>
        <button onClick={handleStartOver}>Start Over</button>
      </div>
    );
  }

  if (!currentStepData) {
    return (
      <div className="assessment-flow">
        <h2>Error: Step Not Found</h2>
        <p>Current step: {currentStep}</p>
        <button onClick={handleStartOver}>Start Over</button>
      </div>
    );
  }

  return (
    <div className="assessment-flow">
      <h2>{currentStepData.title}</h2>
      
      {currentStepData.options ? (
        <div className="options-grid">
          {currentStepData.options.map((option) => (
            <button
              key={option.id}
              className="option-button"
              onClick={() => handleOptionSelect(option)}
            >
              {option.icon && <span className="option-icon">{option.icon}</span>}
              <span className="option-label">{option.label}</span>
            </button>
          ))}
        </div>
      ) : currentStepData.questions ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const questionAnswers = {};
            currentStepData.questions.forEach((question) => {
              if (question.type === 'multiselect') {
                questionAnswers[question.id] = formData.getAll(question.id);
              } else {
                questionAnswers[question.id] = formData.get(question.id);
              }
            });
            handleQuestionSubmit(questionAnswers);
          }}
        >
          {currentStepData.questions.map((question) => (
            <div key={question.id} className="question-container">
              <label htmlFor={question.id}>{question.label}</label>
              
              {question.type === 'text' && (
                <input
                  type="text"
                  id={question.id}
                  name={question.id}
                  required={!question.optional}
                />
              )}
              
              {question.type === 'select' && (
                <select
                  id={question.id}
                  name={question.id}
                  required={!question.optional}
                >
                  <option value="">Select an option</option>
                  {question.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
              
              {question.type === 'multiselect' && (
                <div className="multiselect-options">
                  {question.options.map((option) => (
                    <label key={option}>
                      <input
                        type="checkbox"
                        name={question.id}
                        value={option}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}
              
              {question.type === 'boolean' && (
                <div className="boolean-options">
                  <label>
                    <input
                      type="radio"
                      name={question.id}
                      value="true"
                      required={!question.optional}
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={question.id}
                      value="false"
                      required={!question.optional}
                    />
                    No
                  </label>
                </div>
              )}
            </div>
          ))}
          <button type="submit">Next</button>
        </form>
      ) : null}

      <div className="debug-info" style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#666' }}>
        <p>Current Step: {currentStep}</p>
        <p>Current Path: {location.pathname}</p>
        <p>Available Next Steps: {currentStepData.nextStep || 'None'}</p>
        <button onClick={handleStartOver} className="debug-button">Start Over</button>
      </div>
    </div>
  );
};

export default AssessmentFlow; 