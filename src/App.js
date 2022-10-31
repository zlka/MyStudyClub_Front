import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CardView, Dashboard, Home, Login } from './pages';
import { useToken, Profile, LoginForm } from './components'
import { Header, Footer } from './Layout'

function App() {

	const { token, removeToken, setToken } = useToken()

	return (
		<div className="App">
			<main>
			<Header token={removeToken} />
				<Routes>
					<Route index path="/" element={<Home />}></Route>
					{/* ensures user must have a token */}
					<Route path='/login/*' element={!token && token !== "" && token !== undefined ?
						<LoginForm setToken={setToken} />
						: (
							<>
							<Routes>
							<Route path='/profile' element={<Profile />}></Route>
							<Route path="/dashboard" element={<Dashboard />}></Route>
							<Route path="/view" element={<CardView />}></Route>

							</Routes>
							</>
						)}>
					</Route>
				</Routes>
			<Footer />
			</main>
		</div>
	);
}

export default App;
