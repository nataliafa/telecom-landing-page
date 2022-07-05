import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeProvider";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Plans from "./pages/Plans";
import Numbers from "./pages/Numbers";
import Organizations from "./pages/Organizations";
import Roaming from "./pages/Roaming";
import Profile from "./pages/Profile";
import "./App.scss";

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/plans">
            <Plans />
          </Route>
          <Route path="/numbers">
            <Numbers />
          </Route>
          <Route path="/organizations">
            <Organizations />
          </Route>
          <Route exact path="/roaming">
            <Roaming />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
