import React, {useState} from 'react'
import QuestionCard from './components/QuestionCard'
import Score from './components/Score'
import {quoteData} from './quoteData'
import './index.css'

const App = () => {
  const [score, setScore] = useState(0)
  const [surrender, setSurrender] = useState(false)

  const addScore = () => {
    setScore(score + 1)
  }

  const surrenderHandler = () => {
    setSurrender(true)
  }

  return(
    <div className="bg-gray-700 min-h-screen">
      <h1 className="text-3xl text-center p-6 text-white">Videogame Sound Quiz</h1>
      <div className="m-auto w-screen grid grid-cols-1 md:grid-cols-3">
        {quoteData.map(game => {return <QuestionCard key={game.title} game={game} addScore={addScore} surrender={surrender} />})}
      </div>-
      <Score score={score} sum={quoteData.length} />
      <div className="flex flex-col items-center">
        <button className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-400" onClick={surrenderHandler}>Surrender</button>
      </div>
    </div>
  )
} 

export default App