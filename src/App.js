import "./App.css";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import DCW from "./components/DCW";
import Yoroi from "./components/Yoroi";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style2.css";
import "./components/Navbar.css";
import ScrollToTop from "../src/components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import Zion from "./components/ZE";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <AnimatePresence>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/dcw" component={DCW} />
            <Route path="/yoroi" component={Yoroi} />
            <Route path="/zion" component={Zion} />
          </Switch>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
