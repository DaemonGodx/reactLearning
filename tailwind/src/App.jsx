import { useState } from 'react'
import './App.css'
import Cards from './components/cards.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-green-400 text-[50px] mb-[10px]">Tailwind</div>
      <Cards username="Pritam" btntxt="click me" />
      <Cards username="Craxy" />
     
    </>
  )
}

export default App
