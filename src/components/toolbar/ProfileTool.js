import classes from './ProfileTool.module.css'
import React from 'react'
import profileImage from '../../assets/images/userImages/default.png'
const ProfileTool = () => {
  return (
    <div className={classes['profile-tool']}>
        <img src={profileImage} alt='user profile'/>
    </div>
  )
}

export default ProfileTool