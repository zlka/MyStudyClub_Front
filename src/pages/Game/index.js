import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './game.css'
import { GameCard } from '../../components'

const Game = () => {
    const [Cards, setCards ] = useState([])
    const [statusMessage, setStatusMessage] = useState('Loading')
    const [clickId,setClickId] = useState(-1)

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
    }, [])

    const shuffleCards = (cards) => {
        let shuffledCards = []
        cards.map(card => (
           shuffledCards.push({data:card.question, id: card.id,match:""},{data: card.answer,id: card.id,match:""})
        ))
        shuffledCards.sort( () => Math.random() - 0.5)
        console.log('game cards',shuffledCards)
        setCards(shuffledCards)
    }

    const onCardClick = (id) => {
        // console.log("id",id)
        if( clickId === -1) { 
            setClickId(id) 
        } else { // on second click
            check(id)
        }
    };

    const check = (current) => {
        if (Cards[current].id === Cards[clickId].id){
            // console.log('first click id',Cards[current])
            // console.log('second click id',Cards[clickId])
            Cards[current].match= "correct"
            Cards[clickId].match="correct"
            setCards([...Cards])
            // console.log('newCards', Cards)
            setClickId(-1)
        } else {
            // console.log('wrong current',Cards[current].id)
            // console.log('wrong comparison',Cards[clickId].id)
            // console.log('newCards', Cards)
            Cards[current].match="wrong"
            Cards[clickId].match="wrong"
            setCards([...Cards])
            setTimeout( () => {
                Cards[current].match =""
                Cards[clickId].match=""
                setCards([...Cards])
                setClickId(-1)
            },500)
        }
    }

    return (
        <>
        <div className='card-grid'>
            {Cards.map((card,i) => (
                <GameCard key={i} id={i} card={card} onCardClick={onCardClick}/>
            ))}
        </div>
        </>
    )

};

export default Game
