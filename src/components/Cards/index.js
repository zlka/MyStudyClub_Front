import React,{useState} from 'react'
import './Card.css'

const Card = () => {
    const [isActive, setActive ] = useState("false")

    const onCardClick = () => {
        setActive(!isActive)
    };
    return(
        <>
        <div className ={ isActive ? "Flip" : null } id="Card" onClick={onCardClick} >
        <div className="front">
            <h1>front</h1>
        </div>
        <div className="back">
            <h1>back</h1>
        </div>
        </div>
        </>
    )
};

export default Card
