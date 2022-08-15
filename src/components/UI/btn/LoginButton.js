import React from "react";
import { Link } from "react-router-dom";
import classes from "./LoginButton.module.css";
const LoginButton = (props) => {

  return (
    <Link to={'/'+ props.query} className={`${classes["login-button"]} ${props.className}`}>
      {props.children}
    </Link>
  );
};

export default LoginButton;
