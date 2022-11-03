import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { BackButton, FlashcardList } from '../../components';
import './set.css'


function Set() {
  const location = useLocation()

  // new line start
  const [flashcards, setFlashcards] = useState(null)
  const [setId, setSetId] = useState(location.state)

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
        console.warn(error.response)
        console.warn(error.response.status)
        console.warn(error.response.headers)
        }
    })
  }, [flashcards, setId])

  return (
    <>
    <BackButton />
      <div className="s-container">
        {flashcards ? <FlashcardList id={setId} flashcards={flashcards} /> : <h3> Loading... </h3>}
      </div>
    </>
  );
}

export default Set;
