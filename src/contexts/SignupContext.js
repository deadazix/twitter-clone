import React from "react";
const SignupContent = React.createContext({
    name:'',
    email:'',
    updateEmail:(newEmail)=>{},
    updateName:(newName)=>{}
})
export default SignupContent