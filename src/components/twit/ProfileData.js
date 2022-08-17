import classes from './ProfileData.module.css'
import React from 'react'

const ProfileData = (props) => {

  return (
    <div className={classes['profile-data']}>
      <span className={classes.name}>{props.twit.user.name}</span>
      <span className={classes.username}>@{props.twit.user.username}</span>
      <span className={classes.date}>{props.twit.date}</span>
    </div>
  )
}

export default ProfileData