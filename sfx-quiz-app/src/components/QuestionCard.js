import React, {useState} from 'react'

const QuestionCard = (props) => {
  const [correct, setCorrect] = useState(false)
  const [style, setStyle] = useState('bg-red-400')

  const audio = new Audio(`./audio/${props.game.audio}.mp3`)

  const clickHandler = () => {
    audio.play()
  }

  const changeHandler = (event) => {
    if(props.game.names.includes(event.target.value.toLowerCase())){
      setCorrect(true)
      props.addScore()
      setStyle('bg-green-400')
    }
  }

  return(
    <div className="flex bg-gray-500">
      <button className="p-4" onClick={clickHandler}>▶</button>
      {correct || props.surrender ? <div id="solution" className={`inline-block p-4 w-screen ${style}`}>{props.game.title}</div> : <input className="p-4 w-screen bg-gray-400" onChange={changeHandler} type="text" />}
    </div>
  )
}

export default QuestionCard