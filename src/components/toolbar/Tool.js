import React from "react";
import { Link } from "react-router-dom";
import ToolIconProvider from "../../assets/images/toolsIcons/toolIconProvider";
import classes from './Tool.module.css'
const Tool = (props) => {
  const onClickHandler = e=>{
    props.onClick(props.name)
  }
  return (
    <Link to={props.name} onClick={onClickHandler}>
      <ToolIconProvider className={`${props.focus===props.name &&classes.focus} ${classes.icon}`} name={props.name} />
    </Link>
  );
};

export default Tool;
