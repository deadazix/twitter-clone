import React from 'react'
import classes from './TwitSection.module.css'
import Twit from '../twit/Twit'
const TwitSection = () => {
  return (
    <div className={classes['twit-section']}>
        <Twit/>
        <Twit/>
    </div>
  )
}

export default TwitSection