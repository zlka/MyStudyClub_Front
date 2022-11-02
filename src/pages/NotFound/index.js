import React from 'react'
import { useLocation, Link } from 'react-router-dom'

function NotFound() {

  const location = useLocation()
  return (
    <>
      <h1>Sorry, { location.pathname } not found</h1>
      <Link to="/">Please go to Home Page</Link>
    </>
  );
}

export default NotFound;
