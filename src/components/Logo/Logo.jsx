import React from "react";
import classes from "./Logo.module.css";
const Logo = (props) => {
  return (
    <div>
      <span className={`${classes.logo} ${classes.primaryColor}`}>Coach</span>
      <span className={`${classes.logo}`}>able</span>
    </div>
  );
};

export default Logo;
