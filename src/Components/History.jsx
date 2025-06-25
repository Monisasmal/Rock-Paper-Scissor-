import React from 'react';

const History = ({ leaderboard = [] }) => {
  if (!Array.isArray(leaderboard)) return <p>Invalid history data</p>;

  return (
    <section className='history'>
      <h3>Game History</h3>
      {leaderboard.length > 0 ? (
        <ol>
          {leaderboard.map((entry, index) => (
            <li key={index}>
              {entry.time}: {entry.result} (P: {entry.playerScore} - C: {entry.computerScore})
            </li>
          ))}
        </ol>
      ) : (
        <p>No history yet.</p>
      )}
    </section>
  );
};

export default History;
