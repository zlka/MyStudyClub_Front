import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './edit.css'
import axios from 'axios';
import { BackButton } from '../../components';

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
    setQuestion(question => question[0].toUpperCase() + question.slice(1) + "?")
    setQuestionSaved(true)

  }
  const handleAnswerSubmit = (e) => {
    e.preventDefault()
    setAnswer(answer => answer[0].toUpperCase() + answer.slice(1) + ".")
    setAnswerSaved(true)
  }
  const patchFlashcard = (e) => {

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
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
    <BackButton />
      <div className="container_v">
        
        <form onSubmit={handleSubmit}>
          
          <div className="box">
            
            <h2>Question</h2><div className="record" onClick={() => {
              document.getElementById("question").focus()
              setQActive(true)
              setIsListening(prevState => !prevState)
            }}>{isListening && qActive ? <span className="record">🛑</span> : <span className="record">🎙️</span>}</div>
            {(!questionSaved) ?
              <input type="textarea"
                id="question"
                name="question"
                onChange={(e) => setQuestion(e.target.value)}
                value={question}
              />
              :
              <h3>{question}</h3>
            }
          </div>
        </form>
        <form onSubmit={handleAnswerSubmit}>
          <div className="box">
            <h2>Answer</h2><div onClick={() => {
              document.getElementById("answer").focus()
              setQActive(false)
              setIsListening(prevState => !prevState)
            }}>{isListening && !qActive ? <span className="record">🛑</span> : <span className="record">🎙️</span>}</div>
            {(!answerSaved) ?
              <input type="textarea"
                id="answer"
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
      
      <div style={{width:"100%",textAlign:"center"}}>
        <button className="saveBtn" onClick={() => {
          patchFlashcard()
          navigate("/dashboard/set", {state:location.state.set_id})
        }}>Save</button>
      </div>
      
    </>
  )
}

export default Edit
