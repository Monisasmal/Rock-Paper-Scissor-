import React from 'react'

const Result = ({result, playerChoice,computerChoice}) => {
  return (
    <section className='result'>
    <h3>{result}</h3>
    <p>Your Choice : {playerChoice}</p>
    <p>Computer Choice: {computerChoice}</p>
    </section>
  )
}

export default Result