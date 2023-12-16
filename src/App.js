import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToDoItem, updateTodoItem } from './slice/todoSlice';
import { useState } from 'react';

function App() {
  const todo = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [todoItem, setToDoItemInList] = useState("");
 

  const handleInputTask = (e) => {
    setInput(e.target.value);

  };

  console.log(todo)
  return (
    <div className="App">
      <header className="todo-header">
        List down 📝
      </header>
      <div>
        <ul>
        {/* controlled input and uncrolled input */}
          {todo.map((item, index) => (<li key={index}> <input type='checkbox' value={item.status} onChange={() => dispatch(updateTodoItem(index))} /> {item.taskName}</li>))}
        </ul>
        <label>Add new to do item</label>

        <input value={input} onChange={handleInputTask} />

        <button className="add-todo" onClick={() => {
          dispatch(addToDoItem(input)); 
          setInput("");
        }} disabled={input ? false : true}
        >+</button>
      </div>
    </div>
  );
}

export default App;


// handling of empty data  --
// clearinh input field after adding the task --
// marking done for the task --
// UI
// upon refesh kuch na ude
// delete the task
// cross off the task

