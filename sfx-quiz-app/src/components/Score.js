import React from 'react'

const Score = (props) => {
  return(
    <div>
      <h1 className="text-center text-white text-3xl p-6">{props.score}/{props.sum}</h1>
    </div>
  )
}

export default Score