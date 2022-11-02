import React from 'react'
import './home.css'
import logo from '../../static/logo.png'

const Home = () => {

  return (
    <div className="homepage">
      <div className="home">
      <section className="home-create">
        <img src="" alt="study page sc" />
      <p style={{color:"#47ad96"}}> Easily create and test your knowledge with flashcards.</p>

      </section>
      <section className="home-edit">
        <img src="" alt="show set page " />
      <p style={{color:"#ecb348"}}>Join a study group with friends and share revision cards with each other.Group passcodes ensure privacy of the group and in-chat messages.</p>
      
      </section>

      <section className="home-test"> 
      <img src="" alt="show test page" />
      <p style={{color:"#3966af"}}>Challenge your friends in a fun memory game and claim the top of the leaderboard! </p>
      </section>


      </div>


    </div>

  )
}

export default Home
