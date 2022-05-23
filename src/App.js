import { useState } from "react";
import Header from "./components/header/header";
import Tasks from "./components/tasks/tasks";
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

  // handle toggle
  const handleToggle = (id) => {
    const tasksClone = [...tasks];
    const index = tasksClone.findIndex((task) => task.id === id);
    tasksClone[index].reminder = !tasksClone[index].reminder;

    setTasks(tasksClone);
  };

  return (
    <div className="container">
      <Header />
      {tasks.length === 0 ? (
        "There aren't any task"
      ) : (
        <Tasks tasks={tasks} onDelete={handleDelete} onToggle={handleToggle} />
      )}
    </div>
  );
}

export default App;
