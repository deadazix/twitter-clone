import Tool from "./Tool";
import classes from './Tools.module.css'
import React,{useState} from 'react'

const Tools = () => {
    const [focus,setFocus] = useState('home')
    const toolOnClickHandler = name=>{
        setFocus(name)
    }
    
  return (
    <div className={classes.tools}>
        <Tool onClick={toolOnClickHandler}  focus={focus} name='home'/>
        <Tool onClick={toolOnClickHandler} focus={focus} name='explore'/>
        <Tool onClick={toolOnClickHandler} focus={focus} name='notification'/>
        <Tool onClick={toolOnClickHandler} focus={focus} name='messages'/>
        <Tool onClick={toolOnClickHandler} focus={focus} name='bookmarks'/>
        <Tool onClick={toolOnClickHandler} focus={focus} name='lists'/> 
        <Tool onClick={toolOnClickHandler} focus={focus} name='profile'/>
        <Tool onClick={toolOnClickHandler} focus={focus} name='more'/>
    </div>
  )
}

export default Tools