import React, { useState, useEffect } from 'react';

const Question = ({ onAnswer, question, dictionary, onNextQuestion }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    const generateShuffledAnswers = () => {
      const incorrectAnswers = dictionary
        .filter(item => item.term !== question.term)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(item => item.definition);

      const allAnswers = [question.definition, ...incorrectAnswers];
      return allAnswers.sort(() => Math.random() - 0.5);
    };

    setShuffledAnswers(generateShuffledAnswers());
    setSelectedAnswer(null);
    setShowAnswer(false);
  }, [question, dictionary]);

  const handleAnswerClick = (answer) => {
    const isCorrect = answer === question.definition
    setSelectedAnswer(answer);
    setShowAnswer(true);
    onAnswer(isCorrect); 
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    onNextQuestion();
  };

  return (
    <div>
      <h2>{question.term}</h2>
      <div>
        <ul>
        {shuffledAnswers.map((answer, index) => (
          <li><button
            className="questions"
            key={index}
            onClick={() => handleAnswerClick(answer)}
            disabled={showAnswer}
          >
            {answer}
          </button></li>
        ))}
        </ul>
      </div>
      {showAnswer && (
        <div>
          {selectedAnswer === question.definition ? (
            <p>正解!</p>
          ) : (
            <p>
              不正解! 答えは: {question.definition}
            </p>
          )}
          <button　class="genbtn" onClick={handleNextQuestion}>次</button>
        </div>
      )}
    </div>
  );
};

export default Question;