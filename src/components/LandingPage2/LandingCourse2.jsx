"use client";

import React, { useState, useRef } from "react";
import "./LandingCourse2.css";

import cakeCourseImg from "@/Image/cakeLp/5.jpg";
import cafeCourseImg from "@/Image/cafe craft/Opening picture.jpg";
import Image from "next/image";
import Partners from "@/components/HomePage/FromCourse/FromCourse";
import Lp2CafeCourse from "./Lp2CafeCourse/Lp2CafeCourse";
import Lp2CakeCourse from "./Lp2CakeCourse/Lp2CakeCourse";
import Faculty from "../HomePage/Faculty/Faculty";
import Testimonial from "../HomePage/Testimonial/Testimonial";
import ServiceWhy from "../HomePage/ServiceWhy/ServiceWhy";
import TextLocReviews from "../HomePage/TextLocReviews/TextLocReviews";
const LandingCourse2 = () => {
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
        return <Lp2CakeCourse />;
      case "cafe":
        return <Lp2CafeCourse />;
      default:
        return null;
    }
  };
  return (
    <div className="landingCourse-container" id="course">
      <h2>Baking Certification Courses</h2>

      <div className="landingCourse-wrapper">
        <div className="landingCourse-content">
          <Image src={cakeCourseImg} alt="lpImg1" />
          <button onClick={() => handleTabClick("cake")}>
            <b> CAKE CANVAS CERTIFICATE COURSE</b>
            <p>Course Details</p>
          </button>
        </div>
        <div className="landingCourse-content">
          <Image src={cafeCourseImg} alt="lpImg1" />
          <button onClick={() => handleTabClick("cafe")}>
            <b> CAFÉ KRAFT CERTIFICATE COURSE</b>
            <p>Course Details</p>
          </button>
        </div>
      </div>
      <Partners />
      <span ref={courseRef}></span>
      {/* SCROLL TARGET */}
      <div className="landingCourse-display">{renderContent()}</div>
      <Faculty />
      <Testimonial />
      <ServiceWhy/>
      <TextLocReviews />
    </div>
  );
};

export default LandingCourse2;
