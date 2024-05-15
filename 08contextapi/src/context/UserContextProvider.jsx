import React from 'react'
import UserContext from './UserContext'

// file ka naame jsx rkha kyuki hm jo fragments likhenge toh usko top level pr rkhna pdega taki baki sb ka access mile

// step 3
const UserContextProvider = ({children})=>{
    const {user,setuser}=React.useState(null)
    return (
        <UserContext.Provider val={{user,setuser}}>
        {children}
        </UserContext.Provider>
    )

}


export default UserContextProvider