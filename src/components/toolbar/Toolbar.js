import React from 'react'
import Tools from './Tools'
import classes from './Toolbar.module.css'
import NewTwitTool from './NewTwitTool'
import ProfileTool from './ProfileTool'
const Toolbar = () => {
  return (
    
    <div className={classes.toolbar}>
      <Tools/>
      <NewTwitTool/>
      <ProfileTool/>
    </div>
  )
}

export default Toolbar