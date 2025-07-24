import React from "react";
import "./CakeCourse.css";
import cakeCourseWhyImg from "@/Image/Img/14.jpg"
import Image from "next/image";

const CakeCourseWhy = () => {
  return (
    <div className="why-choose-wrapper">
      <div className="why-img">
        <Image
          src={cakeCourseWhyImg}
          alt="cake Course why Img"
        />
      </div>
      <div className="why-text">
        <h2>WHY CHOOSE US?</h2>
        <ul>
          <li>100% Eggless Recipes</li>
          <li>Focus on Trending Cake Themes</li>
          <li>Comprehensive Business Tips</li>
          <li>Extensive Hands-On Training</li>
          <li>Learn in a Fully Equipped Studio</li>
          <li>Certificate upon Completion</li>
        </ul>
        <div className="cta-banner">
          ENROLL TODAY AND TURN YOUR <strong>PASSION</strong> INTO A{" "}
          <strong>PROFESSION!</strong>
        </div>
      </div>
    </div>
  );
};

export default CakeCourseWhy;
