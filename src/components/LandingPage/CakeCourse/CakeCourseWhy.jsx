import React from "react";
import "./CakeCourse.css";
const CakeCourseWhy = () => {
  return (
    <div className="why-choose-wrapper">
      <div className="why-img">
        <img
          src="https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg"
          alt="Baking className"
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
