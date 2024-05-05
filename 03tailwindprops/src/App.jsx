import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
let myobj={
  username:"Aastha",
  age:21
}
let newArr=[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username="Aastha" btntext="Click me" />
      <Card username="Pranav" btntext="Visit me"/>

    </>
  )
}

export default App

// we cannot pass arrays,objects directly as parameters or props.
// we have to convert it into a variable,then we can pass. 