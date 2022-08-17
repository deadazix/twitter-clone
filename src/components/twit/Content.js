import classes from './Content.module.css'
import React from 'react'

const Content = (props) => {
  
  return (
    <div className={classes.content}>{props.twit.content}</div>
  )
}

export default Content