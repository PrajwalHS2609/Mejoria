import Link from "next/link";
import React from "react";

const AboutUsEmpower = () => {
  return (
    <div className="partner-section">
      <div className="partner-container">
        <div className="partner-left">
          <div className="logos">
            <img
              src="https://mejoria.in/wp-content/uploads/2024/11/city__guild_logo__1_-removebg-preview.png"
              alt="City & Guilds"
            />
            <span className="affiliation-badge">
              Proudly Affiliated with City & Guilds London
            </span>
          </div>
          <h2 className="partner-title">
            Empowering success through skill and passion.
          </h2>
          <p className="partner-desc">
            At Mejoria, we are dedicated to fostering knowledge, innovation, and
            excellence. As a proud affiliate of City & Guilds London, we offer
            world-class Certification and Diploma Programs recognized globally
            for their quality and rigor. Our mission is to equip students with
            the expertise and skills necessary to excel in the ever-evolving
            world of pastry and baking.
          </p>

          <Link href={"/contact-us"}>
            <button>Contact Us </button>
          </Link>

          {/* <div className="nsdc">
            <img
              src="https://mejoria.in/wp-content/uploads/2024/12/ebbafe7b-1b5c-428b-bda9-68db4460c584.jpeg"
              className=""
            />
            <p className="nsdc-desc">
              Food Industry Capacity & Skill Initiative (FICSI) offers skilling
              programs leading to certification, placement, capacity building &
              entrepreneurship focusing on the Food Processing Industry.
            </p>
          </div> */}
        </div>

        <div className="partner-right">
          <div className="image-container">
            <img
              src="https://mejoria.in/wp-content/uploads/2024/11/DJI_20230811_143819_15-copy-768x842-1.jpg"
              alt="Mejoria Certification"
              className="partner-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsEmpower;
