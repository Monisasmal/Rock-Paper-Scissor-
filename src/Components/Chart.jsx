import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({leaderBoard}) => {
  const graphData = leaderBoard.map((entry, index) => ({
    name:`Game ${leaderBoard.length-index}`,
    Player : entry.playerScore,
    Computer : entry.computerScore,
  }))
  return (
    <section className='chart'>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={graphData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Player" fill="#8884d8" />
        <Bar dataKey="Computer" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
    </section>
  )
}

export default Chart