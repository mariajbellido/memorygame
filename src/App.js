import React, { useState, useEffect } from 'react';

import SingleCard from './components/SingleCard';

import './App.css';

const cardImages = [
  {
    src: 'https://res.cloudinary.com/djy0sg0vl/image/upload/v1636555061/cards/scroll-1_ahduss.png',
    matched: false,
  },
  {
    src: 'https://res.cloudinary.com/djy0sg0vl/image/upload/v1636555061/cards/sword-1_nwmavc.png',
    matched: false,
  },
  {
    src: 'https://res.cloudinary.com/djy0sg0vl/image/upload/v1636555061/cards/potion-1_vrem5b.png',
    matched: false,
  },
  {
    src: 'https://res.cloudinary.com/djy0sg0vl/image/upload/v1636555061/cards/shield-1_gqxekf.png',
    matched: false,
  },
  {
    src: 'https://res.cloudinary.com/djy0sg0vl/image/upload/v1636555061/cards/ring-1_twi6vd.png',
    matched: false,
  },
  {
    src: 'https://res.cloudinary.com/djy0sg0vl/image/upload/v1636555061/cards/helmet-1_zosnoz.png',
    matched: false,
  },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const [disabled, setDisabled] = useState(false);

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

  useEffect(() => {

    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        //console.log("Those cards match")
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        //console.log("Those cards do not match")
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  // Reset choices & increase turn

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // Starts a new game automatically 

  useEffect(() => {
    shuffleCards()
  }, [])


  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} flipped={ card === choiceOne || card === choiceTwo || card.matched} disabled={disabled}/>
        ))}
      </div>
      <p> Turns: {turns} </p>
    </div>
  );
}

export default App;
