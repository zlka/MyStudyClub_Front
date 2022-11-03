import React, { useState, useEffect} from 'react';
import './CardView.css';
import axios from 'axios';
import { Card, BackButton } from '../../components'
import { CaretLeftFill,CaretRightFill } from 'react-bootstrap-icons';
import { useLocation } from "react-router-dom";

const CardView = () => {
    const [cardId, setCardId] = useState(0)
    const [flashcards, setFlashcards] = useState([])
    const [statusMessage, setStatusMessage] = useState('Loading');
    const location = useLocation()

    useEffect(() => {
        const fetchFlashcards = async () => {
            setStatusMessage('Loading')
            try {
                let { data } = await axios.get(
                `https://my-study-club.herokuapp.com/flashcards/${location.state}`)
                setFlashcards(data)
                setStatusMessage('')
            } catch (err) {
                console.warn(err)
                setStatusMessage(`Oops there's been an issue! ${err.message}`)
            }
        }
        fetchFlashcards()
    }, [])

    const nextQuestion = () => {
        if (cardId < flashcards.length - 1) {
            setCardId(cardId => cardId + 1)
        } else {
            setCardId(cardId)
        }
    }

    const previousQuestion = () => {
        if (cardId > 0) {
            setCardId(cardId => cardId - 1)
        } else {
            setCardId(0)
        }
    };
    return (
        <>
        
            <div role="main" id="Cards">
            <div id="leave"><BackButton/></div>
            {/* <h3>{ statusMessage ? statusMessage : <Card progress={`${flashcards[cardId].id} / ${flashcards.length}`} />}</h3>       */}
                <CaretLeftFill id="arrow" onClick={previousQuestion} />
                    <div aria-label="card" id="card">
                        {!statusMessage && <Card front={flashcards[cardId].answer} back={flashcards[cardId].question} />}
                    </div>
                <CaretRightFill role='figure' id="arrow" onClick={nextQuestion} />
            </div>
        </>
    )

};



export default CardView
