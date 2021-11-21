import React, { Component, useState, useEffect } from "react";
import hero1 from "../Assets/DCW_assets/hero1.png";
import money2 from "../Assets/img/money2.png";
import illustration from "../Assets/DCW_assets/illustration.png";
import team from "../Assets/DCW_assets/team.png";
import before from "../Assets/DCW_assets/before.png";
import cw from "../Assets/img/CW_thumb.png";
import ze from "../Assets/img/ZE_thumb.png";
import after from "../Assets/DCW_assets/after.png";
import Navbar from "../components/Navbar.js";
import Footer from "./Footer";
import "../components/dcw.css";
import { motion as smoothEntry } from "framer-motion";

function DCW() {
  return (
    <smoothEntry.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="dcw_hContainer">
        <div className="title1">IBM Database Conversion Workbench</div>
        <div className="disc1">
          Product Design, Visual Design, Full-Stack Development
        </div>
        <div className="disc1" style={{ paddingTop: "25px" }}>
          2020-2021
        </div>
        <div className="comply1">
          *To comply with my non-disclosure agreement, I am not allowed to show
          the full range of the product capabilities I worked on. The thoughts
          on this page are my own and do not necessarily reflect the views of
          IBM.
        </div>
      </div>
      <img
        src={money2}
        style={{
          height: "auto",
          maxWidth: "100%",
        }}
      />
      <div className="wrapper">
        <div className="dcwContainer">
          <div className="left">
            <div className="sectionNumber">000</div>
            <hr className="divide"></hr>
            <div className="regText">Background</div>
          </div>
          <div className="regText2">
            The IBM Database Conversion Workbench Tool (DCW) provides an
            end-to-end solution through UI tooling to facilitate the conversion
            of Oracle & Teradata databases to Db2 on premise and cloud
            databases. DCW is a legacy service that was originally developed in
            2008.
          </div>
        </div>
      </div>
      <img
        src={illustration}
        style={{
          height: "auto",
          maxWidth: "100%",
        }}
      />
      <div className="wrapper">
        <div className="dcwContainer">
          <div className="left">
            <div className="sectionNumber">001</div>
            <hr className="divide"></hr>
            <div className="regText">Team</div>
          </div>
          <div className="regText2">
            Rahul Dalal, Sameer Jorapur, Ajay Aggrwal, Jonathan Osei, Gregory
            Harris, Kareith Dyce, Lorri-ann Wint, Loubyn Sineus, Rotimi Awani,
            Armando Banuelos, Jordan Hodges
          </div>
        </div>
      </div>
      <img
        src={team}
        style={{
          height: "auto",
          width: "1558px",
          maxWidth: "100%",
          margin: "auto",
          display: "flex",
        }}
      />
      <div className="wrapper">
        <div className="dcwContainer">
          <div className="left">
            <div className="sectionNumber">002</div>
            <hr className="divide"></hr>
            <div className="regText">Challenge</div>
          </div>
          <div className="regText2">
            The process of database migrations is crucially expensive and time
            consuming. Our goal was to develop a streamlined user experience
            that would improve migration time, offer enhanced features for
            project managers and devOps and give uniform to the product's look
            and feel.
          </div>
        </div>
      </div>
      <img
        src={before}
        style={{
          height: "auto",
          maxWidth: "100%",
        }}
      />
      <div className="wrapper">
        <div className="dcwContainer">
          <div className="left">
            <div className="sectionNumber">003</div>
            <hr className="divide"></hr>
            <div className="regText">My Role</div>
          </div>
          <div className="regText2">
            For the Database Conversion Workbench tool, my roles and
            responsibilities took many shapes and forms including product
            design, visual design, front-end/back-end development, video
            editing, and content writing.
          </div>
        </div>
      </div>
      <img
        src={after}
        style={{
          height: "auto",
          maxWidth: "100%",
        }}
      />
      <div className="wrapper2">
        <div className="dcwContainer">
          <div className="left">
            <div className="sectionNumber">004</div>
            <hr className="divide"></hr>
            <div className="regText">Learn More</div>
          </div>
          <div className="regText2">
            Send me an email to learn more about this project.
          </div>
        </div>
      </div>
      <button
        className="Email"
        onClick={() => (window.location = "mailto:hodgesjo96@gmail.com")}
      >
        Email Me
      </button>
      <Footer image1={cw} image2={ze} imgSrc1="/yoroi" imgSrc2="/zion" />
    </smoothEntry.div>
  );
}

export default DCW;
