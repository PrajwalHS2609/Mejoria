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
  const courseRef1 = useRef(null);
  const courseRef2 = useRef(null);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    // Scroll to the content section
    setTimeout(() => {
      courseRef1.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);

    setTimeout(() => {
      courseRef2.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  // const renderContent = () => {
  //   switch (activeTab) {
  //     case "cake":
  //       return <Lp2CakeCourse />;
  //     case "cafe":
  //       return <Lp2CafeCourse />;
  //     default:
  //       return null;
  //   }
  // };
  return (
    <div className="landingCourse-container" id="course">
      <h2>Baking Certification Courses</h2>

      <div className="landingCourse-wrapper">
        <div className="landingCourse-content">
          <Image src={cakeCourseImg} alt="lpImg1" />

          <a href="#cakecourse" className="course-btn">
            <b>CAKE CANVAS CERTIFICATE COURSE</b>
          </a>

          <a href="#cakecourse" className="click-btn">
            Course Details
          </a>
        </div>

        <div className="landingCourse-content">
          <Image src={cafeCourseImg} alt="lpImg2" />

          <a href="#cafecourse" className="course-btn">
            <b>CAFÉ KRAFT CERTIFICATE COURSE</b>
          </a>

          <a href="#cafecourse" className="click-btn">
            Course Details
          </a>
        </div>
      </div>
      <span id="affiliate"></span>
      <Partners />
      <span id="cakecourse"></span>
      {/* SCROLL TARGET */}
      {/* <div className="landingCourse-display">{renderContent()}</div> */}
      <Lp2CakeCourse />
      <span id="cafecourse"></span>
      <Lp2CafeCourse />
      <span id="chef"></span>
      <Faculty />
      <span id="testimonial"></span>
      <Testimonial />
      <ServiceWhy />
      <TextLocReviews />
    </div>
  );
};

export default LandingCourse2;
