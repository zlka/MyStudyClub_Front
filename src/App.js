import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CardView, Dashboard, Home, Login, Game, ClubView } from './pages';
import { useToken, Profile, SignIn } from './components'
import { Header, Footer } from './Layout'

function App() {

	const { token, removeToken, setToken } = useToken()

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
