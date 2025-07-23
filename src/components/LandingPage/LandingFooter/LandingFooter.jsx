import React from "react";
import "./LandingFooter.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
const LandingFooter = () => {
  return (
    <div className="landingFooter-container">
      <div className="landingFooter-content">Mejoria©Copyright 2025</div>
      <div className="landingFooter-content">
        <div className="landingFooter-item">
          <a href="https://www.instagram.com/mejoriabaking/">
            <FaInstagram className="landingFooter-Icon" />
          </a>
        </div>
        <div className="landingFooter-item">
          <a href="https://www.facebook.com/Mejoriabaking">
            <FaFacebook className="landingFooter-Icon" />
          </a>
        </div>
        <div className="landingFooter-item">
          <a href="https://www.youtube.com/@MejoriA">
            <FaYoutube className="landingFooter-Icon" />
          </a>
        </div>
        <div className="landingFooter-item">
          <a href="https://in.pinterest.com/">
            <FaPinterest className="landingFooter-Icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
