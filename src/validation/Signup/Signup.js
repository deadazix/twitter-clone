import React,{useCallback,useState,useContext} from 'react'
import { useHistory } from 'react-router-dom'
import SignupStepOneForm from '../../auth/sign-up-form/SignupStepOneForm'
import classes from './Signup.module.css'
import SignupContent from '../../contexts/SignupContext'
const Signup = () => {
  const history = useHistory()
  const createAcountContext = useContext(SignupContent)
  const [formIsValid,setFormIsValid]= useState(false)
  const submitCreateAcountHandler = e=>{
    if(formIsValid){
      const data={
        name:createAcountContext.name,
        email:createAcountContext.email,
        number:createAcountContext.number,
      }
      
      console.log(data)
      console.log(createAcountContext.prefered)
      // here should check the validation of inputs in backend 
      history.push('/explore')
      
    }
   
  }
  const onValidHandler =useCallback(e=>{

    setFormIsValid(e)
  },[])

  return (
    <div className={classes.container}>
      <SignupStepOneForm onFormValid={onValidHandler}/>
      <div className={classes['submit-container']}>

      <button onClick={submitCreateAcountHandler} className={`${classes.submit} ${formIsValid&&classes.active}`} type='button'>Create account</button>
      </div>

    </div>
  )
}

export default Signup