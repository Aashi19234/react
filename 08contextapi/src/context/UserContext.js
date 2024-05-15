// iska name .js rakha kyuki isme pure javascript h

import React from 'react'

// create a context

//step 1 of creating a global variable



const UserContext = React.createContext()

export default UserContext;


// Step 2-> context bnane k baad uske saath provider bnana hga
//provider data provide hga
// provider k andr hm required components bnaenge fir usko usercontext m wrap krdenge
// ab y saare components usercontext k through sari states ka access le skte h

