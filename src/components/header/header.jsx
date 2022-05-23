import Button from "../button/button";
import "./header.css";

const Header = () => {
  //handle click
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div className="header-container">
      <h3>Task Tracker</h3>
      <Button text="Add Task" handleClick={handleClick} />
    </div>
  );
};

export default Header;
