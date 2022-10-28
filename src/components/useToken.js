import {useState} from react 
import React from 'react'

function useToken() {

	// retrieve the token stored in the localStorage and only returns if exists
	function getToken() {
		const userToken = localStorage.getItem('token')
		return userToken && userToken
	}

	// used to handle the state of the token. Ensures that the app always reloads when any funciton is called.
	const [token, setToken] = useState(getToken())

	// handles the storage of the token obtained when users log in
	function saveToken(userToken) {
		localStorage.setItem('token', userToken) //allow to access token from all tabs
		setToken(userToken)
	}

	function removeToken() {
		localStorage.removeItem('token')
		setToken(null)
	}
}
