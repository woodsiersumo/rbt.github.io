import React, { useState, useEffect } from 'react';
import Home from './Home';
import Question from './Question';
import Summary from './Summary';
import { lvl1Questions, lvl2Questions, lvl3Questions, lvl4Questions, lvl5Questions } from './questionbase';
import './App.css';

const App = () => {
  const [showHome, setShowHome] = useState(true);
  const [difficulty, setDifficulty] = useState('');
  const [numQuestions, setNumQuestions] = useState(10);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    let selectedQuestions = [];
    switch (difficulty) {
      case 'lvl1':
        selectedQuestions = lvl1Questions;
        break;
      case 'lvl2':
        selectedQuestions = lvl2Questions;
        break;
      case 'lvl3':
        selectedQuestions = lvl3Questions;
        break;
      case 'lvl4':
        selectedQuestions = lvl4Questions;
        break;
      case 'lvl5':
        selectedQuestions = lvl5Questions; 
        break;
      case 'lvl6':
        selectedQuestions = []; 
        break;
      default:
        selectedQuestions = lvl1Questions;
    }
    setQuestions(selectedQuestions.sort(() => 0.5 - Math.random()).slice(0, numQuestions));
  }, [difficulty, numQuestions]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1); 
    }
  };
  const handleRestart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowSummary(false);
    setShowHome(true);
  };

  const handleStartQuiz = (selectedDifficulty, selectedNumQuestions) => {
    setDifficulty(selectedDifficulty);
    setNumQuestions(selectedNumQuestions);
    setShowHome(false);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < numQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowSummary(true);
    }
  };

  if (showHome) {
    return <Home onStartQuiz={handleStartQuiz} />;
  }

  if (showSummary) {
    return <Summary score={score} numQuestions={numQuestions} onRestart={handleRestart} />;
  }

  return (
    <div>
      {questions.length > 0 && (
        <Question
          question={questions[currentQuestionIndex]}
          dictionary={questions}
          onAnswer={handleAnswer}
          onNextQuestion={handleNextQuestion}
        />
      )}
    </div>
  );
};

export default App;
