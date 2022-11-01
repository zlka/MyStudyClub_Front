import React, { useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './login.css'


const SignIn = (props) => {

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate();

  function logMeIn(event) {
    axios({
      method: "POST",
      url: "http://127.0.0.1:5000/token", //change for deployed server
      data: {
        email: loginForm.email,
        password: loginForm.password
      }
    })
      .then((response) => {
        props.setToken(response.data.access_token)
      }).catch((error) => {
        if (error.response) {
          console.warn(error.response)
          console.warn(error.response.status)
          console.warn(error.response.headers)
        }
      })

    setLoginForm({
      email: "",
      password: ""
    })

    event.preventDefault()
  }

  function redirect () {
    navigate('/dashboard')
  }

  function actions () {
    SignIn();
    redirect()
  }

  function handleChange(event) {
    const { value, name } = event.target
    setLoginForm(prevNote => ({
      ...prevNote, [name]: value
    }))
  }
  return (

  <div>



<form className="login">

    <label>Email address</label>
      <input onChange={handleChange}
        type="email"
        text={loginForm.email}
        name="email"
        value={loginForm.email} />

     <label>Password</label>
     <input onChange={handleChange}
        type="password"
        text={loginForm.password}
        name="password"
        value={loginForm.password} />

      <button id="submit" onClick={actions}>Log In</button>
    </form>
    {/* <Form className='login'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <label>Email address</label>
        <Form.Control onChange={handleChange}
        type="email"
        text={loginForm.email}
        name="email"
        id="formInput"
        // placeholder="Enter email"
        value={loginForm.email}/>
        <Form.Text className="text-muted" >
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleChange}
        type="password"
        text={loginForm.password}
        name="password"
        id="formInput"
        // placeholder="Password"
        value={loginForm.password}/>
      </Form.Group> */}
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      {/* <Button variant="primary" type="submit" onClick={logMeIn}>
        Submit
      </Button>
    </Form> */}
    
    
  </div>
  )
}

export default SignIn
