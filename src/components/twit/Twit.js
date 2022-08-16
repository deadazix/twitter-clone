import classes from './Twit.module.css'
import ProfileData from './ProfileData.js'
import ProfileImage from './ProfileImage'
import Options from './Options.js'
import Content from './Content.js'
import Translate from './Translate.js'
import Actions from './Actions.js'
import React from 'react'

const Twit = () => {
  return (
    <div className={classes.twit}>
        <ProfileImage/>
        <ProfileData/>
        <Options/>
        <Content/>
        <Translate/>
        <Actions/>
    </div>
  )
}

export default Twit