import React from 'react'
import { technicalSkills } from '../assets/Resources'
import { softSkills } from '../assets/Resources'
import TechnicalProjects from './TechnicalProjects';
import Skills from './Skills';
import Education from './Education';

function TechnicalResume() {
  return (
    <div>
        <Skills />
        <TechnicalProjects />
        <Education />
    </div>
  )
}

export default TechnicalResume