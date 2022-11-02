import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './game.css'
import { GameCard, Timer } from '../../components'

const Game = () => {
    const [Cards, setCards] = useState([])
    const [statusMessage, setStatusMessage] = useState('Loading')
    const [clickId, setClickId] = useState(-1)
    // const [countdown, setCountdown] = useState("you ready?")

    useEffect(() => {
        const fetchFlashcards = async () => {

            setStatusMessage('Loading')
            try {
                let { data } = await axios.get('https://my-study-club.herokuapp.com/flashcards/1')
                shuffleCards(data)
                setStatusMessage('')
            } catch (err) {
                console.warn(err)
                setStatusMessage(`Oops there's been an issue! ${err.message}`)
            }
        }
        fetchFlashcards()
    }, []) // move to another page and call?

    const shuffleCards = (cards) => {
        let shuffledCards = []
        cards.map(card => (
            shuffledCards.push({ data: card.question, id: card.id, match: "" }, { data: card.answer, id: card.id, match: "" })
        ))
        shuffledCards.sort(() => Math.random() - 0.5)
        console.log('game cards', shuffledCards)
        setCards(shuffledCards)
    }

    const onCardClick = (id) => {
        if (clickId === -1) {
            setClickId(id)
        } else {
            check(id)
        }
    };

    const check = (current) => {
        if (Cards[current].id === Cards[clickId].id) {
            Cards[current].match = "correct"
            Cards[clickId].match = "correct"
            setCards([...Cards])
            setClickId(-1)
        } else {
            Cards[current].match = "wrong"
            Cards[clickId].match = "wrong"
            setCards([...Cards])
            setTimeout(() => {
                Cards[current].match = ""
                Cards[clickId].match = ""
                setCards([...Cards])
                setClickId(-1)
            }, 500)
        }
    }





return (
    <div id="mainGame">
        
        <h1><Timer /></h1>

        <div>

        </div>
        <div className='card-grid'>

            {Cards.map((card, i) => (
                <GameCard key={i} id={i} card={card} onCardClick={onCardClick} />
            ))}
        </div>
    </div>
)

};

export default Game
