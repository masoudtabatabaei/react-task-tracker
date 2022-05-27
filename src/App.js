import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Tasks from "./components/tasks/tasks";
import AddTask from "./components/addTask/addTask";
import "./App.css";
import About from "./components/about/about";

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
  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
    });
    const tasksClone = [...tasks];
    const filtered = tasksClone.filter((task) => task.id !== id);
    setTasks(filtered);
  };

  // fetch tasks
  const fetchATask = async (id) => {
    const result = await fetch(`http://localhost:8000/tasks/${id}`);
    const data = await result.json();

    return data;
  };

  // handle toggle on task
  const handleToggle = async (id) => {
    const task = await fetchATask(id);
    const updatedTask = { ...task, reminder: !task.reminder };

    const result = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await result.json();
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: data.reminder } : task;
      })
    );
  };

  // submit new task
  const handleSubmitTask = async (task) => {
    const newId = tasks[tasks.length - 1].id + 1;
    const newTask = { ...task, id: newId };
    const result = await fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newTask),
    });

    const data = await result.json();
    setTasks([...tasks, data]);
  };

  // handle show Add task form
  const handleShowForm = () => {
    setShowAddTaskForm(!showAddTaskForm);
    setShowAddTaskBtn(!showAddTaskBtn);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Menu />
        <Header showAddTaskBtn={showAddTaskBtn} onShowForm={handleShowForm} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <AddTask
                  onSubmit={handleSubmitTask}
                  showAddTaskForm={showAddTaskForm}
                />
                {tasks.length === 0 ? (
                  "There aren't any task"
                ) : (
                  <Tasks
                    tasks={tasks}
                    onDelete={handleDelete}
                    onToggle={handleToggle}
                  />
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        {}
      </div>
    </BrowserRouter>
  );
}

export default App;
