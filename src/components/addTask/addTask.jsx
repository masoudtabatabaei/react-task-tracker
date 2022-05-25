import { useState } from "react";
import "./addTask.css";

const AddTask = ({ onSubmit, showAddTaskForm }) => {
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const [error, setError] = useState([false, ""]);

  // handle add task
  const handleAddTask = (e) => {
    e.preventDefault();
    setError([false, ""]);
    if (title.trim() === "") {
      setError([true, "Title is required"]);
      return;
    }

    if (day.trim() === "") {
      setError([true, "Day and Time is required"]);
      return;
    }

    // submit new task
    const submittedTask = {
      text: title,
      day,
      reminder,
    };
    onSubmit(submittedTask);

    // reset form input values
    setTitle("");
    setDay("");
    setReminder(false);
  };

  return (
    showAddTaskForm && (
      <form className="add-form" onSubmit={handleAddTask}>
        <h3 style={{ marginBottom: "10px" }}>Add Task Form</h3>
        <div className="form-control">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="Enter task title"
            autoComplete="off"
            value={title || ""}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Day & Time</label>
          <input
            name="day"
            type="text"
            placeholder="Enter day and time"
            autoComplete="off"
            value={day || ""}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            type="checkbox"
            name="reminder"
            checked={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
          <label style={{ marginLeft: "6px" }}>Set Reminder</label>
        </div>
        <input type="submit" value="Save Task" className="btn btn-info" />
        {error[0] && <div className="error-msg">{error[1]}</div>}
      </form>
    )
  );
};

export default AddTask;
