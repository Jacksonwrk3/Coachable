import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${
        props.isPrimary ? classes.primaryBtn : classes.secondaryBtn
      } ${classes.btn}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
