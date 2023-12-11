import {createSlice } from "@reduxjs/toolkit";

const initialState = { todoList: []};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers : {
        addToDoItem: (state, action)=>{
            state.todoList = state.todoList.concat({taskName: action.payload, status: false})

        }
        
        // updateTodoItem: (state)=>{

        // },

        // deleteTodo: (state)=>{

        // }

    }
})

export const { addToDoItem } = todoSlice.actions;

export default todoSlice.reducer;