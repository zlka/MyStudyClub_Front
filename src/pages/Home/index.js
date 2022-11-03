import React from 'react'
import './home.css'
import flashcard from '../../static/flashcard.gif'
import test from '../../static/test.gif'
import cards from '../../static/cards.png'

const Home = () => {

  return (
    <div className="homepage">
      <div className="home">
      <section className="home-create">
        <img src={flashcard} alt="study page sc" />
      <p style={{color:"#ecb348"}}> Easily create and test your knowledge with flashcards.</p>

      </section>

      <section className="home-test"> 
     
      <p style={{color:"#47ad96"}}>Apply recognition learning as a memory technique in the card matching game.</p>
      <img src={cards} alt="show test page" />
      </section>

      <section className="home-edit">
        <img src={test} alt="show set page " />
      <p style={{color:"#3966af"}}>Create or join a study clubs to share revision cards with each other.Group passcodes ensure privacy of the group.</p>
    
      </section>



      </div>


    </div>

  )
}

export default Home
