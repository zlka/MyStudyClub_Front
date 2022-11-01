import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CardView, Dashboard, Home, Login, Game, Set } from './pages';
import { useToken, Profile, SignIn } from './components'
import { Footer } from './Layout'

function App() {

	const { token, removeToken, setToken } = useToken()

	return (
		<div className="App">
			<main>
				<Routes>
					<Route index path="/" element={<Home />}></Route>
					{/* ensures user must have a token */}
					<Route path='/login/*' element={!token && token !== "" && token !== undefined ?
						<Login />
						: (
							<>
							<Routes>
								<Route path='/profile' element={<Profile token={token} setToken={setToken} />}></Route>
								<Route path="/dashboard" element={<Dashboard />}></Route>
								<Route path="practise" element={<CardView />}></Route>
								<Route path="test" element={<Game />}></Route>
								<Route path="edit" element={<Set />}></Route>
							</Routes>
							</>
						)}>
					</Route>
				</Routes>
			{/* <Footer /> */}
			</main>
		</div>
	);
}

export default App;
