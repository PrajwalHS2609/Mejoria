import React from "react";
import "./OneDayCourse.css"
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
          <img
            src="https://mejoria.in/wp-content/uploads/2024/11/city__guild_logo.png"
            alt="City and Guilds"
          />
          <span>Certified by City & Guilds, London</span>
        </div>
          <div className="nsdc">
            <img
              src="https://mejoria.in/wp-content/uploads/2024/12/ebbafe7b-1b5c-428b-bda9-68db4460c584.jpeg"
              className=""
            />
            <p className="nsdc-desc">
              Food Industry Capacity & Skill Initiative (FICSI) offers skilling
              programs leading to certification, placement, capacity building &
              entrepreneurship focusing on the Food Processing Industry.
            </p>
          </div>
      </div>

      <div className="oneDay-images">
        <div className="image-grid">
          <img
            src="https://mejoria.in/wp-content/uploads/2024/12/MasterclassCAKE-ezgif.com-optiwebp.webp"
            alt="Batch"
          />
        </div>
      </div>
    </section>
  );
};

export default OneDayCourseContent;
