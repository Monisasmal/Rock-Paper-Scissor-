import React, { useEffect, useState } from 'react';
import ScoreBoard from './ScoreBoard';
import Result from './Result';
import LeaderBoard from './LeaderBoard';
import Chart from './Chart';
import History from './History';

const choices = ['Rock','Paper','Scissors'];

const Game = () => {

  const[playerChoice, setPlayerChoice] = useState('');
  const[computerChoice, setComputerChoice] = useState('');
  const[playerScore, setPlayerScore] = useState(0);
  const[computerScore, setComputerScore] = useState(0);
  const[result, setResult] = useState('');
  const[leaderBoard, setLeaderBoard] = useState([]);

  const handlePlayerChoice = (choice) =>{
    const compChoice = choices[Math.floor(Math.random() * 3)];
    setPlayerChoice(choice);
    setComputerChoice(compChoice);
    calculateWinner(choice,compChoice);
  }

  const calculateWinner = (player,computer) =>{
    if(player === computer){
      setResult('Its a Tie');
    }else if((player === 'Rock' && computer === 'Scissors') ||
             (player === 'Paper' && computer === 'Rock') ||
             (player === 'Scissors' && computer === 'Paper')
  ){
    setPlayerScore(prev => prev+1);
    setResult('You Win');
  }else{
    setComputerScore(prev => prev+1);
    setResult('Computer Win');
  }
  }

  useEffect(()=>{
    if(playerScore === 3 || computerScore === 3){
      const finalResult = playerScore === computerScore? 'Its a TIe' :playerScore > computerScore? 'You Win': 'Computer win';
      setLeaderBoard(prev => [
        {
        playerScore,
        computerScore,
        result : finalResult,
        time: new Date().toLocaleString(),
        },
        ...prev,
      ]);
      setTimeout(()=>{
        setPlayerChoice('');
        setComputerChoice('');
        setResult('');
        setPlayerScore(0);
        setComputerScore(0);
      },2000)
    }
  },[playerScore,computerScore]);

  return (
    <>
   <ScoreBoard playerScore={playerScore} computerScore={computerScore} />
   <div>{choices.map(choice => (
    <button key={choice} onClick={() => handlePlayerChoice(choice)}>{choice}</button>
   ))}</div>
   <Result result={result} playerChoice={playerChoice} computerChoice = {computerChoice} />
   <LeaderBoard data = {leaderBoard} />
   <Chart leaderBoard={leaderBoard} />
   <History leaderboard={leaderBoard} />
    </>
  )
}

export default Game