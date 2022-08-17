import React from 'react'
import classes from './NewTwitTool.module.css'
import ToolIconProvider from '../../assets/images/toolsIcons/toolIconProvider'
const NewTwitTool = () => {
  return (
    <div className={classes['new-twit']}>
   
      <ToolIconProvider className={classes.send} name='send'/>
    </div>
  )
}

export default NewTwitTool