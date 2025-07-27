import { useState } from "react";
import Todoitem from "./Todoitem";
import './todolist.css';

export default function Todolist() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleAddTask() {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  }

  function handleDeleteTask(indexToDelete) {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  }

  return (
    <div className="todo-container">
      <h2>To Do List</h2>
      <div className="todo-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <ul className="todo-list">
        {tasks.map((task, index) => (
          <Todoitem
            key={index}
            text={task}
            onDelete={() => handleDeleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}
