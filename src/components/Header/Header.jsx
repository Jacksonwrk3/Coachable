import React from "react";
import classes from "./Header.module.css";
import Logo from "../Logo/Logo";
import Button from "../UI/Button/Button";
const Header = (props) => {
  return (
    <header className={classes.header}>
      <Logo />
      <div className={classes.buttonContainer}>
        <Button primary={false}>Register</Button>
        <Button primary={true} className={classes.buttonSpacing}>
          Sign in
        </Button>
      </div>
    </header>
  );
};
export default Header;
