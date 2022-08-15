import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { useHistory } from "react-router-dom";
const Modal = (props) => {
    const history = useHistory()
  const Backdrop = (props) => {
    const backdropClickHandler = (e)=>{
        history.replace('/')

    }
    return <div onClick={backdropClickHandler} className={classes.backdrop}></div>;
  };
  const Content= (props)=>{
    return <div className={classes.content}>{props.children}</div>
  }

  return <div>
    {ReactDOM.createPortal(<Backdrop/>,document.getElementById('modal'))}
    {ReactDOM.createPortal(<Content children={props.children}/>,document.getElementById('modal'))}

  </div>;
};

export default Modal;
