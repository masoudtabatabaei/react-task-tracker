import Button from "../button/button";
import "./header.css";

const Header = ({ onShowForm, showAddTaskBtn }) => {
  return (
    <div className="header-container">
      <h3>Task Tracker</h3>
      <Button
        text={showAddTaskBtn ? "Add task" : "Close"}
        btnClass={showAddTaskBtn ? "primary" : "danger"}
        handleClick={onShowForm}
      />
    </div>
  );
};

export default Header;
