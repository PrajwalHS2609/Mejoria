import React from "react";
import "./ClassicCertification.css";
import Image from "next/image";
import classicCertiBanner from "@/Image/Img/26.jpg";
const ClassicCertificationHeader = () => {
  return (
    <div className="classicCerti-headerContainer">
      <div className="classicCerti-headerCover">
        <h2>Classic Certification Course</h2>
      </div>
      <Image src={classicCertiBanner} alt="classic Certificate  Banner" />
    </div>
  );
};

export default ClassicCertificationHeader;
