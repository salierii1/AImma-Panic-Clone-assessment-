import React from 'react'

const AssessmentStep = ({ title, description, children }) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      {description && <p className="mt-2 text-gray-600">{description}</p>}
      {children}
    </div>
  )
}

export default AssessmentStep