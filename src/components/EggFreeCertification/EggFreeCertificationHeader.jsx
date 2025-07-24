import React from "react";
import "./EggFreeCertification.css";
import Image from "next/image";
import eggFreeCertiBanner from "@/Image/Img/24.jpg";
const EggFreeCertificationHeader = () => {
  return (
    <div className="eggFreeCerti-headerContainer">
      <div className="eggFreeCerti-headerCover">
        <h2>EggFree Certification Course</h2>
      </div>
      <Image src={eggFreeCertiBanner} alt="EggFree Certificate  Banner" />
    </div>
  );
};

export default EggFreeCertificationHeader;
