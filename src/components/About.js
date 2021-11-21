import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style2.css";
import resume from "../Assets/Jordan_Hodges_CV.pdf";
import me from "../Assets/about/me.png";
import DateTime from "../components/time";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <div id="about" className="about-Container">
      <div className="aboutHeader">About</div>
      <div className="textContainer" style={{ marginTop: "100px" }}>
        <img src={me} className="selfPortrait" />
        <div
          className="name_social2"
          style={{ color: "black", height: "auto" }}
        >
          <div className="who">
            I am a multidisciplinary artist exploring technology at the
            intersection of ecology, innovation and human-centered design. I
            believe that technology is at it’s greatest strength when it
            advances in harmony with our environment.
            <br />
            <br />
            <div style={{ textAlign: "center" }}>~</div>
            <br />
            When Slack says I am active, I am a full-stack developer at IBM’s
            Cloud and Cognitive Software unit. I am also a Co-Founder of Black
            Matter, an imaginative space that centers Black and Indigenous
            futures.
            <br />
            <br />
            When Slack says I am away, I am either expressing my emotions
            through the language of music, illustrating my visions of liberation
            through photography and 3D art or I am making myself some herbal
            tea. ☕️
            <table style={{ marginTop: "44px", width: "100%" }}>
              <tr className="boldHeader">
                <th>Location</th>
                <th>Time</th>
                <th>Drinking</th>
              </tr>
              <tr className="liveInfo">
                <td>
                  Oakland, <br /> California
                </td>
                <td>
                  <DateTime />
                </td>
                <td>
                  Jasmine <br /> Green Tea
                </td>
              </tr>
            </table>
            {/* <div className="grid1">
            <div className="row1" style={{ marginTop: "44px" }}>
              <ul
                className="boldHeader"
                style={{
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0",
                }}
              >
                <li>Location</li>
                <li>Time</li>
                <li>Drinking</li>
              </ul>
              <ul
                className="liveInfo"
                style={{
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0",
                }}
              >
                <li>
                  Oakland,
                  <br />
                  California
                </li>
                <li>
                  <DateTime />
                </li>
                <li>
                  Jasmine
                  <br />
                  Green Tea
                </li>
              </ul>
            </div>
          </div> */}
          </div>
          {/* <img src={me} className="selfPortrait" />
        <div
          className="name_social2"
          style={{ color: "black", height: "auto" }}
        > */}
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
    </div>
  );
}

export default About;
