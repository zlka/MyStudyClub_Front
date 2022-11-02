import React, { useState, useEffect } from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import './edit.css'
import axios from 'axios';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function Edit() {
  const location = useLocation();
  const navigate = useNavigate();
  const [qActive, setQActive] = useState(true)
  const [isListening, setIsListening] = useState(false)

  const [question, setQuestion] = useState(location.state.question)
  const [answer, setAnswer] = useState(location.state.answer)
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
    if (!location.state) {
      let data = JSON.stringify({
        "question": question,
        "answer": answer,
        "set_id": 4,
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
    else {
      let data = JSON.stringify({
        "question": question,
        "answer": answer
      });

      var config = {
        method: 'patch',
        url: `https://my-study-club.herokuapp.com/flashcards/${location.state.id}`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };

      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    }
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
                            navigate("/dashboard/set", {state:location.state.set_id})
                            }}>Save</button>
    </>
  )
}

export default Edit


/* <div className="box">
          <h2>Current Note</h2>
          {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
          <button className="e-btn" onClick={handleSaveNote} disabled={!note}>
            Save Note
          </button>
          <button className="e-btn" onClick={() => setIsListening(prevState => !prevState)}>
            Start/Stop
          </button>
          <p>{note}</p>
        </div>
        <div className="box">
          <h2>Notes</h2>
          {savedNotes.map(n => (
            <p key={n}>{n}</p>
          ))}
        </div> */
