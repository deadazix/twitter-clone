import React from "react";
import classes from "./Login.module.css";
import ImageSide from "../components/login/ImageSide";
import LoginSide from "../components/login/LoginSide";
import Modal from "../components/UI/modals/Modal";
import Signup from "../validation/Signup/Signup";
import { useLocation } from "react-router-dom";
const Login = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  console.log("inside login");
  console.log(query.get("sign-up"));

  return (
    <React.Fragment>
      <div className={classes.login}>
        <LoginSide />
        <ImageSide />
      </div>
      {query.get("sign-up") === "true" && (
        <Modal>
          <Signup></Signup>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Login;
