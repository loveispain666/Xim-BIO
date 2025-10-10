import { useState } from 'react'
import photo from './assets/photo.jpg'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="bg">
        <div className='Avatar'>
          <img src={photo} alt="Avatar" />
        </div>
        <div className='Name'>Xim</div>
        <div className='Bio'>python, web dev, design</div>
        <div className='Links'></div>
        <div className='Music'></div>
      </div>
    </div>
  )
}

export default App
