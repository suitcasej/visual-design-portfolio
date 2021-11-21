import React, { Component, useState, useEffect } from "react";
import hero1 from "../Assets/DCW_assets/hero1.png";
import hero from "../Assets/ZE_assets/HERO.png";
import logoMain from "../Assets/ZE_assets/logoMain.png";
import baby from "../Assets/ZE_assets/baby.png";
import mock from "../Assets/ZE_assets/mock.png";
import endZ from "../Assets/ZE_assets/endZ.png";
import typeColor from "../Assets/ZE_assets/typeColor.png";
import cw from "../Assets/img/CW_thumb.png";
import dcw from "../Assets/img/DCW_thumbnail.png";
import ze from "../Assets/img/ZE_thumb.png";
import after from "../Assets/DCW_assets/after.png";
import Navbar from "../components/Navbar.js";
import Footer from "./Footer";
import "../components/dcw.css";
import { motion as smoothEntry } from "framer-motion";

function Zion() {
  return (
    <smoothEntry.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="dcw_hContainer">
        <div className="title1">Zion's Eden</div>
        <div className="disc1">Strategy, Design, Branding, Photography</div>
        <div className="disc1" style={{ paddingTop: "25px" }}>
          2020
        </div>
        <div className="comply1">
          Zion’s Eden provides the highest quality of plant-based baby and
          toddler foods without harsh additives and preservatives.
        </div>
      </div>
      <img
        src={hero}
        style={{
          height: "auto",
          maxWidth: "100%",
          width: "1200px",
          margin: "auto",
          display: "flex",
        }}
      />
      <div className="wrapper">
        <div className="dcwContainer">
          <div className="left">
            <div className="sectionNumber">000</div>
            <hr className="divide"></hr>
            <div className="regText">Purpose</div>
          </div>
          <div className="regText2">
            Zion’s Eden focuses on the critical nourishments babies need to
            develop properly, while also making mealtime interesting,
            fun-filled, and enjoyable.
          </div>
        </div>
      </div>
      <img
        src={mock}
        style={{
          height: "auto",
          maxWidth: "100%",
          width: "1200px",
          margin: "auto",
          display: "flex",
        }}
      />
      <div className="wrapper">
        <div className="dcwContainer">
          <div className="left">
            <div className="sectionNumber">001</div>
            <hr className="divide"></hr>
            <div className="regText">My Role</div>
          </div>
          <div className="regText2">
            As a creative director, I worked closely with the CEO of Zion’s Eden
            to develop a brand strategy that visually represents the company’s
            mission.
          </div>
        </div>
      </div>
      <img
        src={logoMain}
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
            <div className="regText">Typography & Color Theory</div>
          </div>
        </div>
      </div>
      <img
        src={typeColor}
        style={{
          height: "auto",
          maxWidth: "100%",
          width: "1558px",
          margin: "auto",
          display: "flex",
        }}
      />
      <div className="wrapper">
        <div className="dcwContainer">
          <div className="left">
            <div className="sectionNumber">003</div>
            <hr className="divide"></hr>
            <div className="regText">Branding</div>
          </div>
        </div>
      </div>
      <img
        src={baby}
        style={{
          width: "700px",
          height: "auto",
          maxWidth: "100%",
          display: "flex",
          margin: "auto",
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
      <Footer image1={cw} image2={dcw} imgSrc1="/yoroi" imgSrc2="/dcw" />
    </smoothEntry.div>
  );
}

export default Zion;
