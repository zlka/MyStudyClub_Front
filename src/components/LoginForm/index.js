import React, { useState } from 'react'
import axios from 'axios';


const LoginForm = (props) => {

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
      <h1>Login</h1>
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
      </form>
    </div>
  )
}

export default LoginForm
