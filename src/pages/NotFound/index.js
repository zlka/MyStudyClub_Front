import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {

  return (
    <>
      <h1>404 Page not found</h1>
      <h4>Please go to <Link to="/">Home Page</Link></h4>
    </>
  );
}

export default NotFound;
