import React from 'react'
import './card.css'

const GameCard = ({card,id,onCardClick}) => {
    let cardClass = card.match ? " " + card.match : ""
    return (
        <div 
        className={"gameCard" + cardClass } 
        role="switch" aria-checked="true" 
        onClick={() => onCardClick(id) }>
            <p aria-label="game-card"> {card.data}</p>
        </div>
    )
};

export default GameCard
