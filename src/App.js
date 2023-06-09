import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import PrimaryColor from "./components/UI/PrimaryColor/PrimaryColor.jsx";
import Flex from "./components/UI/Flex/Flex.jsx";
import classes from "./App.module.css";
function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
