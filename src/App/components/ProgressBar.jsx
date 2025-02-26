import React from 'react';

const ProgressBar = ({ progress, title }) => {
  return (
    <div className="w-full bg-amber-800 p-4">
      <div className="container mx-auto">
        <h1 className="text-white text-xl font-semibold">{title}</h1>
        <div className="w-full bg-amber-950 rounded-full h-2 mt-2">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;