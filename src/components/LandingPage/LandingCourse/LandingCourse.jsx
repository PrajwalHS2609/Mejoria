"use client";
import React, { useState, useRef } from "react";
import "./LandingCourse.css";
import CakeCourse from "../CakeCourse/CakeCourse";
import CafeCourse from "../CafeCourse/CafeCourse";
import cakeCourseImg from "@/Image/Img/19.jpg";
import cafeCourseImg from "@/Image/Img/11.jpg";

import Image from "next/image";
import Partners from "@/components/HomePage/FromCourse/FromCourse";
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
    <div className="landingCourse-container"  id="course">
      <h2>Certification Courses</h2>

      <div className="landingCourse-wrapper">
        <div className="landingCourse-content">
          <Image src={cakeCourseImg} alt="lpImg1" />
          <button onClick={() => handleTabClick("cake")}>
            <h5> CAKE CANVAS CERTIFICATE COURSE</h5>
          </button>
        </div>
        <div className="landingCourse-content">
          <Image src={cafeCourseImg} alt="lpImg1" />
          <button onClick={() => handleTabClick("cafe")}>
            <h5> CAFÉ KRAFT CERTIFICATE COURSE</h5>
          </button>
        </div>
      </div>
      <Partners />
      <span ref={courseRef}></span>
      {/* SCROLL TARGET */}
      <div className="landingCourse-display">{renderContent()}</div>
    </div>
  );
};

export default LandingCourse;
