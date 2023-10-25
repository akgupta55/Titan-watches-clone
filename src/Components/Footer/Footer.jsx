import "./Footer.css";
import logo from "../Assets/logo.svg";

const Footer = () => {
  return (
    <footer>
      <p>&copy;</p>
      <p>{new Date().getFullYear()}</p>
      <img src={logo} alt="" />
    </footer>
  );
};

export default Footer;
