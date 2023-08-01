import React from 'react'

const EndGame = ( {endGame} ) => {
  return (
    <div>
      <div className='subtitle'>
        <p>Verificar Palavra</p>
      </div>
      
      <div className='startButton'>
        <button onClick={endGame}>FINALIZAR JOGO</button>
      </div>
    </div>
  )
}

export default EndGame