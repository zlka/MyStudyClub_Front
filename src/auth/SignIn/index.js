import React, { useState } from 'react'
import { setAuthToken } from '../../helpers/setAuthToken'
import axios from 'axios';
import './login.css'


const SignIn = (props) => {

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  })

  const [hidden, setHidden] = useState(true)

  function logMeIn(event) {
    axios({
      method: "POST",
      url: "https://my-study-club.herokuapp.com/token",
      data: {
        email: loginForm.email,
        password: loginForm.password
      }
    })
      .then((response) => {
        //get token from response
        const userToken = response.data.access_token
        //set JWT token to local
        localStorage.setItem('token', userToken)
        //set token to axios common header
        setAuthToken(userToken);
        //redirect user to dashboard page
        window.location.href = '/dashboard'

      }).catch((error) => {
        if (error.response) {
          console.warn(error.response)
          console.warn(error.response.status)
          console.warn(error.response.headers)
          setHidden(false)
          console.log('error', hidden)
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

        <button id="submit" onClick={logMeIn}>Log In</button>
        <p hidden={hidden}> Please check you email or password</p>
        
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
