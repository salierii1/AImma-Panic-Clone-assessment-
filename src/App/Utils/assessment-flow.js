export const assessmentSteps = [
  {
    id: 1,
    path: '/Assessment/educationlevel',
    title: 'Education Level',
  },
  {
    id: 2,
    path: '/Assessment/daily-goal',
    title: 'Daily Learning Goal',
  },
  {
    id: 3,
    path: '/Assessment/interests',
    title: 'Learning Interests',
  },
  {
    id: 4,
    path: '/Assessment/experience',
    title: 'Prior Experience',
  }
];

export const educationLevels = [
  { id: 1, label: 'High School', value: 'high_school' },
  { id: 2, label: 'College', value: 'college' },
  { id: 3, label: 'Graduate', value: 'graduate' },
  { id: 4, label: 'Self-taught', value: 'self_taught' },
];

export const dailyGoals = [
  { id: 1, label: '15 minutes', value: 15 },
  { id: 2, label: '30 minutes', value: 30 },
  { id: 3, label: '1 hour', value: 60 },
  { id: 4, label: '2 hours', value: 120 },
];

export const assessmentFlow = {
  start: {
    nextStep: 'userType',
    title: 'Start Assessment',
  },

  userType: {
    title: 'Are you currently...',
    options: [
      { id: 'student', label: 'Student', icon: '🎓', nextStep: 'educationLevel' },
      { id: 'professional', label: 'Working Professional', icon: '</>', nextStep: 'yearsExperience' },
      { id: 'jobSeeker', label: 'Job Seeker', icon: '💼', nextStep: 'previousExperience' },
      { id: 'careerShifter', label: 'Career Shifter', icon: '🔄', nextStep: 'transitionType' }
    ]
  },

  educationLevel: {
    title: 'Education Level',
    options: [
      { id: 'highSchool', label: 'High School', icon: '🏫', nextStep: 'hsQuestions' },
      { id: 'college', label: 'College', icon: '🏛️', nextStep: 'collegeQuestions' },
      { id: 'graduateSchool', label: 'Graduate School', icon: '🎓', nextStep: 'gradQuestions' }
    ]
  },

  hsQuestions: {
    title: 'High School Track',
    questions: [
      { id: 'strand', label: 'Which strand are you currently in?', type: 'select', 
        options: ['STEM', 'ICT', 'Other'] },
      { id: 'planningCollege', label: 'Are you planning to go to college?', type: 'boolean' },
      { id: 'interestAreas', label: 'What are your areas of interest in technology?', type: 'multiselect',
        options: ['Programming', 'Networking', 'Web Development', 'Game Development', 'AI/Machine Learning'] },
      { id: 'careerGoals', label: 'What are your career goals?', type: 'text' }
    ],
    nextStep: 'techInterest'
  },

  collegeQuestions: {
    title: 'College Path',
    questions: [
      { id: 'yearLevel', label: 'What year level are you in?', type: 'select',
        options: ['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year+'] },
      { id: 'currentCourse', label: 'What is your current course?', type: 'text' },
      { id: 'internshipStatus', label: 'Have you completed any internships?', type: 'boolean' },
      { id: 'targetIndustry', label: 'Which industry are you targeting?', type: 'select',
        options: ['Software Development', 'Data Science', 'Cybersecurity', 'Web Development', 'Game Development', 'Other'] }
    ],
    nextStep: 'specificSkills'
  },

  gradQuestions: {
    title: 'Graduate Path',
    questions: [
      { id: 'fieldStudy', label: 'What is your field of study?', type: 'text' },
      { id: 'researchFocus', label: 'What is your research focus?', type: 'text' },
      { id: 'industryExperience', label: 'Do you have industry experience?', type: 'boolean' },
      { id: 'careerPlans', label: 'What are your career plans after graduation?', type: 'text' },
      { id: 'technicalExpertise', label: 'Rate your technical expertise level', type: 'range', min: 1, max: 5 },
      { id: 'researchInterests', label: 'What are your research interests?', type: 'multiselect',
        options: ['AI/ML', 'Data Science', 'Computer Vision', 'Cybersecurity', 'Robotics', 'Human-Computer Interaction', 'Other'] }
    ],
    nextStep: 'researchFocus'
  },

  yearsExperience: {
    title: 'Years of Experience',
    options: [
      { id: 'entryLevel', label: '0-2 years', icon: '1️⃣', nextStep: 'entryQuestions' },
      { id: 'midLevel', label: '3-5 years', icon: '2️⃣', nextStep: 'midQuestions' },
      { id: 'seniorLevel', label: '5+ years', icon: '3️⃣', nextStep: 'seniorQuestions' }
    ]
  },

  entryQuestions: {
    title: 'Entry Level Track',
    questions: [
      { id: 'currentRole', label: 'What is your current role?', type: 'text' },
      { id: 'companyIndustry', label: 'What industry is your company in?', type: 'select',
        options: ['Technology', 'Finance', 'Healthcare', 'Education', 'E-commerce', 'Manufacturing', 'Other'] },
      { id: 'skillsUsed', label: 'What skills have you used in your current role?', type: 'multiselect',
        options: ['Programming', 'Networking', 'Web Development', 'Game Development', 'AI/Machine Learning', 'Data Analysis', 'Cybersecurity', 'Project Management', 'Other'] }
    ],
    nextStep: 'techInterest'
  },

  midQuestions: {
    title: 'Middle Level Track',
    questions: [
      { id: 'currentRole', label: 'What is your current role?', type: 'text' },
      { id: 'companyIndustry', label: 'What industry is your company in?', type: 'select',
        options: ['Technology', 'Finance', 'Healthcare', 'Education', 'E-commerce', 'Manufacturing', 'Other'] },
      { id: 'skillsUsed', label: 'What skills have you used in your current role?', type: 'multiselect',
        options: ['Programming', 'Networking', 'Web Development', 'Game Development', 'AI/Machine Learning', 'Data Analysis', 'Cybersecurity', 'Project Management', 'Other'] }
    ],
    nextStep: 'techInterest'
  },

  seniorQuestions: {
    title: 'Senior Level Track',
    questions: [
      { id: 'currentRole', label: 'What is your current role?', type: 'text' },
      { id: 'companyIndustry', label: 'What industry is your company in?', type: 'select',
        options: ['Technology', 'Finance', 'Healthcare', 'Education', 'E-commerce', 'Manufacturing', 'Other'] },
      { id: 'skillsUsed', label: 'What skills have you used in your current role?', type: 'multiselect',
        options: ['Programming', 'Networking', 'Web Development', 'Game Development', 'AI/Machine Learning', 'Data Analysis', 'Cybersecurity', 'Project Management', 'Other'] }
    ],
    nextStep: 'techInterest'
  },

  techInterest: {
    title: 'Tech Interest',
    options: [
      { id: 'programming', label: 'Programming', icon: '💻', nextStep: 'programmingQuestions' },
      { id: 'networking', label: 'Networking', icon: '📡', nextStep: 'networkingQuestions' },
      { id: 'webDevelopment', label: 'Web Development', icon: '🌐', nextStep: 'webDevelopmentQuestions' },
      { id: 'gameDevelopment', label: 'Game Development', icon: '🎮', nextStep: 'gameDevelopmentQuestions' },
      { id: 'aiMachineLearning', label: 'AI/Machine Learning', icon: '🤖', nextStep: 'aiMachineLearningQuestions' },
      { id: 'dataScience', label: 'Data Science', icon: '📊', nextStep: 'dataScienceQuestions' },
      { id: 'cybersecurity', label: 'Cybersecurity', icon: '🔒', nextStep: 'cybersecurityQuestions' },
      { id: 'robotics', label: 'Robotics', icon: '🤖', nextStep: 'roboticsQuestions' },
      { id: 'humanComputerInteraction', label: 'Human-Computer Interaction', icon: '👤💻', nextStep: 'humanComputerInteractionQuestions' },
      { id: 'other', label: 'Other', icon: '��', nextStep: 'otherInterests' }
    ]
  },

  programmingQuestions: {
    title: 'Programming Track',
    questions: [
      { id: 'programmingLanguages', label: 'Which programming languages do you know?', type: 'multiselect',
        options: ['JavaScript', 'Python', 'Java', 'C#', 'C++', 'PHP', 'Ruby', 'Go', 'Swift', 'Other'] },
      { id: 'frameworkExperience', label: 'What frameworks have you worked with?', type: 'multiselect',
        options: ['React', 'Angular', 'Vue', 'Django', 'Flask', 'Spring', '.NET', 'Laravel', 'Ruby on Rails', 'Other'] },
      { id: 'programmingGoals', label: 'What are your programming goals?', type: 'text' }
    ],
    nextStep: 'programmingGoals'
  },

  networkingQuestions: {
    title: 'Networking Track',
    questions: [
      { id: 'networkingSkills', label: 'What networking skills do you have?', type: 'multiselect',
        options: ['Cisco Networking', 'CCNA', 'CCNP', 'Cisco Meraki', 'Juniper Networks', 'Aruba Networks', 'Other'] },
      { id: 'networkingGoals', label: 'What are your networking goals?', type: 'text' }
    ],
    nextStep: 'networkingGoals'
  },

  webDevelopmentQuestions: {
    title: 'Web Development Track',
    questions: [
      { id: 'webDevelopmentSkills', label: 'What web development skills do you have?', type: 'multiselect',
        options: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Vue', 'Django', 'Flask', 'Spring', '.NET', 'Laravel', 'Ruby on Rails', 'Other'] },
      { id: 'webDevelopmentGoals', label: 'What are your web development goals?', type: 'text' }
    ],
    nextStep: 'webDevelopmentGoals'
  },

  gameDevelopmentQuestions: {
    title: 'Game Development Track',
    questions: [
      { id: 'gameDevelopmentSkills', label: 'What game development skills do you have?', type: 'multiselect',
        options: ['Unity', 'Unreal Engine', 'Godot', 'GameMaker Studio', 'Construct', 'Other'] },
      { id: 'gameDevelopmentGoals', label: 'What are your game development goals?', type: 'text' }
    ],
    nextStep: 'gameDevelopmentGoals'
  },

  aiMachineLearningQuestions: {
    title: 'AI/Machine Learning Track',
    questions: [
      { id: 'aiMachineLearningSkills', label: 'What AI/Machine Learning skills do you have?', type: 'multiselect',
        options: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Other'] },
      { id: 'aiMachineLearningGoals', label: 'What are your AI/Machine Learning goals?', type: 'text' }
    ],
    nextStep: 'aiMachineLearningGoals'
  },

  dataScienceQuestions: {
    title: 'Data Science Track',
    questions: [
      { id: 'dataScienceSkills', label: 'What data science skills do you have?', type: 'multiselect',
        options: ['Python', 'R', 'SQL', 'Tableau', 'Power BI', 'Other'] },
      { id: 'dataScienceGoals', label: 'What are your data science goals?', type: 'text' }
    ],
    nextStep: 'dataScienceGoals'
  },

  cybersecurityQuestions: {
    title: 'Cybersecurity Track',
    questions: [
      { id: 'cybersecuritySkills', label: 'What cybersecurity skills do you have?', type: 'multiselect',
        options: ['Cisco Networking', 'CCNA', 'CCNP', 'Cisco Meraki', 'Juniper Networks', 'Aruba Networks', 'Other'] },
      { id: 'cybersecurityGoals', label: 'What are your cybersecurity goals?', type: 'text' }
    ],
    nextStep: 'cybersecurityGoals'
  },

  roboticsQuestions: {
    title: 'Robotics Track',
    questions: [
      { id: 'roboticsSkills', label: 'What robotics skills do you have?', type: 'multiselect',
        options: ['Arduino', 'Raspberry Pi', 'ROS', 'ROS2', 'Other'] },
      { id: 'roboticsGoals', label: 'What are your robotics goals?', type: 'text' }
    ],
    nextStep: 'roboticsGoals'
  },

  humanComputerInteractionQuestions: {
    title: 'Human-Computer Interaction Track',
    questions: [
      { id: 'humanComputerInteractionSkills', label: 'What human-computer interaction skills do you have?', type: 'multiselect',
        options: ['User Experience (UX)', 'User Interface (UI)', 'Interaction Design', 'Other'] },
      { id: 'humanComputerInteractionGoals', label: 'What are your human-computer interaction goals?', type: 'text' }
    ],
    nextStep: 'humanComputerInteractionGoals'
  },

  otherInterests: {
    title: 'Other Interests',
    questions: [
      { id: 'otherInterests', label: 'What other interests do you have?', type: 'text' }
    ],
    nextStep: 'otherInterestsGoals'
  },

  programmingGoals: {
    title: 'Programming Goals',
    questions: [
      { id: 'programmingGoals', label: 'What are your programming goals?', type: 'text' }
    ],
    nextStep: 'programmingGoals'
  },

  networkingGoals: {
    title: 'Networking Goals',
    questions: [
      { id: 'networkingGoals', label: 'What are your networking goals?', type: 'text' }
    ],
    nextStep: 'networkingGoals'
  },

  webDevelopmentGoals: {
    title: 'Web Development Goals',
    questions: [
      { id: 'webDevelopmentGoals', label: 'What are your web development goals?', type: 'text' }
    ],
    nextStep: 'webDevelopmentGoals'
  },

  gameDevelopmentGoals: {
    title: 'Game Development Goals',
    questions: [
      { id: 'gameDevelopmentGoals', label: 'What are your game development goals?', type: 'text' }
    ],
    nextStep: 'gameDevelopmentGoals'
  },

  aiMachineLearningGoals: {
    title: 'AI/Machine Learning Goals',
    questions: [
      { id: 'aiMachineLearningGoals', label: 'What are your AI/Machine Learning goals?', type: 'text' }
    ],
    nextStep: 'aiMachineLearningGoals'
  },

  dataScienceGoals: {
    title: 'Data Science Goals',
    questions: [
      { id: 'dataScienceGoals', label: 'What are your data science goals?', type: 'text' }
    ],
    nextStep: 'dataScienceGoals'
  },

  cybersecurityGoals: {
    title: 'Cybersecurity Goals',
    questions: [
      { id: 'cybersecurityGoals', label: 'What are your cybersecurity goals?', type: 'text' }
    ],
    nextStep: 'cybersecurityGoals'
  },

  roboticsGoals: {
    title: 'Robotics Goals',
    questions: [
      { id: 'roboticsGoals', label: 'What are your robotics goals?', type: 'text' }
    ],
    nextStep: 'roboticsGoals'
  },

  humanComputerInteractionGoals: {
    title: 'Human-Computer Interaction Goals',
    questions: [
      { id: 'humanComputerInteractionGoals', label: 'What are your human-computer interaction goals?', type: 'text' }
    ],
    nextStep: 'humanComputerInteractionGoals'
  },

  otherInterestsGoals: {
    title: 'Other Interests Goals',
    questions: [
      { id: 'otherInterestsGoals', label: 'What are your other interests goals?', type: 'text' }
    ],
    nextStep: 'otherInterestsGoals'
  }
};

// Export common question types that can be reused
export const questionTypes = {
  programming: {
    languages: ['JavaScript', 'Python', 'Java', 'C#', 'C++', 'PHP', 'Ruby', 'Go', 'Swift'],
    frameworks: ['React', 'Angular', 'Vue', 'Django', 'Flask', 'Spring', '.NET', 'Laravel', 'Ruby on Rails'],
    levels: ['Beginner', 'Intermediate', 'Advanced']
  },
  industries: [
    'Technology',
    'Finance',
    'Healthcare',
    'Education',
    'E-commerce',
    'Manufacturing',
    'Other'
  ],
  timeCommitment: [
    { value: 15, label: '15 minutes' },
    { value: 30, label: '30 minutes' },
    { value: 60, label: '1 hour' },
    { value: 120, label: '2 hours' }
  ]
};