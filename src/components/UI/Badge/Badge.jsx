import React from "react";
import classes from "./Badge.module.css";
const Badge = (props) => {
  return (
    <div className={`${props.className} ${classes.badge}`}>
      {props.children}
    </div>
  );
};

export default Badge;
