import React,{useState} from 'react'
import './Card.css'

const Card = (props) => {
    const [isActive, setActive ] = useState("false")

    const onCardClick = () => {
        setActive(!isActive)
    };
    return(
        <>
        <div role="switch" aria-checked="true" className ={ isActive ? "Flip" : null } id="Card" onClick={onCardClick} >
        <div className="front">
            <h1 aria-label="cardFront">{props.front}</h1>
        </div>
        <div className="back">
            <h1 aria-label="cardBack">{props.back}</h1>
        </div>
        </div>
        </>
    )
};

export default Card
