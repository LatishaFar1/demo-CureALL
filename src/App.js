import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./components/About";
import How from "./components/How";
import Testimonies from "./components/Testimonies";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>

          <Route exact path="/About">
            <About />
          </Route>

          <Route exact path="/How">
            <How />
          </Route>

          <Route exact path="/Testimonies">
            <Testimonies />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}
