import React, {useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setUsername] =useState('')
    const [password,setPassword] =useState('')

    
    const {setUser}=useContext(UserContext)
    // we have taken setuser pehle in usercontextprovider
// here we are consuming context values through useContext hook
//Any component that is nested within UserContextProvider can access the context values using useContext.

    const handlesubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})

    }// ise new values bhejdiaa
    /*
    setUser is a function: It comes from something called UserContext, which is a way to share data across different parts of your app without passing it through props.

What setUser does: When you call setUser and give it an object with username and password, it updates the user information stored in UserContext.

Why this is useful: By updating the user information in UserContext, any part of your app that is connected to UserContext will automatically get the updated user information. This means you don't have to manually pass the new user data to every component that needs it.
    
    
    */

// data lena kese hai i.e data extract kese kre abhi toh user m values set ho gai vaha se len bhi toh pdegi


    return (
        <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}

        placeholder='username'/>
        {" "}
        
        <input type='text'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password'/>
        <button onClick={handlesubmit}>Submit</button>


        </div>
    )
}

export default Login

