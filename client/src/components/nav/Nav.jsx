import { Link } from "react-router-dom";
import React from "react";
import "./Nav.css";


const Nav = (props) => (
  
  <div>
    <div className="Nav">
      <Link to={"/"} tag="a">
        Search
      </Link>
      <button onClick={props.modalOpenLogin} tag="a"> Login</button>
      <button onClick={props.modalOpenRegister} tag="a"> Register</button>
      <Link to = {"/faq"} tag="a">
        Faq
      </Link>
    </div>
  </div>
);

export default Nav;
