import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './game.css'
import { useNavigate } from 'react-router-dom';
import { GameCard, Timer, BackButton } from '../../components'
// import set from 'date-fns/set/index.js';
// import { setDefaultOptions } from 'date-fns/esm';

const Game = () => {
    const [Cards, setCards] = useState([])
    const [clickId, setClickId] = useState(-1)
    const [load, setLoad] = useState(true)
    const [end, setEnd] = useState(false)
    const [pairs, setPairs] = useState(0)
    const navigate = useNavigate()
    useEffect(() => {
        const fetchFlashcards = async () => {
            try {
                let { data } = await axios.get('https://my-study-club.herokuapp.com/flashcards/1')
                shuffleCards(data)
            } catch (err) {
                console.warn(err)
            }
        }
        fetchFlashcards()
    }, [])

    const shuffleCards = (cards) => {
        let shuffledCards = []
        cards.map(card => (
            shuffledCards.push({ data: card.question, id: card.id, match: "" }, { data: card.answer, id: card.id, match: "" })
        ))
        shuffledCards.sort(() => Math.random() - 0.5)
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
            setPairs(pairs => pairs + 2)
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

    const startTime = () => {
        setLoad(false)
    }

    const endGame = () => {
        pairs.length === Cards.length ? setEnd(true) : setEnd(false)
    }


    return (
        <>
        <BackButton />
        <div id="mainGame" onClick={endGame}>
    
        <div>
            {
            load ? 
            <p style={{ marginTop: "10px", color: "grey" }}> Click to start </p> : <h1><Timer /></h1>
            }
        </div>
            {
            end ? <button onClick={() => navigate("/dashboard/set")}>End Game </button> :
                <div className='card-grid' onClick={startTime}>
                    {Cards.map((card, i) => (
                        <GameCard key={i} id={i} card={card} onCardClick={onCardClick} />))}
                </div>
             }
        </div>
        </>
    )

};

export default Game
