import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import PrimaryColor from "./components/UI/PrimaryColor/PrimaryColor.jsx";
import Text from "./components/UI/Text/Text.jsx";
import Benefits from "./components/Benefits/Benefits";
import classes from "./App.module.css";
function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Hero />
      <section className={classes.hireOurCoachesContainer}>
        <div className={classes.left}>
          <PrimaryColor>
            <h2>Hire Our Coaches</h2>
          </PrimaryColor>
        </div>
        <div className={classes.right}>
          <Text fontSize="xs" fontWeight="extraLight">
            With our professional trainers, will we guide you with the best
            program to help you get healthy and ideal body
          </Text>
        </div>
      </section>
      <Benefits />
    </div>
  );
}

export default App;
