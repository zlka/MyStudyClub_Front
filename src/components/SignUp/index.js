import React, { useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control onChange={handleChange}
        type="full_name"
        text={newUser.full_name}
        name="full_name"
        placeholder="Full Name"
        value={newUser.full_name} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
        <Form.Control onChange={handleChange}
        type="user_name"
        text={newUser.user_name}
        name="user_name"
        placeholder="Username"
        value={newUser.user_name}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email Address</Form.Label>
        <Form.Control onChange={handleChange}
        type="email"
        text={newUser.email}
        name="email"
        placeholder="Email"
        value={newUser.email}/>
        <Form.Text className="text-muted" >
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleChange}
        type="password"
        text={newUser.password}
        name="password"
        placeholder="Password"
        value={newUser.password}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Keep me update" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={signMeUp}>
        Submit
      </Button>
    </Form>
  </div>
  )
}

export default SignUp


    // full_name = db.Column(db.String(50), nullable=False)
    // user_name = db.Column(db.String(20), nullable=False)
    // email = db.Column(db.String(50), nullable=False)
    // password = db.Column(db.String(20), nullable=False)
