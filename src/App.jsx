import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
   const [data, setData] = useState("");

   const handleSubmit = () => {
    alert(data)
   }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input value={data} onChange={(e) => setData(e.target.value)} placeholder='Enter Something.!'></input>
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
