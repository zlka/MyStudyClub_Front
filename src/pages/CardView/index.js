import React, { useState } from 'react'
import './CardView.css'
import { Card } from '../../components'
import { CaretLeftFill, CaretRightFill } from 'react-bootstrap-icons';

const CardView = () => {
    const [cardId, setCardId] = useState(0)
    const flashcards = [
        { id: 1, question: "question 1", answer: "answer 1" },
        { id: 2, question: "question 2", answer: "answer 2" },
        { id: 3, question: "question 3", answer: "answer 3" },
        { id: 4, question: "question 4", answer: "answer 4" }
    ]
    const nextQuestion = () => {
        setCardId(cardId => cardId + 1)
    };
    const previousQuestion = () => {
        setCardId(cardId => cardId - 1)
    };

    return (
        <>
        <div className="Cards">
            <CaretLeftFill id="arrow" onClick={previousQuestion} />
            <div>
                <Card front={flashcards[cardId].question} back={flashcards[cardId].answer} />
            </div>
            <CaretRightFill id="arrow" onClick={nextQuestion} />
            </div>
        </>
    )

};

export default CardView
