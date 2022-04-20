import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    setTasks([...tasks, { id: tasks.length + 1, title: newTask }]);
    setNewTask("");
  }

  return (
    <div className="App">
      <h1>To-do List</h1>
      <p>0/0 completed</p>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add task</button>
    </div>
  );
}

export default App;
