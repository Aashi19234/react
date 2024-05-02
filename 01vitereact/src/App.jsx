
import Foo from "./new"

function App() {
  // how to inject js or variables in jsx
  // x-> it refers to the html part
  const username="chai aur code"
  // {username}-> this is called evaluated expression bcoz here we are not writing entire js just its outcome
   // here we can only write final outcome
   // all the evaluation part has to be done before this, here in the function part not in return statement
   //loops, condition cannot be written in return statement because 
  return (
    <>
    <h1>chai aur react {username}</h1>
    <Foo/>
    </>
    
  )
}

export default App


// we can wrap up the elements in div tag or <></> this empty tag.
