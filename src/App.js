import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [completedTasksCount, setCompletedTasksCount] = useState(0);

  function addTask() {
    if (newTask !== "") {
      setTasks([...tasks, { id: tasks.length + 1, title: newTask }]);
      setNewTask("");
    }
  }

  function completeTask(e) {
    if (e.target.checked) {
      tasks.find(task => task.id === +e.target.id).isDone = true;
      setCompletedTasksCount(completedTasksCount + 1);
    } else {
      tasks.find(task => task.id === +e.target.id).isDone = false;
      setCompletedTasksCount(completedTasksCount - 1);
    }
    setTasks([...tasks]);
  }

  return (
    <div className="App">
      <h1>To-do List</h1>
      <p>
        {completedTasksCount}/{tasks.length} completed
      </p>
      <ul className="list">
        {tasks.map(task => (
          <li key={task.id}>
            <input onChange={completeTask} type="checkbox" id={task.id} />
            {task.isDone ? <s>{task.title}</s> : <span>{task.title}</span>}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button className="add-button" onClick={addTask}>
        Add task
      </button>
    </div>
  );
}

export default App;
