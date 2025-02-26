import React from 'react';
import ProgressBar from './ProgressBar';
import NavigationButtons from './NavigationButtons';

const AssessmentLayout = ({ children, title, progress, prevPage, nextPage, showMascot = true }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-900 to-amber-950">
      <ProgressBar progress={progress} title={title} />
      
      <div className="flex-grow flex flex-col items-center justify-center px-4 py-6 relative">
        <div className="w-full max-w-2xl">
          {children}
        </div>
        
        {showMascot && (
          <div className="absolute bottom-20 right-1/4">
            <img 
              src="/DetectiveCapybara.png" 
              alt="Mascot character" 
              className="w-32 h-32 object-contain"
            />
          </div>
        )}
      </div>
      
      <NavigationButtons prevPage={prevPage} nextPage={nextPage} />
    </div>
  );
}

export default AssessmentLayout;