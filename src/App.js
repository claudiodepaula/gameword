import './App.css';
import StartScreen from './components/StartScreen/StartScreen';
import { WordsList } from './data/Words';
import { useState } from 'react';
import Game from './components/Game/Game';
import EndGame from './components/EndGame/EndGame';
import { GameStage } from './data/GameStage';

function App() {
  //Dados:
  const [words] = useState(WordsList)
  const [gameStage] = useState(GameStage)

  //Variáveis:
  const [gameWord, setGameWord] = useState('')
  const [gameCategory, setGameCategory] = useState('')
  const [gameLetters, setGameLetters] = useState([])
  const [stage, setStage] = useState(gameStage[0].name);
  const [lifes, setLifes] = useState(10);
  const [points, setpoints] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState(["a", "b"]);


  //Funções
  
  const pickCategoryAndWord = () => { 
    const randomElement = words[Math.floor(Math.random() * words.length)];
    const categoria = randomElement.tipo;
    const palavras = randomElement.palavras;
    const palavra = palavras[Math.floor(Math.random() * words.length)].toLowerCase();
    
    return { categoria, palavra }

  }

  const startGame = () => {
    const { categoria, palavra } = pickCategoryAndWord();
    const letters = palavra.split("");
    
    setGameCategory(categoria);
    setGameWord(palavra);  
    setGameLetters(letters);

    setStage(gameStage[1].name)
  }

  const checkWord = (usedLetter) => {
    console.log('usedLetter ', usedLetter);
  }

  const endGame = () => {
    setStage(gameStage[0].name)
  }


  return (
    <div className="App">
      <div>
        <h1>Secret Word</h1>
      </div>
      
      <div>
        {stage === 'start' &&  <StartScreen startGame={startGame}/>}
        {stage === 'game' &&  <Game checkWord={checkWord} 
                                tip={gameCategory} gameWord={gameWord} gameLetters={gameLetters} lifes={lifes} wrongLetters={wrongLetters} points={points} guessedLetters={guessedLetters}
                              />}
        {stage === 'end' &&  <EndGame endGame={endGame}/>}
      </div>
    </div>
  );
}

export default App;
