import React from "react";
import "./CafeCourse.css";
import CafeCourseOverview from "./CafeCourseOverview";
import CafeCourseModule from "./CafeCourseModule";
import Faculty from "@/components/HomePage/Faculty/Faculty";
import Testimonial from "./../../HomePage/Testimonial/Testimonial";
import TextLocReviews from "./../../HomePage/TextLocReviews/TextLocReviews";
import Partners from "@/components/HomePage/FromCourse/FromCourse";
import Nurture from "@/components/HomePage/Nurture/Nurture";
import ServiceWhy from "@/components/HomePage/ServiceWhy/ServiceWhy";

const CafeCourse = () => {
  return (
    <div className="cafeCourse-container">
      <CafeCourseOverview />
      <CafeCourseModule />
      <Faculty />
      <Partners />
      <Testimonial />
      <Nurture />
      <ServiceWhy />
      <TextLocReviews />
    </div>
  );
};

export default CafeCourse;
