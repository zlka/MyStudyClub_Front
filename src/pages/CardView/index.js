import React, { useState } from 'react'
import './CardView.css'
import { Card } from '../../components'
import { CaretLeftFill, CaretRightFill } from 'react-bootstrap-icons';

const CardView = () => {
    const [cardId, setCardId] = useState(0)
    const [disabled, setDisabled] = useState("black")
    const flashcards = [
        { id: 1, question: "question 1", answer: "answer 1" },
        { id: 2, question: "question 2", answer: "answer 2" },
        { id: 3, question: "question 3", answer: "answer 3" },
        { id: 4, question: "question 4", answer: "answer 4" }
    ]
    const nextQuestion = () => {
        if (cardId < flashcards.length -1) {
            setCardId(cardId => cardId + 1)
        } else  {
            setCardId(cardId)
        }}

    const previousQuestion = () => {
        if (cardId > 0 ) {
            setCardId(cardId => cardId - 1)
        } else {
            setCardId(0)
        }
    };
    
    return (
        <>
        <div className="Cards">
        <h2 className="progress">{flashcards[cardId].id} / {flashcards.length}</h2>

            <CaretLeftFill id="arrow" onClick={previousQuestion}/>
            <div>
                <Card front={flashcards[cardId].question} back={flashcards[cardId].answer} />
            </div>
            <CaretRightFill id="arrow" onClick={nextQuestion} />
            </div>
        </>
    )

};

export default CardView
