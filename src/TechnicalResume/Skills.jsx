import React from 'react'
import { technicalSkills } from '../assets/Resources'
import { softSkills } from '../assets/Resources'
import { professionalSkills } from '../assets/Resources'

function Skills() {
  return (
    <div>
        <div className='skill-lists'>
        <div>
          <h3>Technical Skills</h3>
            <div className='skill-list'>
              <ul>
                {technicalSkills.sort().map((language, index) => (
                  <li key={index}>{language}</li>))}
              </ul>
            </div>
          </div>
        <div>
            <h3>Non-Technical Skills</h3>
            <div className='skill-list'>
                <ul>
                    {professionalSkills.sort().map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
        <div>
          <h3>Soft Skills</h3>
            <div className='skill-list'>
              <ul>
                {softSkills.sort().map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills