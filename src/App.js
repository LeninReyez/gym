import React from "react";
import "./App.css";
import Nav from "./Nav/Nav";
import Home from "./components/Home";
import AboutContainer from "./container/about-ctr";
import ContactContainer from "./container/contact-ctr";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutContainer} />
          <Route path="/contact" component={ContactContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
