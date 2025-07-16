import React from "react";
import "./AboutUs.css";
import Image from "next/image";
const AboutUsHeader = () => {
  return (
    <div className="aboutUsHeader-container">
      <div className="aboutUsHeader-cover">
        <h2>About Mejoria</h2>
      </div>
      <img
        src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg"
        alt=""
      />
    </div>
  );
};

export default AboutUsHeader;
