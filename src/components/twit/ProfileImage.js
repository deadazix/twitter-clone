import classes from './ProfileImage.module.css'
import React from 'react'
import defaultImage from '../../assets/images/userImages/default.png'

const ProfileImage = () => {
  return (
    <div className={classes['profile-image']}>
      <img src={defaultImage} alt={'profile'}/>
    </div>
  )
}

export default ProfileImage