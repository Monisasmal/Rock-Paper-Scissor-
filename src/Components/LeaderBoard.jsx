import React from 'react'

const LeaderBoard = ({data}) => {
  return (
    <section className='leaderboard'>
    <h3>LeaderBoard (Player or Computer's score should be 3 )</h3>
    <ul>
      {data.map((entry,index) => (
        <li key={index}>
          {entry.time} - Player: {entry.playerScore}, computer: {entry.computerScore} - {entry.result}
        </li>
      ))}  
    </ul>
    </section>
  )
}

export default LeaderBoard