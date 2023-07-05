import React from "react";
import classes from "./MediaIcons.module.css";
const MediaIcon = (props) => {
  return (
    <ul className={classes.iconList}>
      <li>
        <img src="facebook.png" className={classes.icons} alt="facebook icon" />
      </li>
      <li>
        <img
          src="instagram.png"
          className={classes.icons}
          alt="instagram icon"
        />
      </li>
      <li>
        <img src="twitter.png" className={classes.icons} alt="twitter icon" />
      </li>
      <li>
        <img src="tiktok.png" className={classes.icons} alt="tiktok icon" />
      </li>
    </ul>
  );
};

export default MediaIcon;
