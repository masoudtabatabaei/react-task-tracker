import Task from "../task/task";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} onDelete={onDelete} />;
      })}
    </>
  );
};

export default Tasks;
