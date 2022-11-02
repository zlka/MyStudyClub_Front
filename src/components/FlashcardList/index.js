import React from 'react'
import Flashcard from '../Flashcard'
import { useNavigate } from "react-router-dom";

export default function FlashcardList({ flashcards }) {
  const navigate = useNavigate();
  return (
    <div className="card-grid">
        {flashcards.map(flashcard => {
            return <Flashcard flashcard={flashcard} key={flashcard.id} />
        })}
        <div className="s-btn"><button onClick={() => navigate("/dashboard/new", {state: flashcards[0].set_id})}>New</button></div>
    </div>
  )
}
