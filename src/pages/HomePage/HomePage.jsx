import React from "react";
import HomePageHeader from "../../components/HomePageHeader/HomePageHeader";
import PrimaryColor from "../../components/UI/PrimaryColor/PrimaryColor";
import Button from "../../components/UI/Button/Button";
import Badge from "../../components/UI/Badge/Badge";
import Footer from "../../components/Footer/Footer";
import classes from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={classes.homePage}>
      <div className={classes.homePageContent}>
        <HomePageHeader />
        <main>
          <section>
            <div className={classes.bannerImg}>
              <h1 className={classes.bannerHeaderAlignment}>
                Get A Healthy Body <br />
                <PrimaryColor>With The Perfect Exercises</PrimaryColor>
              </h1>
            </div>
            <div className={classes.bannerText}>
              <img
                src="redoutfitman.png"
                alt="Black man in red tank-top and beanie"
              />
              <p className={classes.lightText}>
                With our professional trainers, will we guide you with the best
                program to help you get healthy and ideal body
              </p>
              <Button isPrimary={true}>Join Now</Button>
            </div>
            <div></div>
          </section>
          <section>
            <h2 className={classes.bannerHeaderAlignment}>
              <PrimaryColor>Hire Our Coaches</PrimaryColor>
            </h2>
            <p className={classes.lightText}>
              With our professional trainers, will we guide you with the best
              program to help you get healthy and ideal body
            </p>
          </section>
          <section>
            <Badge>
              <i className={classes.badgeContainer}>
                <img
                  src="running.png"
                  alt="Running emoji"
                  className={classes.badgeEmoji}
                />
              </i>
              <h3>
                <PrimaryColor>Cardio & Strength</PrimaryColor>
              </h3>
              <p className={classes.lightText}>
                With our professional trainers, will we guide you with the best
                program to help you get healthy and ideal body
              </p>
              <PrimaryColor className={classes.learnMore}>
                Learn More
              </PrimaryColor>
            </Badge>
            <Badge>
              <i className={classes.badgeContainer}>
                <img
                  src="muscle.png"
                  alt="Flexing emoji"
                  className={classes.badgeEmoji}
                />
              </i>
              <h3>
                <PrimaryColor className={classes.learnMore}>
                  Muscle Building
                </PrimaryColor>
              </h3>
              <p className={classes.lightText}>
                With our professional trainers, will we guide you with the best
                program to help you get healthy and ideal body
              </p>
              <PrimaryColor className={classes.learnMore}>
                Learn More
              </PrimaryColor>
            </Badge>
            <Badge>
              <i className={classes.badgeContainer}>
                <img
                  src="slim.png"
                  alt="Weight loss emoji"
                  className={classes.badgeEmoji}
                />
              </i>
              <h3>
                <PrimaryColor>Custom Diets</PrimaryColor>
              </h3>
              <p className={classes.lightText}>
                With our professional trainers, will we guide you with the best
                program to help you get healthy and ideal body
              </p>
              <PrimaryColor>Learn More</PrimaryColor>
            </Badge>
          </section>
          <section className={classes.secondaryColor}>
            <div className={classes.imageContainer}>
              <img
                src="redhairgirl.png"
                alt="Red haired girl taking a selfie in red striped t-shirt"
                className={classes.bannerImages}
              />
            </div>
            <div>
              <h2 className={classes.bannerHeaderAlignment}>
                Coaches At The <br />
                <PrimaryColor>Tip Of Your Fingers</PrimaryColor>
              </h2>
              <p className={classes.lightText}>
                With our professional trainers, will we guide you with the best
                program to help you get healthy and ideal body
              </p>
            </div>
          </section>
          <section>
            <div>
              <h2>
                Monitor <br />
                <PrimaryColor>Your Progress</PrimaryColor>
              </h2>
              <p className={classes.lightText}>
                With our professional trainers, will we guide you with the best
                program to help you get healthy and ideal body
              </p>
            </div>
            <div className={classes.imageContainer}>
              <i>
                <img
                  src="linegraph.png"
                  alt="linegraph"
                  className={classes.bannerImages}
                />
              </i>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
