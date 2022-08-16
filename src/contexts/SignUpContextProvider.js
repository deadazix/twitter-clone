import React, { useState } from "react";
import SignupContent from "./SignupContext";
const SignUpContextProvider = (props) => {
    const [prefered,setPrefered]=useState('number')
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number,setNumber]=useState('')
  const updateEmailHandler = (newEmail) => {

    setEmail(newEmail)
  };
  const updateNameHandler = (newName) => {
   setName(newName)
  };
  const updateNumberHandler=number=>{
    
    setNumber(number)
  }
  const changePreferedHandler= e=>{
    setPrefered(e)
  }
  const providerValue = {
    name: name,
    email: email,
    number,
    updateEmail: updateEmailHandler,
    updateName: updateNameHandler,
    updateNumber:updateNumberHandler,
    prefered,
    changePrefered:changePreferedHandler,
  };
  return (
    <SignupContent.Provider value={providerValue}>
      {props.children}
    </SignupContent.Provider>
  );
};

export default SignUpContextProvider;
