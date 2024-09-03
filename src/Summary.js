import React from 'react';
import './App.css';


const Summary = ({ score, numQuestions, onRestart }) => (
  <div>
    <h1 class='home'>結果</h1>
    <h2 class='home'>
{numQuestions}問中{score}問正解
    </h2>
 <button class='genbtn' onClick={() => window.location.reload()}>メニューに戻る</button>
  
  </div>
);

export default Summary;