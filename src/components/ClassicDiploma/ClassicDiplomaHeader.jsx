import React from "react";
import "./ClassicDiploma.css"
import classicDiplomaBanner from "@/Image/Img/25.jpg"
import Image from "next/image";

const ClassicDiplomaHeading = () => {
  return (
    <div className="classicHeader-container">
      <div className="classicHeader-cover">
        <h2>Classic Diploma Course</h2>
      </div>
          <Image
        src={classicDiplomaBanner}
        alt="classic Diploma Banner"
      />
    </div>
  );
};

export default ClassicDiplomaHeading;
