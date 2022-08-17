import classes from "./ProfileTool.module.css";
import React, { useContext, useState } from "react";
import HomeContext from "../../constants/home-context/HomeContext";
import profileImage from "../../assets/images/userImages/admin.png";
const ProfileTool = () => {
  const homeCTX = useContext(HomeContext);

  const [isPupedUp, setIsPupedup] = useState(false);
  const profileImageClickHandler =()=>{
    setIsPupedup(true)
  }
  const backdropClickHandler = ()=>{
    setIsPupedup(false)
  }
  return (
    <div>
      {/* this is modal related */}
      {isPupedUp && <div  onClick={backdropClickHandler} className={classes["popup-backdrop"]}></div>}
      <div className={classes["profile-tool"]}>
        {isPupedUp && (
          <div className={classes.popup}>
            <div className={classes["user-detail"]}>
              <img src={profileImage} alt="user profile" />
              <span className={classes["popup-name"]}>
                {homeCTX.currentUser.name}
              </span>
            </div>
            username abd wjnd w nwo nbw ow bnow bnw obnw wdnhiowaio
          </div>
        )}
        {/* this is in toolbar */}
        <img onClick={profileImageClickHandler} src={profileImage} alt="user profile" />
      </div>
    </div>
  );
};

export default ProfileTool;
