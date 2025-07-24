import React from "react";
import "./OneDayCourse.css";
import cityGuild from "@/Image/cityGuilds.png";
import nsdc from "@/Image/nsdc.jpeg";
import Image from "next/image";
import onedayImg from "@/Image/shortCourses/MasterclassCAKE.png"
const OneDayCourseContent = () => {
  return (
    <section className="oneDay-section">
      <div className="oneDay-content">
        <span className="tag">ONE DAY SHORT COURSES</span>
        <h2>Pastry Perfection : A One-Day Pastry Journey</h2>
        <p className="desc">
          Join us ”One Day Short Courses” where you ll learn essential
          techniques, create delicious treats, and unlock the secrets of perfect
          pastry making!
        </p>

        <a href="#enroll" className="enroll-btn">
          Enroll Now
        </a>

        <div className="certification">
          <Image src={cityGuild} alt="City and Guilds" />
          <span>Certified by City & Guilds, London</span>
        </div>
        <div className="nsdc">
          <Image src={nsdc} alt="nsdc" className="" />
          <p className="nsdc-desc">
            Food Industry Capacity & Skill Initiative (FICSI) offers skilling
            programs leading to certification, placement, capacity building &
            entrepreneurship focusing on the Food Processing Industry.
          </p>
        </div>
      </div>

      <div className="oneDay-images">
        <div className="image-grid">
          <Image
            src={onedayImg}
            alt="Batch"
          />
        </div>
      </div>
    </section>
  );
};

export default OneDayCourseContent;
