import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const list = ["Apple", "Banana", "Mango"];
  return (
    <>
      <div>
        <ul>
          {list.map((item, index) => 
          <li key={index}>{item}</li>)}
          </ul>        
      </div>
    </>
  )
}

export default App
