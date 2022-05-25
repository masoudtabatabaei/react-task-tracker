import { useState } from "react";
import Header from "./components/header/header";
import Tasks from "./components/tasks/tasks";
import AddTask from "./components/addTask/addTask";
import "./App.css";

function App() {
  const taskList = [
    {
      id: 1,
      text: "Send Resume for X company",
      day: "May 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Answer questions on Stackoverflow",
      day: "May 10th at 10:15am",
      reminder: true,
    },
    {
      id: 3,
      text: "Debug B2B web application",
      day: "May 12th at 3:45pm",
      reminder: false,
    },
  ];

  const [tasks, setTasks] = useState(taskList);

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

  return (
    <div className="container">
      <Header />
      <AddTask onSubmit={handleSubmitTask} />
      {tasks.length === 0 ? (
        "There aren't any task"
      ) : (
        <Tasks tasks={tasks} onDelete={handleDelete} onToggle={handleToggle} />
      )}
    </div>
  );
}

export default App;
