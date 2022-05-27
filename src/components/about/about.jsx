import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Link to="/">Go Back</Link>
      <p>Copyright &copy;{new Date().getFullYear()}</p>
    </>
  );
};

export default About;
