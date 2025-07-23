import React from "react";
import "./FromCourse.css";
import Image from "next/image";
import convocation from "@/Image/ConvocationChef.jpg"
import nsdc from "@/Image/nsdc.jpeg"
import cityGuild from "@/Image/cityGuilds.png"
const FromCourse = () => {
  return (
    <div className="partner-section">
      <div className="partner-container">
        <div className="partner-left">
          <div className="logos">
            <Image
              src={cityGuild}
              alt="City & Guilds"
            />
            <span className="affiliation-badge">
              Proudly Affiliated with City & Guilds London
            </span>
          </div>
          <h2 className="partner-title">
            Our Esteemed Partner: <span>City and Guilds London</span>
          </h2>
          <p className="partner-desc">
            At Mejoria, we are dedicated to fostering knowledge, innovation, and
            excellence. As a proud affiliate of City & Guilds London, we offer
            world-className Certification and Diploma Programs recognized
            globally for their quality and rigor. Our mission is to equip
            students with the expertise and skills necessary to excel in the
            ever-evolving world of pastry and baking.
          </p>

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

        <div className="partner-right">
          <div className="image-container">
            <Image
              src={convocation}
              alt="Mejoria Certification"
              className="partner-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromCourse;
