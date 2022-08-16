import React,{useState} from 'react'

const useValidate = (validate) => {
    const [value,setvalue]= useState('')
    const [isTouched,setIsTouched]=useState(false)
    const isInputValid = validate(value)
    const inValid = !isInputValid && isTouched
    const onChange=e=>{
        setvalue(e.target.value)
    }
    const onTouch= e=>{
        setIsTouched(true)

    }
    return {value,inValid,onChange,onTouch,isInputValid}

 
}

export default useValidate