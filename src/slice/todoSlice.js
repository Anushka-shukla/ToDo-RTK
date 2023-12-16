import {createSlice } from "@reduxjs/toolkit";

const initialState = { todoList: []};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers : {
        addToDoItem: (state, action)=>{
            state.todoList = state.todoList.concat({taskName: action.payload, status: false})

        },
        // when the user has completed the task 
        updateTodoItem: (state, action)=>{
            // console.log(action.payload);
            // console.log(state.todoList[action.payload].status)
            state.todoList[action.payload].status = !state.todoList[action.payload].status;

        }

        // deleteTodo: (state)=>{

        // }

    }
})

export const { addToDoItem, updateTodoItem } = todoSlice.actions;

export default todoSlice.reducer;