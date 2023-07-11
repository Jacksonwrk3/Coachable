import React from "react";
import Logo from "../Logo/Logo";
import LoginButton from "../LoginButton/LoginButton";
import RegisterButton from "../RegisterButton/RegisterButton";
import classes from "./HomePageHeader.module.css";
const HomePageHeader = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <div className={classes.btnContainer}>
        <RegisterButton className={classes.registerBtn} />
        <LoginButton />
      </div>
    </header>
  );
};

export default HomePageHeader;
