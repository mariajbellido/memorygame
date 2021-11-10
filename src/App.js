
import React, {useState} from 'react';

import './App.css'



const cardImages = [

  { "src": "https://res.cloudinary.com/djy0sg0vl/image/upload/v1636555061/cards/scroll-1_ahduss.png"},
  { "src": "https://res.cloudinary.com/djy0sg0vl/image/upload/v1636555061/cards/sword-1_nwmavc.png"},
  { "src": "https://res.cloudinary.com/djy0sg0vl/image/upload/v1636555061/cards/potion-1_vrem5b.png"},
  { "src": "https://res.cloudinary.com/djy0sg0vl/image/upload/v1636555061/cards/shield-1_gqxekf.png"},
  { "src": "https://res.cloudinary.com/djy0sg0vl/image/upload/v1636555061/cards/ring-1_twi6vd.png"},
  { "src": "https://res.cloudinary.com/djy0sg0vl/image/upload/v1636555061/cards/helmet-1_zosnoz.png"}

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
                <img className="back" src="https://res.cloudinary.com/djy0sg0vl/image/upload/v1636555061/cards/cover_oy6ta9.png" alt="card cover" />
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App