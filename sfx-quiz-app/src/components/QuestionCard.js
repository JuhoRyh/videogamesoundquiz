import React, {useState} from 'react'

const QuestionCard = (props) => {
  const [correct, setCorrect] = useState(false)

  const audio = new Audio(`./audio/${props.game.audio}.mp3`)

  const clickHandler = () => {
    audio.play()
  }

  const changeHandler = (event) => {
    if(props.game.names.includes(event.target.value)){
      setCorrect(true)
      props.addScore()
    }
  }

  return(
    <div className="flex bg-gray-500">
      <button className="p-4" onClick={clickHandler}>▶</button>
      {correct ? <div className="inline-block p-4 w-screen bg-gray-400 text-green">{props.game.title} ✅</div> : <input className="p-4 w-screen bg-gray-400" onChange={changeHandler} type="text" />}
    </div>
  )
}

export default QuestionCard