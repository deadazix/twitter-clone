import React from "react";
import LoginCallToActionSection from "../Layouts/LoginCallToActionSection";
import classes from "./LoginSide.module.css";
import TwitterLogo from "../../assets/images/TwitterLogo";

const LoginSide = () => {
  return (
    <div className={classes["loginside"]}>
      <div className={classes.container}>
        
        <div className={classes["loginside__container"]}>
            <TwitterLogo className={classes['blue-logo']}></TwitterLogo>
          <h1 className={classes["heading-primary"]}>Happening now</h1>
          <h1 className={classes["heading-secondary"]}>Join twitter today</h1>
          <LoginCallToActionSection></LoginCallToActionSection>
        </div>
      </div>
    </div>
  );
};

export default LoginSide;
