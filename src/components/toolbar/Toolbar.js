import React from 'react'
import Tools from './Tools'
import classes from './Toolbar.module.css'
import NewTwitTool from './NewTwitTool'
import ProfileTool from './ProfileTool'
import TwitterLogo from '../../assets/images/TwitterLogo'
const Toolbar = () => {
  return (
    
    <div className={classes.toolbar}>

      <div className={classes.container}>

      <TwitterLogo className={classes['blue-logo']}/>
      </div>
      <Tools/>
      <NewTwitTool/>
      <ProfileTool/>
    </div>
  )
}

export default Toolbar