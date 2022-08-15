import React from "react";
import BackgroundLogoDesktop from "../../assets/images/desktop/login.png";
import BackgroundLogoMobo from "../../assets/images/mobile/login.png";
import TwitterLogo from "../../assets/images/TwitterLogo";
import classes from "./ImageSide.module.css";
const ImageSide = (props) => {
  return (
    <div className={classes["login__image-side"]}>
      <picture>
        <source media="(min-width: 900px)" srcSet={BackgroundLogoDesktop} />
        <img
          className={classes.login__image}
          src={BackgroundLogoMobo}
          alt="background for logo"
        />
      </picture>
      <TwitterLogo className={classes["twitter-logo"]} width={"100px"} />
    </div>
  );
};

export default ImageSide;
