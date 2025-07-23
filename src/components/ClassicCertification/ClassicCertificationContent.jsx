import React from "react";
import "./ClassicCertification.css";
import classicCertiContentImg from "./../../Image/classicCertiContentImg.png";
import nsdc from "@/Image/nsdc.jpeg";
import cityguilds from "@/Image/cityGuilds.png";
import Image from "next/image";
const ClassicCertificationContent = () => {
  return (
    <section className="classicCerti-section">
      <div className="classicCerti-content">
        <span className="tag">CLASSIC CERTIFICATION COURSE</span>
        <h2>Kickstart Your Pastry Career with Classic Certification Course</h2>
        <p className="desc">
          Our 2 Months Professional Baking and Pastry (Classic ) Certificate
          Course is the perfect foundation for your bakery or café dreams. At
          Mejoria International School of Pastry, we’ll teach you everything
          from crafting elegant 3-tier wedding cakes to perfecting eggless
          baking techniques, preparing you to thrive as a pastry chef,
          chocolatier, or patissier at top establishments.
        </p>
        <p className="desc">
          With certification endorsed by City & Guilds London, you’ll gain
          global recognition, unlocking career opportunities worldwide.
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

      <div className="classicCerti-images">
        <div className="image-grid">
          <Image
            src={classicCertiContentImg}
            alt="Batch"
          />
        </div>
      </div>
    </section>
  );
};

export default ClassicCertificationContent;
