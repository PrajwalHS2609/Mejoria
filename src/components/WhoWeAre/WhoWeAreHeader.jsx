import Image from "next/image";
import React from "react";
import "./WhoWeAre.css"
const WhoWeAreHeader = () => {
  return (
    <div className="whoWeHeader-container">
      <div className="whoWeHeader-cover">
        <h2>Who We Are</h2>
      </div>
      <img
        src="https://mejoria.in/wp-content/uploads/2024/11/2024-05-24.jpg"
        alt="homeAboutUs"
        loading="lazy"
      />
    </div>
  );
};

export default WhoWeAreHeader;
