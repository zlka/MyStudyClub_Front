import React,{ useState } from 'react'
// import axios from "axios"
import logo from '../../static/logo.png'
import './header.css'
import { XLg,Search } from 'react-bootstrap-icons';
import { SignIn, SignUp } from '../../components/'

function Header(props) {
  const [dis , setDisplay] = useState("")
  const [hidden , setHidden] = useState(true)
  const [appear , setAppear] = useState(true)

  

  const openModal= () => {
    setDisplay("block")
    setHidden(!hidden)
  };


  const closeModal = () => {
    setDisplay("none")
  };

  return(
    <header className="navHeader">
      <img src={logo} alt="my study club" />

      <div className="searchBar" hidden={appear}>
        <input className ="search" type="text" />
        <button className="searchBtn" style={{color:'grey'}}><Search /></button>
        
      </div>

      <div className="registration" >
        <button id="login" onClick={openModal} > Login </button> | 
        <button id="register" onClick={openModal}> Sign Up </button>
        {/* <button  onClick={logMeOut}>Logout </button> */}

        <div className="modal" style={{display: dis}} hidden={!hidden}>
          <div className="login-modal">
          <XLg onClick={closeModal} className="exit-btn"/>
          <SignUp />
          </div>
        </div>

        <div className="modal" style={{display: dis}} hidden={hidden}>
          <div className="register-modal">
            <XLg onClick={closeModal} className="exit-btn"/>
            <SignIn />
          </div>
        </div>

      </div>
      
    </header>
  )
}

export default Header
// function logMeOut() {
  //   axios({
  //     method: "POST",
  //     url: "http://127.0.0.1:5000/logout"
  //   })

  //   .then((response) => {
  //     props.token()
  //   }).catch((error) => {
  //     if (error.response) {
  //       console.warn(error.response)
  //       console.warn(error.response.status)
  //       console.warn(error.response.headers)
  //     }
  //   })
  // }
