import Link from "next/link";
import React from "react";
import nsdc from "@/Image/nsdc.jpeg";
import cityGuilds from "@/Image/cityGuilds.png";
import aboutUsEmpowerImg from "@/Image/aboutUsEmpowerImg.jpg";
import Image from "next/image";
const AboutUsEmpower = () => {
  return (
    <div className="partner-section">
      <div className="partner-container">
        <div className="partner-left">
          <div className="logos">
            <Image src={cityGuilds} alt="City & Guilds" />
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

          <div className="nsdc">
            <Image src={nsdc} alt="nsdc" className="" />
            <p className="nsdc-desc">
              Food Industry Capacity & Skill Initiative (FICSI) offers skilling
              programs leading to certification, placement, capacity building &
              entrepreneurship focusing on the Food Processing Industry.
            </p>
          </div>
          <br />
          <Link href={"/contact-us"}>
            <button>Contact Us </button>
          </Link>
        </div>

        <div className="partner-right">
          <div className="image-container">
            <Image
              src={aboutUsEmpowerImg}
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
