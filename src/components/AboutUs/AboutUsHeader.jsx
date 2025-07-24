import React from "react";
import "./AboutUs.css";
import Image from "next/image";
import aboutHeaderImg from "@/Image/Img/15.jpg"
const AboutUsHeader = () => {
  return (
    <div className="aboutUsHeader-container">
      <div className="aboutUsHeader-cover">
        <h2>About Mejoria</h2>
      </div>
      <Image
        src={aboutHeaderImg}
        alt="about Header Img"
      />
    </div>
  );
};

export default AboutUsHeader;
