import { useState, useEffect } from 'react'
import axios from "axios";
import { useLocation } from "react-router-dom";
import { FlashcardList } from '../../components';
import './set.css'


function Set() {
  const location = useLocation()
    
  // new line start
  const [flashcards, setFlashcards] = useState(null)
  const [setId, setSetId] = useState(3)

  useEffect(() => {
    axios({
      method: "GET",
      url:`https://my-study-club.herokuapp.com/flashcards/${setId}`,
    })
    .then((response) => {
      const res = response.data
      setFlashcards(res)
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })
  }, [flashcards, setId])

  return (
    <>
      <div className="s-container">
        {flashcards ? <FlashcardList flashcards={flashcards} /> : <h3> Loading... </h3>}
      </div>
    </>
  );
}

export default Set;
