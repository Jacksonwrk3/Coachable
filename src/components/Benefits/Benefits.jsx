import React from "react";
import Card from "../../components/UI/Card/Card";
import PrimaryColor from "../../components/UI/PrimaryColor/PrimaryColor";
import Icon from "../../components/UI/Icon/Icon";
import classes from "./Benefits.module.css";
import Text from "../../components/UI/Text/Text";

//rewrite these descriptions
const Benefits = (props) => {
  return (
    <section className={classes.benefits}>
      <Card className={classes.centerContent}>
        <Icon src="./runningicon.png" alt="running icon" />
        <h3>Cardio & Strength</h3>
        <Text fontSize="xs" fontWeight="extraLight" textAlign="center">
          With our professional trainers, will we guide you with the best
          program to help you get healthy and ideal body
        </Text>
        <PrimaryColor>
          <a href="/">
            <Text fontSize="xs">Learn More</Text>
          </a>
        </PrimaryColor>
      </Card>
      <Card className={classes.centerContent}>
        <Icon src="./flexicon.png" alt="bicep icon" />
        <h3>Muscle Building</h3>
        <Text fontSize="xs" fontWeight="extraLight" textAlign="center">
          With our professional trainers, will we guide you with the best
          program to help you get healthy and ideal body
        </Text>
        <PrimaryColor>
          <a href="/">
            <Text fontSize="xs">Learn More</Text>
          </a>{" "}
        </PrimaryColor>
      </Card>
      <Card className={classes.centerContent}>
        <Icon src="./weightlossicon.png" alt="running icon" />
        <h3>Custom Diet</h3>
        <Text fontSize="xs" fontWeight="extraLight" textAlign="center">
          With our professional trainers, will we guide you with the best
          program to help you get healthy and ideal body
        </Text>
        <PrimaryColor>
          <a href="/">
            <Text fontSize="xs">Learn More</Text>
          </a>
        </PrimaryColor>
      </Card>
    </section>
  );
};

export default Benefits;
