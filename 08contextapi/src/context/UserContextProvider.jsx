import React,{useState} from 'react'
import UserContext from './UserContext'

// file ka naame jsx rkha kyuki hm jo fragments likhenge toh usko top level pr rkhna pdega taki baki sb ka access mile

// step 3
const UserContextProvider = ({children})=>{
    const [user,setUser]=useState(null)
    return (
        <UserContext.Provider value={{user,setUser}}>
        {children}
         
        </UserContext.Provider>

        /*
        The UserContext.Provider is a context
         provider component that makes the user state and setuser function
          available to any nested components that consume this context.
        */

          /*
           This line inserts the children prop, which means
            any nested components passed into UserContextProvider will be rendered here. 
           */
    )

}


export default UserContextProvider

/*
Three steps of context
1) creating a context that we have done in usercontext.js
2) providing the context values that we have done through usercontextprovider.jsx
3) consuming these values wherever required which we have done in our components folder

*/