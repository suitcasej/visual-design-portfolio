import React, { Component, useState, useEffect } from "react";
import hero from "../Assets/Yoroi_assets/hero.png";
import BeforeAfter from "../Assets/Yoroi_assets/BeforeAfter.png";
import persona from "../Assets/Yoroi_assets/persona.png";
import first from "../Assets/Yoroi_assets/first.png";
import hills from "../Assets/Yoroi_assets/hills.png";
import lofi from "../Assets/Yoroi_assets/lofi.png";
import ujm from "../Assets/Yoroi_assets/ujm.png";
import phase1 from "../Assets/Yoroi_assets/phase1.png";
import challenge from "../Assets/Yoroi_assets/challenge.png";
import typeface from "../Assets/Yoroi_assets/typeface.png";
import colorTheory from "../Assets/Yoroi_assets/colorTheory.png";
import Pools from "../Assets/Yoroi_assets/Pools.png";
import firstPool from "../Assets/Yoroi_assets/firstPool.png";
import sus from "../Assets/Yoroi_assets/Sus.png";
import receive from "../Assets/Yoroi_assets/receive.png";
import dcw from "../Assets/img/DCW_thumbnail.png";
import ze from "../Assets/img/ZE_thumb.png";
import Navbar from "../components/Navbar.js";
import Footer from "./Footer";
import "../components/dcw.css";
import { motion as smoothEntry } from "framer-motion";

function Yoroi() {
  return (
    <smoothEntry.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Navbar />
      <div className="dcw_hContainer">
        <div className="title1">Yoroi Wallet Redesign for Cardano</div>
        <div className="disc1">UX Design, UX Research, UI Design</div>
        <div className="disc1" style={{ paddingTop: "25px" }}>
          2021
        </div>
        <div className="comply1">
          Cardano is a third generation blockchain network powered by its own
          cryptocurrency called ADA.
        </div>
      </div>
      <img
        src={hero}
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
            Cardano is a third-generation blockchain networked powered by its
            own cryptocurrency called ADA. In 2021, Cardano is the largest Proof
            of Stake (PoS) blockchain network and amongst the top 5 blockchain
            networks behind Bitcoin and Ethereum. In the Cardano blockchain
            ecosystem, staking is a sustainable way to create passive income,
            raise money for charities and build communal equity.
          </div>
        </div>
      </div>
      <img
        src={first}
        style={{
          height: "auto",
          maxWidth: "100%",
          width: "1320px",
          margin: "auto",
          display: "flex",
        }}
      />
      <div className="wrapper">
        <div className="dcwContainer" style={{ alignItems: "unset" }}>
          <div className="left">
            <div className="sectionNumber">001</div>
            <hr className="divide"></hr>
            <div className="regText">Challenge</div>
          </div>
          <div className="regText2">
            While also being a user of the Yoroi dapp (decentralized
            application), I discovered that the Cardano Reddit community is the
            go-to source for Yoroi app-related questions. Every day there are
            questions related to staking. The community is drenched with
            questions like "How can I stake ADA?", "How do I use Yoroi Wallet?"
            or "Where are my rewards?"
            <br />
            <br />
            This community is resourceful in providing information on getting
            started with the Yoroi dapp. It also allowed me to discover the
            common pain points other people are experiencing while staking ADA
            on Yoroi. I uncovered that people new to staking are unsure about
            its processes, termonologies, and rules. Consequently, users are
            reliant on external sources of information such as Reddit to learn
            how to stake.
            <br />
            <br />I challenged myself to answer the following questions. How can
            dapps help delegators new to staking get the transparency,
            confidence, and knowledge needed to understand PoS technology
            without immediately relying on Reddit threads? How can I redesign
            the features in Yoroi to help ease the steep learning curve of
            staking while also growing the Cardano ecosystem?
          </div>
        </div>
      </div>

      <img
        src={challenge}
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
            <div className="regText">Ideation</div>
          </div>
          <div className="regText2">
            I started the ideation phase of this project with a
            root-cause-analysis activity that led me to explore the problem in
            more depth. If staking is a challenge for new users entering the
            crypto world, I wanted to level down and find the seeded reason.
            After discovering the root issue, I wrote out a product vision
            statement that addresses the goal of this project. I wrote out who
            this redesign is aimed towards and I then revised the problem
            statement that now aligns with my research thus far.
          </div>
        </div>
      </div>
      <img
        src={phase1}
        style={{
          height: "auto",
          width: "701px",
          maxWidth: "100%",
          margin: "auto",
          display: "flex",
        }}
      />
      <div className="wrapper">
        <div className="dcwContainer">
          <div className="left">
            <div className="sectionNumber">003</div>
            <hr className="divide"></hr>
            <div className="regText">Personas</div>
          </div>
          <div className="regText2">
            The focus group was defined while discovering the challenge so I
            created two personas that encapsulates who I am solving for.
          </div>
        </div>
      </div>
      <img
        src={persona}
        style={{
          height: "auto",
          width: "782px",
          maxWidth: "100%",
          margin: "auto",
          display: "flex",
        }}
      />
      <div className="wrapper">
        <div className="dcwContainer">
          <div className="left">
            <div className="sectionNumber">004</div>
            <hr className="divide"></hr>
            <div className="regText">Reflection</div>
          </div>
          <div className="regText2">
            At this point in the study, I needed to reflect on the information I
            have gathered so far and organize it in a way that I can reference
            back to. I hashed out who the redesign is for, relisted the
            requirements, listed user goals have and logged key performance
            indicators (Measure of Success).
          </div>
        </div>
      </div>
      <img
        src={hills}
        style={{
          height: "auto",
          width: "873px",
          maxWidth: "100%",
          margin: "auto",
          display: "flex",
        }}
      />
      <div className="wrapper">
        <div className="dcwContainer">
          <div className="left">
            <div className="sectionNumber">005</div>
            <hr className="divide"></hr>
            <div className="regText">Prototype</div>
          </div>
          <div className="regText2">
            I created a user journey map based on the existing flow of the Yoroi
            dapp and how a new user would navigate it. I studied the routes and
            processes to see what areas I could innovate in and saw that the
            “Dashboard” page was overwhelmed with confusing information for a
            new user. I also realized that the “Delegate” screen doesn’t have a
            strong filtering system that allows users to discover various
            staking pools.
          </div>
        </div>
      </div>
      <img
        src={ujm}
        style={{
          height: "auto",
          maxWidth: "100%",
          margin: "auto",
          display: "flex",
        }}
      />
      <img
        src={lofi}
        style={{
          paddingTop: "97px",
          height: "auto",
          width: "1601px",
          maxWidth: "100%",
          margin: "auto",
          display: "flex",
        }}
      />
      <div className="wrapper">
        <div className="dcwContainer">
          <div className="left">
            <div className="sectionNumber">006</div>
            <hr className="divide"></hr>
            <div className="regText">Typography & Color Theory</div>
          </div>
          <div className="regText2">
            I decided to reuse Yoroi’s design system to encourage new ideas
            while being conscious of cost.
          </div>
        </div>
      </div>
      <img
        src={typeface}
        style={{
          height: "auto",
          maxWidth: "100%",
          width: "1558px",
          display: "flex",
          margin: "auto",
        }}
      />
      <img
        src={colorTheory}
        style={{
          paddingTop: "37px",
          height: "auto",
          maxWidth: "100%",
          width: "1558px",
          display: "flex",
          margin: "auto",
        }}
      />
      <div className="wrapper">
        <div className="dcwContainer">
          <div className="left">
            <div className="sectionNumber">007</div>
            <hr className="divide"></hr>
            <div className="regText">Redesign</div>
          </div>
        </div>
      </div>
      <img
        src={BeforeAfter}
        style={{
          height: "auto",
          maxWidth: "100%",
          width: "1142px",
          display: "flex",
          margin: "auto",
        }}
      />
      <img
        src={Pools}
        style={{
          height: "auto",
          maxWidth: "100%",
          width: "1142px",
          display: "flex",
          margin: "auto",
          paddingTop: "40px",
        }}
      />
      <img
        src={firstPool}
        style={{
          height: "auto",
          maxWidth: "100%",
          width: "1142px",
          display: "flex",
          margin: "auto",
          paddingTop: "40px",
        }}
      />
      <img
        src={receive}
        style={{
          height: "auto",
          maxWidth: "100%",
          width: "1142px",
          display: "flex",
          margin: "auto",
          paddingTop: "40px",
        }}
      />
      <div className="wrapper" style={{ paddingBottom: "100px" }}>
        <div className="dcwContainer">
          <div className="left">
            <div className="sectionNumber">008</div>
            <hr className="divide"></hr>
            <div className="regText">Evaluation</div>
          </div>
          <div className="regText2">
            To evaluate the key performance indicators, I conducted user tests
            with 3 respondents. I used the Zoom application to facilitate the
            tests where I recorded their experience choosing a staking pool to
            delegate to. Respondent 1 is a male, 31 years old and is experienced
            in trading Cardano. Respondent 2 is a female, 30 years old and is
            not familiar with Cardano. Respondent 3 is a female, 23 years old
            and is familiar with cyptocurrency but not specifically familiar
            with Cardano.
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: "701px",
          margin: "auto",
          display: "flex",
          padding: "20px",
        }}
      >
        I then had the respondents fill out the SUS scale shown below. A
        checkmark under 1 equals “strongly disagree”, 2 equals “disagree”, 3
        equals “neutral”, 4 equals “agree” and 5 equals “strongly agree”.
      </div>
      <img
        src={sus}
        style={{
          height: "auto",
          maxWidth: "100%",
          width: "882px",
          display: "flex",
          margin: "auto",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      />
      <div
        style={{
          maxWidth: "701px",
          margin: "auto",
          display: "flex",
          padding: "20px",
        }}
      >
        The mean (sus) score was a 67 highlighting that the usability is
        considered average and there is room for improvement. Lastly, I had the
        same respondents retake the user test with the original design and found
        that the average score was a 49 which is considered to be below average.
        <br />
        <br />
        Based on the these calculations, I can conclude that the redesign
        improves areas in the Yoroi dapp where new users feel more confident in
        the process of staking while not needing social media for answers.
      </div>

      <div className="wrapper2">
        <div className="dcwContainer">
          <div className="left">
            <div className="sectionNumber">009</div>
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
      <Footer image1={dcw} image2={ze} imgSrc1="/dcw" imgSrc2="/zion" />
    </smoothEntry.div>
  );
}

export default Yoroi;
