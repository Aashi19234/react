// Steps to create store
//  1) import configure store
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from "../features/todo/todoSlice";


export const store= configureStore({
    reducer:todoReducer
});

 // 2) create slice-> we have created a todoSlice