import React from 'react';
import './App.css';

const Home = ({ onStartQuiz }) => {
  const [language, setLanguage] = React.useState('english')
  const [difficulty, setDifficulty] = React.useState('lvl1');
  const [numQuestions, setNumQuestions] = React.useState(10);

  const handleStartQuiz = () => {
    onStartQuiz(difficulty, numQuestions);
  };

  return (
    <div id="home">
      <h1 class="home">英単語1600</h1>
      <div>
        
        <h2>レベルを選ぶ</h2>
        <ul class='diffselect'>
          <li class='diff1'>
            <button class={(difficulty === 'lvl1') ? 'actdiff': 'diffbutton' } onClick={() => setDifficulty('lvl1')}>Lvl1</button>
          </li>
          <li class='diff2'>
            <button class={(difficulty === 'lvl2') ? 'actdiff': 'diffbutton' }onClick={() => setDifficulty('lvl2')}>Lvl2</button>
          </li>
          <li class='diff3'>
            <button class={(difficulty === 'lvl3') ? 'actdiff': 'diffbutton' } onClick={() => setDifficulty('lvl3')}>Lvl3</button>
          </li>
          <li class='diff4'>
            <button class={(difficulty === 'lvl4') ? 'actdiff': 'diffbutton' } onClick={() => setDifficulty('lvl4')}>Lvl4</button>
          </li>
          <li class='diff5'>
            <button class={(difficulty === 'lvl5') ? 'actdiff': 'diffbutton' } onClick={() => setDifficulty('lvl5')}>Lvl5</button>
          </li>
          <li class='diff6'>
            <button class={(difficulty === 'lvl6') ? 'actdiff': 'diffbutton' } onClick={() => setDifficulty('lvl6')}>Lvl6</button>
          </li>
        </ul>
      </div>
      <div>
        <h2 class='home'>問題数を選ぶ</h2>
        <ul class='diffselect'>
          <li>
            <button class={(numQuestions === 10) ? 'actnum': 'numq'} onClick={() => setNumQuestions(10)}>10問</button>
          </li>
          <li>
            <button class={(numQuestions === 100) ? 'actnum': 'numq'} onClick={() => setNumQuestions(50)}>50問</button>
          </li>
        </ul>
      </div>
      <br/>
      <button class='genbtn' onClick={handleStartQuiz}>始める</button>
      <h5>ridgewoodbridgetutors@gmail.com
      </h5>
    </div>
  );
};

export default Home;