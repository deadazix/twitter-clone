import React, { useState,useContext, createContext } from "react";
import SignupContent from "../../../contexts/SignupContext";
import classes from "./Input.module.css";
const Input = (props) => {
    

  const { value, onChange, inValid, onTouch } = props.validation;
  const [isFocus, setIsfocus] = useState(false);

  const onChangeHandler = (e) => {
    props.onValueChange(e.target.value);
    onTouch();
    onChange(e);
  };
  const onFocusHandler = (e) => {
    setIsfocus(true);
  };
  const onBlurHandler = (e) => {
    onTouch();
    setIsfocus(false);
  };

  return (
    <div className={classes["input-container"]}>
      <div
        data={props["data-holder"]}
        className={`${isFocus && classes.focus} ${classes.wrapper} ${
          inValid && classes.invalid
        } ${value.length > 0 && classes.hasvalue}`}
      >
        <input
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          type="text"
          id={props.id}
          className={classes.input}
        />
      </div>
      {inValid && <p className={classes.paragraph}>{props.paragraph}</p>}
    </div>
  );
};

export default Input;
