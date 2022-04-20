import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
  ]);

  return (
    <div className="App">
      <h1>To-do List</h1>
      <p>0/0 completed</p>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
