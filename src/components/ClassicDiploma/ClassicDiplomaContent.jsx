import React from "react";
import "./ClassicDiploma.css";
import classicContentImg1 from "@/Image/DiplomaCourse/classicDiplomaImg1.jpg"
import classicContentImg2 from "@/Image/DiplomaCourse/eggFreeDiplomaImg2.jpg"
import classicContentImg3 from "@/Image/DiplomaCourse/eggFreeDiplomaImg3.jpg"
import nsdc from "@/Image/nsdc.jpeg"
import cityguilds  from "@/Image/cityGuilds.png"
import Image from "next/image";
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
          <Image
            src={cityguilds}
            alt="City and Guilds"
          />
          <span>Certified by City & Guilds, London</span>
        </div>
        <div className="nsdc">
          <Image
            src={nsdc} alt="nsdc"
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
          <Image 
            src={classicContentImg1}
            alt="Batch"
          />
          <Image 
            src={classicContentImg2}
            alt="Cake team"
          />
          <Image 
            src={classicContentImg3}
            alt="Students"
          />
        </div>
      </div>
    </section>
  );
};

export default ClassicDiplomaContent;
