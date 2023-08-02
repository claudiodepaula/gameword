import React from 'react'
import { useState } from 'react';
import './Game.css';

const Game = ( { checkWord, tip, wrongLetters, lifes, gameLetters, points, guessedLetters }) => {
  const [usedLetter, setUsedLetter] = useState("");

  const handleCheck = (e)=>{
    e.preventDefault();
    
    console.log('e.target.value ', e.target.value)

    checkWord(usedLetter);
  }

  return (
    <div className='Game'>

      <div className='gameWindowTitle'>
        <h1>Advinhe a Palavra:</h1>
        <p>Dica sobre a palavra: <span>{tip}</span></p>
      </div>

      <div className='wordContainer'>
        {gameLetters.map((letter, i)=>{
          return gameLetters.includes(letter) ? <span key={i} className='blankSquare'></span> : <span key={i} className='letterContainer'>{ letter }</span>
        })}
      </div>

      
      <div className='pointsCounter'>
        <p>Pontos: <span>{points}</span></p>
      </div>
      
      <div className='okLetters'>
        <p>Digite uma Letra:</p> 
      </div>

      <div className='checkButton'>
        <form onSubmit={handleCheck}> 
          <input type='text' name='letter' maxLength="1" required onChange={(e)=>setUsedLetter(e.target.value)} value={usedLetter}/>
          <button>Verificar Letra</button>
        </form>
      </div>

      
      <div className='wrongLetters'>
        <h2>Letras Digitadas Incorretamente: </h2>
        <br></br>

        {wrongLetters.map((wrongLetter, i)=>{
          return <span key={i}>{wrongLetter}, </span> 
        })}
        
      </div>
  </div>
  )
}

export default Game;