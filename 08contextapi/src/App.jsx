import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
 

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>

      
    </UserContextProvider>
  )
}

export default App


/*
context Api-> Context API is used to pass global variables anywhere in the code. It helps when there is a need for sharing state between a lot of nested components.
 It is light in weight and easier to use, to create a context just need to call React.

 Context, in React, is a way to pass data down through a component tree without having to pass props down through every level. This can be very helpful since this
  allows us to share data between components that are not directly related to each other 
*/

/*
useContext is a React Hook that lets you read and subscribe to context from your component.

syntax: const value = useContext(SomeContext)

*/