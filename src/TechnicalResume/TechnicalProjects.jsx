import React from 'react'
import { technicalProjects } from '../assets/Resources'

export default function TechnicalProjects() {
   
    function splitAtPeriod(actions) {
        const sentences = actions.split('.');
        const filteredSentences = sentences.filter(sentence => sentence.trim().length > 0);
        return filteredSentences.map((sentence, index) => {
            const [firstPart, ...rest] = sentence.trim().split(':');
            const restJoined = rest.join(':'); 
        
            return (
            <span key={index}>
                <strong>{`${index + 1}. ${firstPart.trim()}:`}</strong>{rest.length > 0 ? `${restJoined}.` : '.'}
                <br />
            </span>
            );
        });
        }

  return (
    <div>
        <h1>Technical Projects</h1>
          <div className='cards-container'>
            {technicalProjects.map((project, index) => (
              <div key={index} className='card'>
                <div className='card-header'>
                  <h2>{project.name}</h2>
                  <a 
                    href={project.github}
                    target="_blank"
                    ><img 
                    className='github-icon'
                    src='/github.png'
                    />
                  </a>
                </div>
                <div>
                    <h3 className='project-description'>{project.description}</h3>
                </div>
                <div className='left-align'>
                  {splitAtPeriod(project.actions)}
                </div>
              </div>

            ))}
          </div>
    </div>
  )
}
