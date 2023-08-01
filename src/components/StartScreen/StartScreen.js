import React from 'react'
import './StartScreen.css'

const StartScreen = ({startGame}) => {
  return (
    <div>
      <div className='subtitle'>
        <p>Clique no botão abaixo para começar a jogar</p>
      </div>
      
      <div className='startButton'>
        <button onClick={startGame}>COMEÇAR O JOGO</button>
      </div>
    </div>
  )
}

export default StartScreen