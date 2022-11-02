import React from 'react'
import { Link } from 'react-router-dom'
import './notFound.css'

function NotFound() {

  return (
  <div style={{width:"100%"}}>
      <h2>Sorry, that page doesn't exist!</h2>
      <h4>Lets to back to <Link to="/">Home Page</Link></h4>
    </div>

  );
}

export default NotFound;
