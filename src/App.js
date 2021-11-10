import React, { useState, useEffect } from 'react';

import SingleCard from './components/SingleCard';

import './App.css';

const cardImages = [
  {
    src: 'https://res.cloudinary.com/djy0sg0vl/image/upload/v1636555061/cards/scroll-1_ahduss.png',
  },
  {
    src: 'https://res.cloudinary.com/djy0sg0vl/image/upload/v1636555061/cards/sword-1_nwmavc.png',
  },
  {
    src: 'https://res.cloudinary.com/djy0sg0vl/image/upload/v1636555061/cards/potion-1_vrem5b.png',
  },
  {
    src: 'https://res.cloudinary.com/djy0sg0vl/image/upload/v1636555061/cards/shield-1_gqxekf.png',
  },
  {
    src: 'https://res.cloudinary.com/djy0sg0vl/image/upload/v1636555061/cards/ring-1_twi6vd.png',
  },
  {
    src: 'https://res.cloudinary.com/djy0sg0vl/image/upload/v1636555061/cards/helmet-1_zosnoz.png',
  },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  // Shuffle cards

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  // Handle choices

  /**
   * If it is null, then it means that we don't have a selection for choice one.
   * If it evaluates to false, then it's null.  It will run setChoiceOnce.
   *
   * But, if it is not null, then it has a value. If it has a value, then it means that we already have a selection made (choiceOne).
   * In other words, it will run setChoiceTwo.
   */

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  


  // Comparing two selected cards 

  useEffect( () => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log("Those cards match")
        resetTurn()
      } else {
        console.log("Those cards do not match")
        resetTurn()
      }
    }
  }, [choiceOne, choiceTwo])


  // Reset choices & increase turn

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
