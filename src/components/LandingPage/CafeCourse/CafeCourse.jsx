import React from "react";
import "./CafeCourse.css";
import CafeCourseOverview from "./CafeCourseOverview";
import CafeCourseModule from "./CafeCourseModule";
import Faculty from "@/components/HomePage/Faculty/Faculty";
import Testimonial from "./../../HomePage/Testimonial/Testimonial";
import TextLocReviews from "./../../HomePage/TextLocReviews/TextLocReviews";
const CafeCourse = () => {
  return (
    <div className="cafeCourse-container">
      <CafeCourseOverview /> 
      <CafeCourseModule />
      <Faculty />
      <Testimonial />
      <TextLocReviews />
    </div>
  );
};

export default CafeCourse;
