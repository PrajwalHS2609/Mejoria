import React from "react";
import CakeCourseOverview from "./CakeCourseOverview";
import CakeCourseWhy from "./CakeCourseWhy";
import CakeCourseWeeks from "./CakeCourseWeeks";
import Faculty from "@/components/HomePage/Faculty/Faculty";
import Testimonial from "@/components/HomePage/Testimonial/Testimonial";
import TextLocReviews from "@/components/HomePage/TextLocReviews/TextLocReviews";
import Partners from "@/components/HomePage/FromCourse/FromCourse";
import Nurture from "@/components/HomePage/Nurture/Nurture";
import ServiceWhy from "@/components/HomePage/ServiceWhy/ServiceWhy";

const CakeCourse = () => {
  return (
    <div className="">
      <CakeCourseOverview />
      <CakeCourseWhy />
      <CakeCourseWeeks />
      <Faculty />
      <Testimonial />
      <Nurture />
      <ServiceWhy />
      <TextLocReviews />
    </div>
  );
};

export default CakeCourse;
