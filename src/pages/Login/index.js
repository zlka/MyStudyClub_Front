import React from 'react'
import { LoginForm, useToken } from '../../components'

const Login = () => {

  const { token, removeToken, setToken } = useToken()

  return (
    <div>
      <h2>Hello I'm the Login Page</h2>
      <LoginForm setToken={setToken}/>
    </div>
  )
}

export default Login
