import classes from "./Options.module.css";
import React from "react";
import ToolIconProvider from "../../assets/images/toolsIcons/toolIconProvider";
const Options = () => {
  return (
    <div className={classes.options}>
      <ToolIconProvider name="options" className={classes.svg} />
    </div>
  );
};

export default Options;
