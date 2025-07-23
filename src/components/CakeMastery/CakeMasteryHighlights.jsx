import React from "react";
import "./CakeMastery.css";
import Image from "next/image";
import chef from "@/Image/chef1.png"
const CakeMasteryHighlights = () => {
  return (
    <div className="cake-course-section">
      <div className="cake-course-wrapper">
        <div className="chef-image-wrapper">
          <Image
            src={chef}
            alt="Chef Dhanya"
            className="chef-image"
          />
        </div>
        <div className="course-highlights-wrapper">
          <h2 className="course-heading">Cake Mastery Course Highlights</h2>
          <p className="course-overview">
            <strong>Course Overview:</strong> This 4-week course teaches
            advanced techniques for modern wedding, celebration, hand-painted,
            structural, airbrushed, and gravity-defying cakes.
          </p>
          <ul className="highlight-list">
            {[
              "Course Duration: 4 weeks",
              "Modern Wedding Cakes",
              "Celebration & Theme Cakes",
              "Hand Painted Cakes",
              "Gumpaste Realistic Flowers",
              "Hanging & Chandelier Cakes",
              "Rotating Cakes",
              "Structure & Gravity Defying Cakes",
              "Realistic Airbrushing & Carved Cakes",
              "Royal Icing & String Work",
            ].map((point, i) => (
              <li key={i}>
                <span className="check-icon">✔</span>
                {point}
              </li>
            ))}
          </ul>
          <button className="enroll-btn">ENROLL NOW</button>
        </div>
      </div>
    </div>
  );
};

export default CakeMasteryHighlights;
