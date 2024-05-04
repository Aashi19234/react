import { useState } from 'react'// hook is imported called usestate
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // useState is responsible for changing the state
let [counter,setCounter]=useState(15)// default value di h usestate ko
// usestate 2 cheeze return krta h islie isko array m le rhe h first a variable and then second a method
// the method will control the variable given at 0th index
// kuch bhi ho skta h method ka naam 
  //let counter=15

  
  const addvalue=()=>{
    console.log("clicked", counter);
    //counter=counter+1;// here in browser the value is being updated but not on ui
    // here the problem is ui updation
    if(counter<20){
    setCounter(counter+1)
    }
    else{
      console.log("cannot increase value")
    }
    
    // iss code se jaha jaha bhi counter variable hoga sb jgh ho jaegi change value



  }
  let[value,setvalue]=useState(10)
  // usestate hook -> The useState hook in React is used to manage state in function components.
  // It allows you to declare a state variable and a function to update it
  const removevalue=()=>{
    console.log("clicked",value);
    if(value>0){
    setvalue(value-1)
    }
    else{
      console.log("No negative value needed");
    }
  }
// react controls ui updation
  // hooks- helps in data updation in UI
  // Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.
  //Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes.
  // In React, state is a plain JavaScript object that stores data specific to a component.


  return (
    <>
      <h1>React Progress {counter}</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <br/>
      <button onClick={removevalue}>Remove value {value}</button>
    </>
  )
}

export default App

// why javascript cannot update all counter variables like this?
//-> When you create a button in JavaScript with an onclick function that increases the value of a counter variable by 1, 
//it will only affect the counter variable within the scope of your JavaScript code.
