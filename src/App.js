import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToDoItem } from './slice/todoSlice';
import { useState } from 'react';

function App() {
  const todo = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [todoItem, setToDoItemInList] = useState("");

  const handleInputTask=(e)=>{
    setInput(e.target.value);
  };

  const handleAddBtnClick=()=>{
    
  };

  console.log(todo)
  return (
    <div className="App">
      <header className="todo-header">
        List down 📝
      </header>
      <div>
        <ul>
          {todo.map((item)=>(<li>{item.taskName}</li>))}
        </ul>
        <label>Add new to do item</label>
        <input value={input} onChange={handleInputTask}/>
        <button className="add-todo" onClick = {()=>
          dispatch(addToDoItem(input))
        }>+</button>
      </div>
    </div>
  );
}

export default App;
