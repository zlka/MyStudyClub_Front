import React from 'react'
import { Routes, Route, redirect, Switch } from 'react-router-dom'
import { CardView, Dashboard, Dashboard2, Home, Game, Set } from './pages';
import { useToken, Profile, SignIn } from './components'
import { Footer, Header } from './Layout'


function App() {

  const { token, removeToken, setToken } = useToken()

  return (
    <div className="App">
      <main>
        <Header />
          <Routes>
            <Route index exact path='/' element={<Home/>} />
          </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
