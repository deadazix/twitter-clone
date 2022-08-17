import classes from './Twit.module.css'
import ProfileData from './ProfileData.js'
import ProfileImage from './ProfileImage'
import Options from './Options.js'
import Content from './Content.js'
import Translate from './Translate.js'
import Actions from './Actions.js'
import React from 'react'

const Twit = (props) => {
  const {twit} = props
  return (
    <div className={classes.twit}>
        <ProfileImage twit={twit}/>
        <ProfileData twit={twit}/>
        <Options twit={twit}/>
        <Content twit={twit}/>
        <Translate twit={twit}/>
        <Actions twit={twit}/>
    </div>
  )
}

export default Twit