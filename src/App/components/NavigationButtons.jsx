import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationButtons = ({ prevPage, nextPage }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-amber-800 p-4">
      <div className="container mx-auto flex justify-between">
        {prevPage && (
          <button
            onClick={() => navigate(prevPage)}
            className="px-6 py-2 bg-amber-950 text-white rounded-lg hover:bg-amber-900 transition-colors"
          >
            Back
          </button>
        )}
        {nextPage && (
          <button
            onClick={() => navigate(nextPage)}
            className="px-6 py-2 bg-amber-950 text-white rounded-lg hover:bg-amber-900 transition-colors ml-auto"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default NavigationButtons;