import React from 'react'
import { Route, redirect, Navigate } from 'react-router-dom'


const RouteGuard = ({ element: Element, ...rest}) => {

  function hasJWT(){
    let flag = false;

    //check user has JWT token
    localStorage.getItem('token') ? flag=true : flag=false

    return flag
  }
  
  return (
    <Route {...rest}
      children={props => (
        hasJWT() ?
        <Element {...props} />
        :

        <Navigate to={{ pathname: '/home'}}/>
    
      )}
    />
    
  )
}

export default RouteGuard
