import React from "react";
import classes from "./Icon.module.css";
const Icons = (props) => {
  return (
    <div className={classes.iconBorder}>
      <i>
        <img className={classes.icon} src={props.src} alt={props.alt} />
      </i>
    </div>
  );
};

export default Icons;
