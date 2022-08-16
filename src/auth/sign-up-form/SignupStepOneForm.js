import classes from "./SignupStepOneForm.module.css";
import React, { useState, useEffect, useContext } from "react";
import Input from "../../components/UI/inputs/Input";
import useValidate from "../../hooks/validate/useValidate";
import SignupContent from "../../contexts/SignupContext";

const SignupStepOneForm = (props) => {

  const signupContext = useContext(SignupContent);
  const { onFormValid } = props;
  const [signupEmailOrNumber, setSignupEmailOrNumber] = useState("Number");
  const validateEmailCallback = (email) => email.length > 0;
  const validateNumberCallback = (number) => number.length > 0;
  const validateName = useValidate((name) => name.length > 0);

  const validateEmail = useValidate(
    signupEmailOrNumber === "Number"
      ? validateNumberCallback
      : validateEmailCallback
  );
  const { isInputValid: nameIsValid } = validateName;
  const { isInputValid: emailIsValid } = validateEmail;
  const emailChangeHandler = (email) => {
    
    signupContext.updateEmail(email)
  };
  const nameChangeHandler = (name) => {
    signupContext.updateName(name)
   
  };
  const numberChangeHandler = (number) => {
   
    signupContext.updateNumber(number)
  };
  const insteadHandler = (e) => {
    
    setSignupEmailOrNumber((prw) => {
      if (prw === "Number") {
        signupContext.changePrefered('email')
       signupContext.updateEmail(signupContext.number)
        return "Email";
      } else {
        signupContext.changePrefered('number')
        signupContext.updateNumber(signupContext.email)
        return "Number";
      }
    });
  };
  useEffect(() => {
    if (nameIsValid && emailIsValid) {
      onFormValid(true);
    } else {
      onFormValid(false);
    }
  }, [nameIsValid, emailIsValid, onFormValid]);

  return (
    <div>
      <span className={classes.heading}>Create your account</span>
      <Input
        onValueChange={nameChangeHandler}
        validation={validateName}
        id="sign-up-name-1"
        data-holder="Name"
        paragraph="pls enter your name"
        error={false}
      />
      <Input
        onValueChange={
          signupEmailOrNumber === "Number"
            ? numberChangeHandler
            : emailChangeHandler
        }
        validation={validateEmail}
        data-holder={signupEmailOrNumber}
        paragraph={`pls enter valid ${signupEmailOrNumber}`}
        error={false}
        id="sing-up-number-1"
      />
      <p onClick={insteadHandler} className={classes.instead}>{`use ${
        signupEmailOrNumber !== "Number" ? "Number" : "Email"
      } instead`}</p>
    </div>
  );
};

export default SignupStepOneForm;
