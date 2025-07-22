import React from "react";
import "./EggFreeDiploma.css";
const EggFreeDiplomaContent = () => {
  return (
    <section className="diploma-section">
      <div className="diploma-content">
        <span className="tag">EGGFREE DIPLOMA PROGRAM</span>
        <h2>EggFree Diploma Program in Baking & Pastry</h2>
        <p className="desc">
          The Diploma is the flagship program at{" "}
          <b>MEJORIA INTERNATIONAL SCHOOL OF PASTRY</b>. This 6-month, hands-on
          course is designed to equip you with the skills to become a
          professional pastry chef, whether you choose to open your own pastry
          business or work in the kitchens of prestigious restaurants.
        </p>
        <p className="desc">
          This program covers baking fundamentals and advanced chocolate-making
          techniques while refining your entrepreneurial skills. Classroom
          instruction is paired with industrial training to ensure a smooth
          transition from student to professional baker, pâtissier, or
          chocolatier.
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

      <div className="diploma-images">
        <div className="image-grid">
          <img
            src="https://mejoria.in/wp-content/uploads/2025/01/3J7A4894-1536x804.jpg"
            alt="Batch"
          />
          <img
            src="https://mejoria.in/wp-content/uploads/2024/11/2023-07-21.jpg"
            alt="Cake team"
          />
          <img
            src="https://mejoria.in/wp-content/uploads/2024/11/20230829_150924-copy1-2048x1226-1-2-1536x864.jpg"
            alt="Students"
          />
        </div>
      </div>
    </section>
  );
};

export default EggFreeDiplomaContent;
