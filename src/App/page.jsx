import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import '../styles/global.css'

// Import assessment pages
import EducationLevel from './Assessment/education-level/page'
import DailyGoal from './Assessment/daily-goal/page.jsx'
import Goals from './Assessment/goals/page.jsx'
import Language from './Assessment/language/page.jsx'
import Proficiency from './Assessment/proficiency/page.jsx'
import Questions from './Assessment/questions/page.jsx'
import Results from './Assessment/results/page.jsx'
import UserType from './Assessment/user-type/page'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Redirect root to first assessment step */}
          <Route path="/" element={<Navigate to="/Assessment/language" replace />} />
          
          {/* Assessment Routes */}
          <Route path="/Assessment/language" element={<Language />} />
          <Route path="/Assessment/educationlevel" element={<EducationLevel />} />
          <Route path="/Assessment/daily-goal" element={<DailyGoal />} />
          <Route path="/Assessment/goals" element={<Goals />} />
          <Route path="/Assessment/proficiency" element={<Proficiency />} />
          <Route path="/Assessment/questions" element={<Questions />} />
          <Route path="/Assessment/results" element={<Results />} />
          <Route path="/Assessment/user-type" element={<UserType />} />
        </Routes>
      </div>
    </Router>
  )
}

// Create root and render
const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

export default App 