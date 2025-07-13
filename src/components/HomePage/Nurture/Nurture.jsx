import React from "react";
import "./Nurture.css";
import NurtureKey from "./NurtureKey";
import { RiExchangeDollarLine } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa6";
import { FaEarthAfrica } from "react-icons/fa6";

const Nurture = () => {
  return (
    <div className="aboutUs3Skill-container">
      <div className="aboutUs3Skill-wrapper">
        <div className="aboutUs3Skill-content">
          {/* <h5>Our Skills</h5> */}
          <h2>Nurturing Growth Beyond the Classroom</h2>

          <div className="aboutUs3Skill-skillContainer">
            <div className="aboutUs3Skill-skillContent">
              <FaUserGraduate className="nurture-icon1" />
              <span>
                <h3>Scholarships for Deserving Students</h3>
                <p>
                  Financial support of up to ₹50,000 for eligible and talented
                  students to help them pursue their passion without
                  constraints.
                </p>
              </span>
            </div>
            <div className="aboutUs3Skill-skillContent">
              <RiExchangeDollarLine className="nurture-icon" />
              <span>
                <h3>Low-Cost Student EMI Scheme</h3>
                <p>
                  Affordable payment options through our affiliated financial
                  partners, enabling students to manage fees conveniently
                  (subject to documentation).
                </p>
              </span>
            </div>
            <div className="aboutUs3Skill-skillContent">
              <FaEarthAfrica className="nurture-icon" />{" "}
              <span>
                <h3>International Internship</h3>
                <p>
                  Exclusive opportunities to intern in France, Australia, and
                  the UK, providing a global perspective and invaluable exposure
                  to international culinary practices (additional charges
                  apply).
                </p>
              </span>
            </div>
          <div className="nurture-button" >
            <button>Contact Us</button>
          </div>
          </div>
        </div>
        <div className="aboutUs3Skill-content">
          <video className="" src="/videos/grad.mp4" autoPlay loop muted />
        </div>
      </div>
      <div className="aboutUs3Skill-wrapper">
        {/* <NurtureKey /> */}
      </div>
    </div>
  );
};

export default Nurture;
