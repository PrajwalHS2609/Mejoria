import React from "react";
import CakeCourseOverview from "./CakeCourseOverview";
import CakeCourseWhy from "./CakeCourseWhy";
import CakeCourseWeeks from "./CakeCourseWeeks";
import Faculty from "@/components/HomePage/Faculty/Faculty";
import Testimonial from "@/components/HomePage/Testimonial/Testimonial";
import TextLocReviews from "@/components/HomePage/TextLocReviews/TextLocReviews";

const CakeCourse = () => {
  return (
    <div className="">
      <CakeCourseOverview />
      <CakeCourseWhy />
      <CakeCourseWeeks />
      <Faculty />
      <Testimonial />
      <TextLocReviews />
    </div>
  );
};

export default CakeCourse;
