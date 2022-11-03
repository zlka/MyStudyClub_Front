import React from 'react'
import Flashcard from '../Flashcard'
import { useNavigate } from "react-router-dom";
import { PlusCircle } from 'react-bootstrap-icons';
import './flash.css'

export default function FlashcardList({ set_id, flashcards }) {
 
  const navigate = useNavigate();

  const change = {
    content: ' add new flashcard'
  }
  return (
    <div className="card-grid">
        {flashcards.map(flashcard => {
            return <Flashcard flashcard={flashcard} key={flashcard.id} />
        })}
        <div className="s-btn"><button id="newCard" onClick={() => navigate("/dashboard/new", {state: set_id})}><PlusCircle /></button></div>
    </div>
  )
}
