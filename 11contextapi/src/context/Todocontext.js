// return m kuch jsx ni milra toh js rkhdia file ka naam

import {createContext,useContext} from "react"

export const Todocontext=createContext({})

export const useTodo = ()=>{
    return useContext(Todocontext)
}
export const Todoprovider=Todocontext.Provider

