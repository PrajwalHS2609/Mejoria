import Image from "next/image";
import React from "react";
import "./WhoWeAre.css"
import  whoWeHeaderImg from "@/Image/aboutContentImg.jpg"
const WhoWeAreHeader = () => {
  return (
    <div className="whoWeHeader-container">
      <div className="whoWeHeader-cover">
        <h2>Who We Are</h2>
      </div>
      <Image
        src={whoWeHeaderImg}
        alt="homeAboutUs"
        loading="lazy"
      />
    </div>
  );
};

export default WhoWeAreHeader;
