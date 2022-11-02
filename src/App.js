import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CardView, Dashboard, Dashboard2, Home, Login, Game, Set, Edit } from './pages';
import { useToken, Profile, SignIn } from './components'
import { Footer, Header } from './Layout'

function App() {

	const { token, removeToken, setToken } = useToken()

	return (
		<div className="App">
			<main>
			<Header />
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
								<Route path="/dashboard2" element={<Dashboard2 />}></Route>
								<Route path="practise" element={<CardView />}></Route>
								<Route path="test" element={<Game />}></Route>
								<Route path="set" element={<Set />}></Route>
								<Route path="edit" element={<Edit />}></Route>
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
