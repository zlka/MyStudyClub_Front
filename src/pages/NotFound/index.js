import React from 'react'
import { Link } from 'react-router-dom'
import './notFound.css'

function NotFound() {

  return (
    <>
    <div class='not-found'>
      <h1>404 Page not found</h1>
      <h4>Please go to <Link to="/">Home Page</Link></h4>
    </div>
    </>
  );
}

export default NotFound;
