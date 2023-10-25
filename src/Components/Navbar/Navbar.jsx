import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.svg";
import { useState } from "react";
import cart_icon from "../Assets/cart.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul>
        <li onClick={() => setMenu("home")}>
          <Link className="dec" to="/">
            HOME
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link className="dec" to="/mens">
            MEN
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link className="dec" to="/womens">
            WOMEN
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="cart">
        <p>Login</p>
        <img src={cart_icon} alt="" />
        <span>0</span>
      </div>
    </div>
  );
};

export default Navbar;
