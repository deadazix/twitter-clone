import Tool from "./Tool";
import classes from './Tools.module.css'
import React from 'react'

const Tools = () => {
  return (
    <div className={classes.tools}>
        <Tool/>
        <Tool/>
        <Tool/>
        <Tool/>
        <Tool/>
        <Tool/>
        <Tool/>
        <Tool/>
    </div>
  )
}

export default Tools