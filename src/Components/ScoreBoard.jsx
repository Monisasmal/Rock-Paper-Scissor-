import React from 'react'

const ScoreBoard = ({playerScore,computerScore}) => {
  return (
    <section className='scoreboard'>
    <h2>PlayerScore:{playerScore}</h2>
    <h2>ComputerScore:{computerScore}</h2>
    </section>
  )
}

export default ScoreBoard