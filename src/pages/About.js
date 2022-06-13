import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/profile_pic.png";

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              // Image goes here
              src = {profile_pic}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Kiran Aziz</div>
            <div className="brief_description">
              Hi! I am an undergraduate student at the University at Albany in upstate 
              New York double majoring in Mathematics and Computer Science.
          </div>
        </div>
      </div>
    </div>
    )
  }
}