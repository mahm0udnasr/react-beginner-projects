import { useState } from "react";
import "../styles/todo.css";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const addTask = () => {
    if (task.trim() === "") {
      return;
    }
    setTasks([...tasks, task]);
    setTask("");
  };
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  return (
    <div className="container">
      <div className="todo">
        <h1>Todo</h1>
        <div className="todo-input">
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul className="todo-list">
          {tasks.map((task, index) => (
            <li key={index}>
              <input type="checkbox" />
              <span>{task}</span>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
