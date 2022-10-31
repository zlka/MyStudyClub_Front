import React from 'react'
import './card.css'

const GameCard = ({card,id,onCardClick}) => {
    let cardClass = card.match ? card.match : ""
    return (
        <div className="gameCard" onClick={() => onCardClick(id) }>
            <div>
                <p className={cardClass}> {card.data}</p>
            </div>
        </div>
    )
};

export default GameCard
