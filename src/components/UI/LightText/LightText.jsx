import React from "react";
import classes from "./LightText.module.css";
const LightText = (props) => {
  return <p className={classes.lightText}>{props.children}</p>;
};

export default LightText;
