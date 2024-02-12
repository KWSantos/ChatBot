import { useState } from 'react'
import chat from './components/chat'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "App">
      <chat/>

    </div>
    
  )
}

export default App
