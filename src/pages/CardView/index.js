import React, { useState } from 'react';
import './CardView.css';
import axios from 'axios';
import { Card } from '../../components'
import { CaretLeftFill, CaretRightFill } from 'react-bootstrap-icons';
import { ArrowLeftShort } from 'react-bootstrap-icons';
import { useEffect } from 'react';

const CardView = () => {
    const [cardId, setCardId] = useState(0)
    const [flashcards, setFlashcards] = useState([])
    const [statusMessage, setStatusMessage] = useState('Loading');

    useEffect(() => {
        const fetchFlashcards = async () => {
            setStatusMessage('Loading')
            try {
                let { data } = await axios.get('https://my-study-club.herokuapp.com/flashcards/1')
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
        <p> exit</p>
            <div role="main" id="Cards">
            <h2>{ statusMessage ? statusMessage : <Card progress={`${flashcards[cardId].id} / ${flashcards.length}`} />}</h2>      
                <CaretLeftFill id="arrow" onClick={previousQuestion} />
                <>
                    <div aria-label="card" id="card">
                        {!statusMessage && <Card front={flashcards[cardId].question} back={flashcards[cardId].answer} />}
                    </div>
                </>
                <CaretRightFill role='figure' id="arrow" onClick={nextQuestion} />
            </div>
        </>
    )

};



export default CardView

// <>
//         <div role="main" id="Cards">
//         <CaretLeftFill id="arrow" onClick={previousQuestion}/>
//             { statusMessage ? statusMessage : 
//             <div > 
//                 <h1 className='progress'>{ flashcards[cardId].id} / {flashcards.length} </h1>
//                 <div >
//                 <Card front={flashcards[cardId].question} back={flashcards[cardId].answer} />
//                 </div>  
//             </div>
//             }
//         <CaretRightFill role='figure' id="arrow" onClick={nextQuestion} />
//         </div>
//         </>
