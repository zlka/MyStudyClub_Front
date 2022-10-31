import React from 'react'
import { SignIn, useToken } from '../../components'

const Login = () => {

  const { token, removeToken, setToken } = useToken()

  return (
    <div>
      <h2>Hello I'm the Login Page</h2>
      <SignIn setToken={setToken}/>
    </div>
  )
}

export default Login
