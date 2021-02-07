import React, {useState} from 'react'
import QuestionCard from './components/QuestionCard'
import Score from './components/Score'
import {quoteData} from './quoteData'
import {gameData} from './data'
import './index.css'

const App = () => {
  const [score, setScore] = useState(0)
  const [surrender, setSurrender] = useState(false)
  const [data, setData] = useState(gameData)

  const addScore = () => {
    setScore(score + 1)
  }

  const surrenderHandler = () => {
    setSurrender(true)
  }

  //could be put into a different file with other const styles 
  const activeButton = "p-4 m-4 rounded-lg text-white hover:bg-blue-400 bg-blue-700"
  const inactiveButton = "p-4 m-4 rounded-lg text-white hover:bg-blue-400 bg-blue-500"

  const vgHandler = () => {
    setData(gameData)
    setScore(0)
    setSurrender(false)
  }

  const chrHandler = () => {
    setData(quoteData)
    setScore(0)
    setSurrender(false)
  }

  return(
    <div className="bg-gray-700 min-h-screen">
      <h1 className="text-3xl text-center p-6 text-white">Videogame Sound Quiz</h1>
      <div className="flex flex-row justify-center">
        <button className={data === gameData ? activeButton : inactiveButton} onClick={vgHandler}>Videogame Quiz</button>
        <button className={data === quoteData ? activeButton : inactiveButton} onClick={chrHandler}>Character Quiz</button>
      </div>
      <div className="m-auto w-screen grid grid-cols-1 md:grid-cols-3">
        {data.map(game => {return <QuestionCard key={game.title} game={game} addScore={addScore} surrender={surrender} />})}
      </div>-
      <Score score={score} sum={data.length} />
      <div className="flex flex-col items-center">
        <button className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-400" onClick={surrenderHandler}>Surrender</button>
      </div>
    </div>
  )
} 

export default App