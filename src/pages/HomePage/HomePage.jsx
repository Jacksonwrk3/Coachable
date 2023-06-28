import React from "react";
import HomePageHeader from "../../components/HomePageHeader/HomePageHeader";
import classes from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={classes.homePage}>
      <div className={classes.homePageContent}>
        <HomePageHeader />
        <main></main>
      </div>
    </div>
  );
};

export default HomePage;
