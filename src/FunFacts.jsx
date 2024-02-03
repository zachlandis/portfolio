import React, { useState } from 'react';
import { funFactQuestions } from './assets/Resources';

function FunFacts() {
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState(funFactQuestions);
  
    const handleSelectChange = (questionIndex, selectedOption) => {
      const updatedQuestions = questions.map((question, index) => {
        if (index === questionIndex) {
          const isCorrect = selectedOption === question.correctAnswer;
          return {
            ...question,
            userAnswer: selectedOption,
            isCorrect: isCorrect,
          };
        }
        return question;
      });
  
      setQuestions(updatedQuestions);
  
      const newScore = updatedQuestions.filter(q => q.isCorrect).length;
      setScore(newScore);
    };
  
    return (
      <div>
        <div className='fun-facts-description-container'>
          <div className='fun-facts-description'>
            <h1>Play the 'Fun Facts' Game</h1>
            <p>Answer the questions correctly and get the high score!</p>
          </div>
          <div className='fun-facts-score-container'>
                {score < 3 
                ? 
                <div>
                    <h4>Your Score</h4>
                </div>
                    : 
                    <div>
                        <h4>High Score Acheived!</h4>
                    </div>
                    }
                    <h4>{score}/3</h4> 
            </div>
        </div>
        {questions.map((question, index) => (
          <div key={index} className='fun-facts-game'>
            <label>{question.question}</label>
            <select
              value={question.userAnswer || 'Guess Here'}
              onChange={(e) => handleSelectChange(index, e.target.value)}
            >
              <option value='Guess Here'>Guess Here</option>
              {question.options.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>{option}</option>
              ))}
            </select>
            <p className={question.isCorrect ? 'answer-correct' : question.userAnswer ? 'answer-incorrect' : ''}>
              {question.userAnswer && (
                question.isCorrect ? question.correctResponse : "That's not right, guess again!"
              )}
            </p>
          </div>
        ))}
      </div>
    );
  }
  

export default FunFacts;
