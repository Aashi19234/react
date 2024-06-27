import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'
import Addtodo from './components/Addtodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <Addtodo/>
      <Todos/>

          
    </>
  )
}

export default App
