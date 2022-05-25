import { useState, useEffect } from "react";
import Header from "./components/header/header";
import Tasks from "./components/tasks/tasks";
import AddTask from "./components/addTask/addTask";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [showAddTaskBtn, setShowAddTaskBtn] = useState(true);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromSerevr = await fetchTasks();
      setTasks(tasksFromSerevr);
    };
    getTasks();
  }, []);

  // fetch tasks
  const fetchTasks = async () => {
    const result = await fetch("http://localhost:8000/tasks");
    const data = await result.json();

    return data;
  };

  // handle delete task
  const handleDelete = (id) => {
    const tasksClone = [...tasks];
    const filtered = tasksClone.filter((task) => task.id !== id);
    setTasks(filtered);
  };

  // handle toggle on task
  const handleToggle = (id) => {
    const tasksClone = [...tasks];
    const index = tasksClone.findIndex((task) => task.id === id);
    tasksClone[index].reminder = !tasksClone[index].reminder;

    setTasks(tasksClone);
  };

  // submit new task
  const handleSubmitTask = (task) => {
    const newId = tasks[tasks.length - 1].id + 1;
    const newTask = { ...task, id: newId };
    console.log(newTask);
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // handle show Add task form
  const handleShowForm = () => {
    setShowAddTaskForm(!showAddTaskForm);
    setShowAddTaskBtn(!showAddTaskBtn);
  };

  return (
    <div className="container">
      <Header showAddTaskBtn={showAddTaskBtn} onShowForm={handleShowForm} />
      <AddTask onSubmit={handleSubmitTask} showAddTaskForm={showAddTaskForm} />
      {tasks.length === 0 ? (
        "There aren't any task"
      ) : (
        <Tasks tasks={tasks} onDelete={handleDelete} onToggle={handleToggle} />
      )}
    </div>
  );
}

export default App;
