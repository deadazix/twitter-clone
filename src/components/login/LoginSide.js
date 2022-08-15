import React from "react";
import classes from "./LoginSide.module.css";

const LoginSide = () => {
  return (
    <div className={classes["loginside"]}>
      <div className={classes.container}>
        <div className={classes["loginside__container"]}>
          <h1 className={classes["heading-primary"]}>Happening now</h1>
        </div>
      </div>
    </div>
  );
};

export default LoginSide;
