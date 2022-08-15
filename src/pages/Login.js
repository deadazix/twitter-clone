import React from "react";
import classes from "./Login.module.css";
import ImageSide from "../components/login/ImageSide";
import LoginSide from "../components/login/LoginSide";
const Login = () => {
  return (
    <div className={classes.login}>
      <LoginSide/>
      <ImageSide/>
    </div>
  );
};

export default Login;
