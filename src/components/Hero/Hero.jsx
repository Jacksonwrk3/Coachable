import React from "react";
import Text from "../UI/Text/Text";
import Button from "../UI/Button/Button";
import PrimaryColor from "../UI/PrimaryColor/PrimaryColor";
import classes from "./Hero.module.css";
const Hero = (props) => {
  return (
    <section className={classes.hero}>
      <div className={classes.heroLeft}>
        <h1>
          Get A Healthy Body <br />
          <PrimaryColor>
            With The Perfect <br />
            Exercises
          </PrimaryColor>
        </h1>
        <Text fontWeight="extraLight" fontSize="sm" textAlign="left">
          With our professional trainers, will we guide you with the best
          program to help you get healthy and ideal body
        </Text>
        <Button primary={true}>Join Now</Button>
      </div>
      <div className={classes.heroRight}>
        <img src="/redoutfitman.png" alt="Man with red jersey" />
      </div>
    </section>
  );
};

export default Hero;
