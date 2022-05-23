const Button = ({ btnClass, text, handleClick }) => {
  return (
    <button className={"btn btn-" + btnClass} onClick={handleClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  btnClass: "primary",
};

export default Button;
