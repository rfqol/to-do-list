import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasksCount, setCompletedTasksCount] = useState(0);

  async function addTask() {
    await setTasks([...tasks, { id: Date.now() }]);
    let tasksNodeList = document.querySelectorAll(".list__title");
    let currentTask = tasksNodeList[tasksNodeList.length - 1];
    currentTask.focus();
    currentTask.addEventListener("keypress", e => {
      if (e.key === "Enter") {
        e.preventDefault();
        currentTask.blur();
      }
    });
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

  function deleteTask(task) {
    task.isDone && setCompletedTasksCount(completedTasksCount - 1);
    setTasks(tasks.filter(t => t.id !== task.id));
  }

  return (
    <div className="App">
      <h1 className="title">To-do List</h1>
      {tasks.length ? (
        <p className="subtitle">
          {completedTasksCount}/{tasks.length} completed
        </p>
      ) : (
        <p className="subtitle">No tasks</p>
      )}
      <ul className="list">
        {tasks.map(task => (
          <li className="list__item" key={task.id}>
            <div>
              <input
                className="item-check"
                tabIndex="-1"
                onChange={completeTask}
                type="checkbox"
                id={task.id}
              />
              {task.isDone ? (
                <s>{task.title}</s>
              ) : (
                <span
                  className="list__title"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                  tabIndex="-1"
                  onBlur={e => {
                    if (!e.target.innerText) {
                      deleteTask(task);
                    }
                    tasks.find(t => t.id === task.id).title =
                      e.target.innerText;
                  }}
                >
                  {task.title}
                </span>
              )}
            </div>
            <button
              onClick={() => deleteTask(task)}
              tabIndex="-1"
              className="remove-button"
            >
              <FaTimes style={{ verticalAlign: "middle" }} />
            </button>
          </li>
        ))}
      </ul>
      <button className="add-button" onClick={addTask} key="w">
        Add task
      </button>
    </div>
  );
}

export default App;
