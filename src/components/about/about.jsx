import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Link to="/">Go Back</Link>
      <div style={{ margin: "12px 0" }}>
        <a href="https://github.com/masoudtabatabaei" target="_blank">
          My Github
        </a>
      </div>
      <p>Copyright &copy;{new Date().getFullYear()}</p>
    </>
  );
};

export default About;
