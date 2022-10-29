import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CardView, Dashboard, Home } from './pages';
import { useToken, Header, Profile, Login, Cards } from './components'

function App() {

  const { token, removeToken, setToken } = useToken()

  return (
    // <div className="App">
    //   <Header token={removeToken}/>
    //     {/* ensures user must have a token */}
    //     {!token && token!=="" && token !== undefined ? 
    //     <Login setToken={setToken} /> 
    // :(
      <>  
      <Routes>
          <Route path="" element={<Home/>}></Route>
          <Route path='profile' element={<Profile token={token} setToken={setToken} />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="view" element={<CardView />}></Route>
      </Routes>
      </>
    )}
      
export default App;
