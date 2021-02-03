import React, {useState} from 'react'
import QuestionCard from './components/QuestionCard'
import Score from './components/Score'
import {gameData} from './data'
import './index.css'

const App = () => {
  const [score, setScore] = useState(0)

  console.log(gameData)

  const addScore = () => {
    setScore(score + 1)
  }

  return(
    <div className="bg-gray-700 flex-col h-screen">
      <h1 className="text-3xl text-center p-6 text-white">Videogame Sound Quiz</h1>
      <div className="m-auto w-screen grid grid-cols-1 md:grid-cols-3">
        {gameData.map(game => {return <QuestionCard key={game.title} game={game} addScore={addScore} />})}
      </div>
      <Score score={score} sum={gameData.length} />
    </div>
  )
} 

export default App