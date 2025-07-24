import React from "react";
import "./OneDayCourse.css";
import Image from "next/image";
import oneDayBanner from "@/Image/Img/20.jpg";

const OneDayCourseHeader = () => {
  return (
    <div className="oneDay-headerContainer">
      <div className="oneDay-headerCover">
        <h2>One Day Course</h2>
      </div>
      <Image src={oneDayBanner} alt="One  Day  Banner" />
    </div>
  );
};

export default OneDayCourseHeader;
