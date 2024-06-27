// creating slice

import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState= {
    todos:[{id:1, text:"Hello World"}]

    
}

export const todoSlice=createSlice({
name :'todo',
initialState,
reducers:{
    addTodo: (state,action)=>{
        const todo={
            id:nanoid(),
             text:action.payload
             // payload is an object jiske andr se hm cheeze extract kr skte h


        }
        state.todos.push(todo)
    },
    removeTodo: (state,action)=>{
        state.todos=state.todos.filter((todo)=>todo.id !==action.payload)
    }
    // do update function as homework
    
}

})
 /*slices have names, initialState, reducers.
 Reducers contain property and functions.
 In case of reducers we dont just declare function we also
 write its definition. A function will have state and action as parameters.*/


export const {addTodo,removeTodo}= todoSlice.actions

export default todoSlice.reducer

/*

individual reducers ko bhi export krna h kyuki vo components m use hnge and 
whole reducer bhi krna pdegaaa

*/