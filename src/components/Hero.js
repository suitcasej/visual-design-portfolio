import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style2.css";
import "../components/hero.css";
import "bootstrap/dist/css/bootstrap.min.css";
import arrow from "../Assets/img/Arrow1.svg";
import money from "../Assets/img/money1.png";

function Hero() {
  return (
    // <div className="hero" id="hero">
    //   <div className="launch">
    //     <div className="launch_container">
    //       <div className="launch_textbox">
    //         <div className="launch_subhead">
    //           Visual designer,
    //           <br />
    //           full-stack developer and art director
    //           <div className="dotHome" id="d1"></div>
    //         </div>

    //         <div className="launch_text">
    //           I intuitively and intentionally curate relationships
    //           <br />
    //           that radically improve our lives.
    //         </div>
    //         <div className="recentWork">
    //           <img className="arrow" src={arrow} />
    //           <div className="launch_text">Recent Work</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div id="hero">
      <div className="hero2">
        <div className="hero_launch">
          <div className="launch_subhead">
            Visual designer,
            <br />
            full-stack developer and art director
            <div className="dotHome" id="d1"></div>
          </div>

          <div className="launch_text">
            I intuitively and intentionally curate relationships
            <br />
            that radically improve our lives.
          </div>
          <div className="recentWork">
            <img className="arrow" src={arrow} />
            <div className="launch_text">Recent Work</div>
          </div>
        </div>
      </div>
      <div className="mobileHero"></div>
    </div>
  );
}

export default Hero;
