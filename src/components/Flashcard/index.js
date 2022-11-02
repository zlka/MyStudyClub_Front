import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Flashcard( {flashcard}) {
  const navigate = useNavigate();
  const [flip, setFlip] = useState(false)
  const [height, setHeight] = useState('initial')

  const frontEl = useRef()
  const backEl = useRef()

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height
    const backHeight = frontEl.current.getBoundingClientRect().height
    setHeight(Math.max(frontHeight, backHeight, 100))
  }

  function handleDelete(id) {

    let config = {
      method: 'delete',
      url: `https://my-study-club.herokuapp.com/flashcards/${id}`,
      headers: { }
    };

    axios(config)
    .then(response =>  {
      console.log(JSON.stringify(response.data));
    })
    .catch(error => {
      console.log(error);
    });

  }

  useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options])
  useEffect(() => {
    window.addEventListener('resize', setMaxHeight)
    return () => window.removeEventListener('resize', setMaxHeight)
  }, [])

  return (
    <div>
    <div
      className={`s-card ${flip ? 'flip' : ''}`} 
      style={{ height: height }}
      onClick={() => setFlip(!flip)}
    >
      <div className="s-front" ref={frontEl}>
        {flashcard.question}
      </div>
      <div className="s-back" ref={backEl}>{flashcard.answer}</div>
    </div>
    <div className="s-btn"><button onClick={() => navigate("/login/edit", {state: flashcard})}>Edit</button><button onClick={() => handleDelete(flashcard.id)}>Delete</button></div>
    </div>
  )
}
