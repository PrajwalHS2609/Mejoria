"use client";
import React, { useState, useRef } from "react";
import "./LandingCourse.css";
import CakeCourse from "../CakeCourse/CakeCourse";
import CafeCourse from "../CafeCourse/CafeCourse";

const LandingCourse = () => {
  const [activeTab, setActiveTab] = useState("cake");
  const courseRef = useRef(null);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    // Scroll to the content section
    setTimeout(() => {
      courseRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50); // Short delay ensures content is rendered before scroll
  };

  const renderContent = () => {
    switch (activeTab) {
      case "cake":
        return <CakeCourse />;
      case "cafe":
        return <CafeCourse />;
      default:
        return null;
    }
  };

  return (
    <div className="landingCourse-container">
      <h2>Certification Courses</h2>

      <div className="landingCourse-wrapper">
        <div className="landingCourse-content">
          <img
            src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg"
            alt="lpImg1"
          />
          <button onClick={() => handleTabClick("cake")}>
            <h5> CAKE CANVAS CERTIFICATE COURSE</h5>
          </button>
        </div>
        <div className="landingCourse-content">
          <img
            src="https://images.pexels.com/photos/1024359/pexels-photo-1024359.jpeg"
            alt="lpImg1"
          />
          <button onClick={() => handleTabClick("cafe")} ref={courseRef}>
            <h5> CAFÉ KRAFT CERTIFICATE COURSE</h5>
          </button>
        </div>
      </div>

      {/* SCROLL TARGET */}
      <div className="landingCourse-display" ref={courseRef}>
        {renderContent()}
      </div>
    </div>
  );
};

export default LandingCourse;
