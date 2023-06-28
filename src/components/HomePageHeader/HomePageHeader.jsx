import React from "react";
import Logo from "../Logo/Logo";
import Button from "../UI/Button/Button";
import classes from "./HomePageHeader.module.css";
const HomePageHeader = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <div className={classes.btnContainer}>
        <Button className={classes.registerBtn} isPrimary={false}>
          Register
        </Button>
        <Button className={classes.signinBtn} isPrimary={true}>
          Sign in
        </Button>
      </div>
    </header>
  );
};

export default HomePageHeader;
