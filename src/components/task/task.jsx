import Button from "../button/button";
import "./task.css";

const Task = ({ task, onDelete, onToggle }) => {
  const hasReminder = task.reminder ? "hasReminder" : "";
  return (
    <div
      className={`task ${hasReminder}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div>
        <h4>{task.text}</h4>
        <p>{task.day}</p>
      </div>
      <div>
        <Button
          btnClass="danger"
          text="Delete"
          handleClick={() => onDelete(task.id)}
        />
      </div>
    </div>
  );
};

export default Task;
