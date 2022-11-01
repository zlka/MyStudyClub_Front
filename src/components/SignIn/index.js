import React, { useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const SignIn = (props) => {

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  })

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

  function handleChange(event) {
    const { value, name } = event.target
    setLoginForm(prevNote => ({
      ...prevNote, [name]: value
    }))
  }
  return (

  <div>
    <Form className='login'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleChange}
        type="email"
        text={loginForm.email}
        name="email"
        placeholder="Enter email"
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
        placeholder="Password"
        value={loginForm.password}/>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit" onClick={logMeIn}>
        Submit
      </Button>
    </Form>
    
    {/* <h1>Login</h1>
    <form className="login">
      <input onChange={handleChange}
        type="email"
        text={loginForm.email}
        name="email"
        placeholder="Email"
        value={loginForm.email} />
      <input onChange={handleChange}
        type="password"
        text={loginForm.password}
        name="password"
        placeholder="Password"
        value={loginForm.password} />

      <button onClick={logMeIn}>Submit</button>
    </form> */}
  </div>
  )
}

export default SignIn
