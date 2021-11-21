import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bkg1 from "../Assets/img/bkg1.png";
import cw from "../Assets/img/CW_thumb.png";
import dcw from "../Assets/img/DCW_thumbnail.png";
import ze from "../Assets/img/ZE_thumb.png";
import About from "../components/About";
import DCW from "../components/DCW";
import Yoroi from "./Yoroi";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Projects() {
  return (
    <div id="projects" className="project-Container">
      <div className="linear">
        <div className="header">Projects</div>
        <div className="subheader">
          Full-Stack Development, Interface Design & Visual Identity
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-item">
          <Link to="/dcw" style={{ textDecoration: "none", color: "black" }}>
            <hr
              id="thread1"
              style={{
                display: "block",
                width: "100%",
                color: "black",
                opacity: "100%",
                boxShadow: "4px 4px 4px rgb(0, 0, 0, 0.15)",
              }}
            ></hr>
            <div className="projTitle">
              IBM Database Conversion Workbench
              <div className="dot" id="d1"></div>
            </div>
            <div className="thumbnail">
              <img
                src={dcw}
                style={{ position: "relative", maxWidth: "100%" }}
              ></img>
            </div>
          </Link>
        </div>

        <div className="grid-item">
          <Link to="/yoroi" style={{ textDecoration: "none", color: "black" }}>
            <hr
              id="thread4"
              style={{
                width: "100%",
                color: "black",
                opacity: "100%",
                boxShadow: "4px 4px 4px rgb(0, 0, 0, 0.15)",
              }}
            ></hr>
            <div className="projTitle oneliner">
              Yoroi Wallet Case Study <div className="dot" id="d1"></div>
            </div>
            <div className="thumbnail">
              <img
                src={cw}
                style={{ position: "relative", maxWidth: "100%" }}
              ></img>
            </div>
          </Link>
        </div>

        <div className="grid-item ">
          <Link to="/zion" style={{ textDecoration: "none", color: "black" }}>
            <hr
              id="thread4"
              style={{
                width: "100%",
                color: "black",
                opacity: "100%",
                boxShadow: "4px 4px 4px rgb(0, 0, 0, 0.15)",
              }}
            ></hr>
            <div className="projTitle oneliner">
              Zion's Eden<div className="dot" id="d1"></div>
            </div>
            <div className="thumbnail">
              <img src={ze} style={{ maxWidth: "100%" }}></img>
            </div>
          </Link>
        </div>
      </div>
      {/* <About /> */}
      {/* <div className="dafoot" style={{ paddingTop: "520px" }}></div> */}
    </div>
  );
}

export default Projects;
