import React from 'react'
import './card.css'

const GameCard = ({card,id,onCardClick}) => {
    let cardClass = card.match ? " " + card.match : ""
    console.log(cardClass)
    return (
        <div className={"gameCard" + cardClass } onClick={() => onCardClick(id) }>
                <p > {card.data}</p>
        </div>
    )
};

export default GameCard
