import React from 'react'
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom'
import { CardView, Dashboard, Home, Login, Game, ClubView } from './pages';
import { useToken, Profile, SignIn } from './components'
import { Header, Footer } from './Layout'
=======
import { Routes, Route, Navigate } from 'react-router-dom'
import { CardView, NotFound, Dashboard2, Home, Game, Set, Edit, NewCard } from './pages';
import { Footer, Header } from './Layout'
import './App.css'

>>>>>>> 6a0a02e51ed606fd6ddc49258c30238ff87bd8e4

function App() {

  function hasJWT() {
    let flag = false;
    //check user has JWT token
    localStorage.getItem('token') ? flag = true : flag = false
    return flag
  }

<<<<<<< HEAD
	return (
		<div className="App">
			<main>
			
						
						
							
							<Routes>
								<Route path='/profile' element={<Profile token={token} setToken={setToken} />}></Route>
								<Route path="/dashboard" element={<Dashboard />}></Route>
								<Route path="practise" element={<CardView />}></Route>
								<Route path="test" element={<Game />}></Route>
								<Route path="/club" element={<ClubView />}></Route>
							</Routes>
							
						
			<Footer />
			</main>
		</div>
	);
=======
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
          <Route path='/dashboard/practise'
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
          <Route path='/dashboard/new'
            element={
              hasJWT() ?
                <NewCard />
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
>>>>>>> 6a0a02e51ed606fd6ddc49258c30238ff87bd8e4
}

export default App;

{/* <Header token={removeToken} />
<Routes>
	<Route index path="/" element={<Home />}></Route>
	{/* ensures user must have a token */}
	// <Route path='/login/*' element={!token && token !== "" && token !== undefined ?
	// 	<Login />
	// 	: 
	// 	( */}
