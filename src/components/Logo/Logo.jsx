import React from "react";
import classes from "./Logo.module.css";
const Logo = () => {
  return (
    <div>
      <a href="/" className={classes.logoLink}>
        <span className={classes.logoCoach}>Coach</span>
        <span className={classes.logoAble}>able</span>
      </a>
    </div>
  );
};
export default Logo;
