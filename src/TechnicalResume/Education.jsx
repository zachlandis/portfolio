import React from 'react'
import { education } from '../assets/Resources'

function Education() {

  const sortedEducation = [...education].sort((a, b) => b.grad_year - a.grad_year);

  console.log(sortedEducation)
  return (
    <div>
        <h1>Education</h1>
          <div className='cards-container'>
            {sortedEducation.map((edu) => (
              <div className='card'>
                <div className='card-header'>
                  <h2>{edu.school}</h2>
                </div>
                <h3>{edu.degree} | {edu.grad_year}</h3>
              </div>

            ))}
          </div>
    </div>
  )
}

export default Education