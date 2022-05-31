import { Link } from "react-router-dom";

const About = () => {
  const githubImgStyle = {
    verticalAlign: "middle",
    maxWidth: "30px",
    marginRight: "10px",
  };

  return (
    <>
      <Link to="/">Go Back</Link>
      <div style={{ margin: "12px 0" }}>
        <a href="https://github.com/masoudtabatabaei" target="_blank">
          <img style={githubImgStyle} src="/github.png" />
          My Github
        </a>
      </div>
      <p>Copyright &copy;{new Date().getFullYear()}</p>
    </>
  );
};

export default About;
