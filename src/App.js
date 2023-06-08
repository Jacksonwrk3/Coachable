import Header from "./components/Header/Header.jsx";
import PrimaryColor from "./components/UI/PrimaryColor/PrimaryColor.jsx";
import classes from "./App.module.css";
function App() {
  return (
    <div className={classes.app}>
      <Header />
      <section>
        <div>
          <h1>
            Get A Healthy Body <br />
            <PrimaryColor>
              With The Perfect <br />
              Exercises
            </PrimaryColor>
          </h1>
        </div>
        <div></div>
      </section>
    </div>
  );
}

export default App;
