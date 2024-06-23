// return m kuch jsx ni milra toh js rkhdia file ka naam

import {createContext,useContext} from "react"

export const Todocontext=createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false,
        }

    ],
    addtodo:(todo)=>{},
    updatetodo:(id,todo)=>{},// isme hm todo bhi lenge kyyuki update krke new todo jaega isme
    

    deletetodo:(id)=>{},
    togglecomplete:(id)=>{}
})

export const useTodo = ()=>{
    return useContext(Todocontext)
}
export const Todoprovider=Todocontext.Provider
// har jagah todocontext.provider na likhna pde islie isko 
// variable mei store krre hai

