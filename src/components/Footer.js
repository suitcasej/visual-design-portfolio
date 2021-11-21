import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/foot.css";
import "../style2.css";
import resume from "../Assets/Jordan_Hodges_CV.pdf";

function moreFooter({ image1, image2, imgSrc1, imgSrc2 }) {
  return (
    <div className="footContainer" style={{ backgroundColor: "black" }}>
      <div className="moProjects">More Projects</div>
      <div className="imageContainer" style={{ overflow: "hidden" }}>
        <div className="containerItem">
          <Link to={imgSrc1} style={{ textDecoration: "none", color: "black" }}>
            <img
              src={image1}
              style={{
                position: "relative",
                width: "537px",
                maxWidth: "100%",
                overflow: "hidden",
              }}
            ></img>
          </Link>
        </div>
        <div className="containerItem">
          <Link to={imgSrc2} style={{ textDecoration: "none", color: "black" }}>
            <img
              src={image2}
              style={{
                position: "relative",
                width: "537px",
                maxWidth: "100%",

                overflow: "hidden",
              }}
            ></img>
          </Link>
        </div>
      </div>
      <div className="name_social2" style={{ color: "black", height: "auto" }}>
        <div className="name_social_list">
          <li>
            <a target="_blank" href="www.linkedin.com/in/jordan-m-hodges">
              LinkedIN
            </a>
          </li>
          <li>
            <a target="_blank" href={resume}>
              CV
            </a>
          </li>
          <li>
            <a target="_blank" href="https://dribbble.com/jhodges2">
              Dribble
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.are.na/jordan-hodges">
              Are.na
            </a>
          </li>
          <li>
            <a target="_blank" href="https://t.me/jordan_jali">
              Telegram
            </a>
          </li>
          {/* <li>
              <a target="_blank" href="about.asp">
                WhatsApp
              </a>
            </li> */}
        </div>
      </div>
    </div>
  );
}

export default moreFooter;
