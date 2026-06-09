import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(prev => prev + 1);
  }
  const decrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  }

  return (
    <>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        
        <h2>Count is: {count}</h2>
        
      </div>
    </>
  )
}

export default App
