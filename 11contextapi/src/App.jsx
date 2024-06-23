import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Todoprovider} from "./context"
import TodoForm from './components/Todoform'
import TodoItem from './components/Todoitem'

function App() {
  const [todos,setTodos]=useState([])

  const addtodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(), ...todo},...prev])
  }
  const updatetodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id
      ===id ?todo :prevtodo
    )))
  }
  const deletetodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!=id))
    /* isme hme prev array se new array bnana h jisme given id vala todo na ho
    toh hm filter use krke jo given id vale todos ni h unhe lelengee and new array bna lenge
     */
  }
  const togglecomplete=(id)=>{
    setTodos((prev)=>prev.map((prevtodo)=>prevtodo.id===id
  ?{...prevtodo, completed:!prevtodo.completed}:prevtodo))
  }

  /* LOCAL STORAGE  */

  useEffect(()=>{
// local storage can be accessed directly on server side rendering
const todos=JSON.parse(localStorage.getItem("todos"))
if(todos && todos.length>0){
  setTodos(todos)
}
  },[])


  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))

  },[todos])


  return (
    <Todoprovider value={{todos,addtodo,updatetodo,deletetodo,togglecomplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    {todos.map((todo)=>(
                      <div key={todo.id} className='w-full'>
                        <TodoItem todo={todo}/>


                      </div>
                    )

                    )}
                    </div>
                </div>
            </div>
          
    </Todoprovider>
  )
}

export default App
