import React, { useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './signup.css'

const SignUp = () => {

  const [newUser, setNewUser] = useState({
    full_name: "",
    user_name: "",
    email: "",
    password: ""
  })

  function signMeUp(event) {
    axios({
      method: "POST",
      url: "http://127.0.0.1:5000/students", //change for deployed server
      data: {
        full_name: newUser.email,
        user_name: newUser.user_name,
        email: newUser.email,
        password: newUser.password
      }
    })

    setNewUser({
      full_name: "",
      user_name: "",
      email: "",
      password: ""
    })

    event.preventDefault()
  }

  function handleChange(event) {
    const { value, name } = event.target
    setNewUser(prevNote => ({
      ...prevNote, [name]: value
    }))
  }
  return (

  <div>

    <Form className='register'>
    <label>Full Name</label>
    <input onChange={handleChange}
      type="full_name"
      text={newUser.full_name}
      name="full_name"
      id="fullName"
      value={newUser.full_name} />

    <label>Username</label>
    <input onChange={handleChange}
    type="user_name"
    text={newUser.user_name}
     name="user_name"
    id="username"
    value={newUser.user_name}/>

    <label>Email Address</label>
    <input onChange={handleChange}
      type="email"
      text={newUser.email}
      name="emailUp"
      id="emailUp"
      value={newUser.email}/>
    <p className="text-muted" >We'll never share your email with anyone else </p>

    <label>Password</label>
    <input onChange={handleChange}
      type="password"
      text={newUser.password}
      name="passwordUp"
      id="passwordUp"
      value={newUser.password}/>

        {/* <Form.Check type="checkbox" label="Keep me update" /> */}
      <button type="submit" id="submitUp" onClick={signMeUp}>
      Sign Up
    </button>

    </Form>
  </div>
  )
}

export default SignUp


    // full_name = db.Column(db.String(50), nullable=False)
    // user_name = db.Column(db.String(20), nullable=False)
    // email = db.Column(db.String(50), nullable=False)
    // password = db.Column(db.String(20), nullable=False)
