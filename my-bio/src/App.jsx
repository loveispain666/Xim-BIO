import React from 'react'
import Profile from './components/Profile/Profile'
import Player from './components/Player/Player'
import './App.css'

function App() {
	return (
		<>
			<Profile />
			<Player audioSrc="/musicplayer/241406897.mp3" />
		</>
	)
}

export default App
