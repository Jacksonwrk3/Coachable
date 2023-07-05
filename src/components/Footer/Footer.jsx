import React from "react";
import Logo from "../../components/Logo/Logo";
import classes from "./Footer.module.css";
const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <Logo />
    </footer>
  );
};

export default Footer;
