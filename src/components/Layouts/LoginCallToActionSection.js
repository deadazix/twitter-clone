import React from "react";
import classes from "./LoginCallToActionSection.module.css";
import LoginButton from "../UI/btn/LoginButton";
const LoginCallToActionSection = () => {
    console.log('run again')
  return (
    <React.Fragment>
      <div className={classes["sign-up__container"]}>
        <LoginButton query='?google=true' className={classes.google}>Gogle</LoginButton>
        <LoginButton query='?apple=true' className={classes.apple}>Sign up with apple</LoginButton>
        <div className={classes.seprate}>or</div>
        <LoginButton query='?sign-up=true' className={classes["sign-up"]}>
          Sign up with phone or email
        </LoginButton>
      </div>
      <div className={classes["sign-in__container"]}>
        <h3 className={classes["sign-in__header"]}>
          Already have and account?
        </h3>
        <LoginButton query='?sign-in=true' className={classes["sign-in"]}>sing In</LoginButton>
      </div>
    </React.Fragment>
  );
};

export default LoginCallToActionSection;
