import React from "react";
import "./ClassicDiploma.css";

const ClassicDiplomaContent = () => {
  return (
    <section className="diploma-section">
      <div className="diploma-content">
        <span className="tag">CLASSIC DIPLOMA PROGRAM</span>
        <h2>Classic Diploma Program in Baking & Pastry</h2>
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
      </div>

      <div className="diploma-images">
        <div className="image-grid">
          <img
            src="https://mejoria.in/wp-content/uploads/2024/11/2024-05-24.jpg"
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

export default ClassicDiplomaContent;
