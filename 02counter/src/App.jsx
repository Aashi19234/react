import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter=15
  const addvalue=()=>{
    console.log("clicked", counter);
    counter=counter+1;// here in browser the value is being updated but not on ui
    // here the problem is ui updation
    

  }

  return (
    <>
      <h1>React Progress</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <br/>
      <button>Remove value</button>
    </>
  )
}

export default App
