import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      className={`${
        props.primary ? classes.primaryButton : classes.secondaryButton
      } ${classes.generalButton} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
