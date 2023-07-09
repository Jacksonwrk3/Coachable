import React from "react";
import Logo from "../../components/Logo/Logo";
import MediaIcons from "../../components/MediaIcons/MediaIcons";
import LightText from "../../components/UI/LightText/LightText";
import BoldText from "../../components/UI/BoldText/BoldText";
import classes from "./Footer.module.css";
const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        <div className={classes.footerSections}>
          <Logo />
          <MediaIcons />
        </div>
        <div className={classes.footerSections}>
          <BoldText></BoldText>
          <LightText>company</LightText>
          <BoldText>FAQs</BoldText>
        </div>
        <div className={classes.footerSections}>
          <LightText>opportunties</LightText>
          <BoldText>Careers</BoldText>
        </div>
        <div className={classes.footerSections}>
          <LightText>legal</LightText>
          <BoldText>Privacy Policy</BoldText>
          <BoldText>Terms of Use</BoldText>
        </div>
        <div className={classes.footerSections}>
          <LightText>Coachable App</LightText>
          <a className={classes.badgeLink}>
            <img
              src="apple-store-badge.svg"
              alt="Get it in Apple Store"
              className={`${classes.appStoreBadge} ${classes.appleStoreBadge}`}
            />
          </a>
          <a className={classes.badgeLink}>
            <img
              src="google-play-badge.png"
              alt="Get it on Google Play"
              className={`${classes.appStoreBadge} ${classes.googleStoreBadge}`}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
