import React from 'react'

const Game = ( { checkWord }) => {
  return (
    <div>
      <div className='subtitle'>
        <p>Clique abaixo para Verificar a Palavra</p>
      </div>
      
      <div className='startButton'>
        <button onClick={checkWord}>CHECAR PALAVRA</button>
      </div>
  </div>
  )
}

export default Game;