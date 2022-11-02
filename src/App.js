import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { CardView, NotFound, Dashboard2, Home, Game, Set, Edit } from './pages';
import { setAuthToken } from './helpers/setAuthToken';
import { useToken } from './auth';
import { Footer, Header } from './layout'
import './App.css'


function App() {

  // const { token, removeToken, setToken } = useToken()

  // const RouteGuard = ({ element: Element, ...rest}) => {

  function hasJWT() {
    localStorage.removeItem('token')
    let flag = false;
    //check user has JWT token
    localStorage.getItem('token') ? flag = true : flag = false
    console.log(flag)
    return flag
  }

  return (
    <div className="App">
      <main>
        <Header />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/dashboard'
            element={
              hasJWT() ?
                <Dashboard2 />
                : (
                  <Navigate to={{ pathname: '/' }}/>
                )}
          />
          <Route path='dashboard/practise'
            element={
              hasJWT() ?
                <CardView />
                : (
                  <Navigate to={{ pathname: '/' }}/>
                )}
          />
          <Route path='/dashboard/test'
            element={
              hasJWT() ?
                <Game />
                : (
                  <Navigate to={{ pathname: '/' }}/>
                )}
          />
          <Route path='/dashboard/set'
            element={
              hasJWT() ?
                <Set />
                : (
                  <Navigate to={{ pathname: '/' }}/>
                )}
          />
          <Route path='/dashboard/edit'
            element={
              hasJWT() ?
                <Edit />
                : (
                  <Navigate to={{ pathname: '/' }}/>
                )}
          />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
