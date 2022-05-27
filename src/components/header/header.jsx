import Button from "../button/button";
import { useLocation } from "react-router-dom";
import "./header.css";

const Header = ({ onShowForm, showAddTaskBtn }) => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="header-container">
      <h3>Task Tracker</h3>
      {location.pathname === "/" ? (
        <Button
          text={showAddTaskBtn ? "Add task" : "Close"}
          btnClass={showAddTaskBtn ? "primary" : "danger"}
          handleClick={onShowForm}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
