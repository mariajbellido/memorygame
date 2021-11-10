
import React, {useState} from 'react';

import './App.css'



const cardImages = [

  { "src": "/assets/img/helmet-1.png"},
  { "src": "/assets/img/potion-1.png"},
  { "src": "/assets/img/ring-1.png"},
  { "src": "/assets/img/scroll-1.png"},
  { "src": "/assets/img/shield-1.png"},
  { "src": "/assets/img/sword-1.png"}

]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  // Shuffle cards 

  const shuffleCards = () => {
    const shuffledCards = [
      ...cardImages, ...cardImages
    ]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))

    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards, turns)

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <div className="card" key={card.id}>
              <div> 
                <img className="front" src={card.src} alt="card front" />
                <img className="back" src="./assets/img/cover.png" alt="card cover" />
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App