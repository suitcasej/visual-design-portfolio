import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import "../style2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import landscape from "../Assets/img/landscape.png";
import rock from "../Assets/img/rock.jpg";
import { NavItem, Button } from "react-bootstrap";

function Values() {
    return (
        <div>
                {/* Nav bar  */}
                <nav className="nav_home" style={{backgroundColor: "black", color: "white", height: "36px", display: "flex", alignItems: "center"}}>
                    
                </nav>

                {/* Landscape image */}
                <img src={landscape} style={{width: "auto", maxWidth: "100%", display: "flex"}}/>

                {/* Values */}
                <div className="name_header" style={{ borderTop: "1px solid black", borderBottom: "1px solid black", color: "black", height: "36px", display: "flex", alignItems: "center"}}>
                    <div style={{paddingLeft: "20px"}}>
                        Values
                    </div>
                </div>

                {/* Bio description, resume, email, social */}
                <div className="name_bio" style={{color: "black", height: "auto", display: "flex", alignItems: "center"}}>
                        <p style={{width: "100%", margin: "auto", paddingTop: "36px", paddingLeft: "20px", paddingRight: "20px" }}>
                        I aim to design technology that radically improves the quality of life on Earth for all beings. 
                        </p>
                </div>

                <Button className="SM_button" style={{marginTop: "36px", marginLeft: "20px", borderRadius: "0", border: "1px solid black", color: "black", backgroundColor: "transparent"}}>
                  <div class_name="name_header">See More</div>
                </Button>
      </div>
    )

    

}



export default Values;