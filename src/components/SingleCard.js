import React from 'react'

import './SingleCard.css';

export default function SingleCard( {card, handleChoice, flipped, disabled}) {


  const handleClick = () => {
    if (!disabled){
      handleChoice(card)
    }
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="https://res.cloudinary.com/djy0sg0vl/image/upload/v1636555061/cards/cover_oy6ta9.png"
          alt="card cover"
          onClick={handleClick}

        />
      </div>
    </div>
  );
}
