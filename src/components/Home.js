import React from "react";
import { useState, useEffect } from "react";
import { RellaxWrapper as EnvelopeO } from "react-rellax-wrapper";
import "../style2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./Hero";
import About from "../components/About";
import Projects from "./Projects";
import { motion as smoothEntry } from "framer-motion";

function Home() {
  // Set loading state to true initially
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    const loadData = async () => {
      // Wait for two second
      await new Promise((r) => setTimeout(r, 1000));
      console.log("ayo");
      // document.addEventListener("DOMContentLoaded", () => {
      //   console.log("ayo its loaded");
      // });

      // Toggle loading state
      setLoading((loading) => !loading);
    };

    loadData();
  }, []);
  // If page is in loading state, display
  // loading message. Modify it as per your
  // requirement.
  if (loading) {
    return (
      <div className="loadPage">
        <div className="loadContainer">
          <div className="loadContent"></div>
          <hr id={loading ? "lineLoader" : "lineLoader-none"}></hr>
        </div>
      </div>
    );
  }

  // If page is not in loading state, display page.
  else {
    return (
      <smoothEntry.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.3 }}
      >
        {/* Parallax effect to the hero page: Opening fast */}
        <EnvelopeO speed={9} percentage={0.5}>
          <Hero />
        </EnvelopeO>

        {/* Parallaz effect to the project page: Opening slow */}
        <EnvelopeO
          speed={-3}
          percentage={0.9}
          zIndex={-100}
          style={{ position: "absolute", zIndex: "-100" }}
          wrapper={"#projects"}
        >
          <div>
            <Projects />
          </div>
          <div>
            <About />
          </div>
        </EnvelopeO>

        {/* <RellaxWrapper speed={11} percentage={2}>
        <About />
      </RellaxWrapper> */}
      </smoothEntry.div>
    );
  }
}

export default Home;
