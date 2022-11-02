import React, { useState, useEffect } from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function NewCard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [qActive, setQActive] = useState(true)
  const [isListening, setIsListening] = useState(false)

  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [questionSaved, setQuestionSaved] = useState(false)
  const [answerSaved, setAnswerSaved] = useState(false)

  useEffect(() => {
    handleListen()
    // eslint-disable-next-line
  }, [isListening])

  const handleListen = () => {
    if (isListening) {
      mic.start()
      mic.onend = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('Stopped Mic on Click', qActive)
      }
    }
    mic.onstart = () => {
      console.log('Mics on', qActive)
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      console.log(transcript)
      qActive ? setQuestion(transcript) : setAnswer(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuestionSaved(true)

  }
  const handleAnswerSubmit = (e) => {
    e.preventDefault()
    setAnswerSaved(true)
  }
  const postFlashcard = (e) => {
    let data = JSON.stringify({
    "question": question,
    "answer": answer,
    "set_id": location.state,
    });

    let config = {
    method: 'post',
    url: 'https://my-study-club.herokuapp.com/flashcards',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(response => {
    console.log(JSON.stringify(response.data));
    })
    .catch(error => {
    console.log(error);
    });
  }

  return (
    <>
      <h1>Flashcard</h1>
      <div className="container_v">
        <form  onSubmit={handleSubmit}>
          <div className="box">
            <h2>Question</h2><div className="record" onClick={() => {
                                                  setQActive(true)
                                                  setIsListening(prevState => !prevState)
                                                  }}>{isListening && qActive ? <span className="record">🛑</span> : <span className="record">🎙️</span>}</div>
            {(!questionSaved) ?
            <input type="textarea"
              name="question"
              onChange={(e) => setQuestion(e.target.value)}
              value={question}
            />
            :
            <h3>{question}</h3>
            }
          </div>
        </form>
        <form  onSubmit={handleAnswerSubmit}>
          <div className="box">
            <h2>Answer</h2><div onClick={() => {
                                                  setQActive(false)
                                                  setIsListening(prevState => !prevState)
                                                  }}>{isListening && !qActive ? <span className="record">🛑</span> : <span className="record">🎙️</span>}</div>
            {(!answerSaved) ?
            <input type="textarea" 
              name="answer"
              onChange={(e) => setAnswer(e.target.value)} 
              value={answer}
            />
            :
            <h3>{answer}</h3>
            }
          </div>
        </form>
      </div>
      <button onClick={() => {
                            postFlashcard()
                            navigate("/login/set")
                            }}>Save</button>
    </>
  )
}

export default NewCard
