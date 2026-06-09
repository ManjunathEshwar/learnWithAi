import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
   const [data, setData] = useState("");
  return (
    <>
      <div>
        <input value={data} onChange={(e) => setData(e.target.value)} placeholder='Enter Something.!'></input>
        <h2>{data}</h2> 
      </div>
    </>
  )
}

export default App
