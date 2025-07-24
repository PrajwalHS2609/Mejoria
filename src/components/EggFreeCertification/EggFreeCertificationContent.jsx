import React from "react";
import "./EggFreeCertification.css";
import eggFreeCertiContentImg from "./../../Image/eggFreeCertiContentImg.png";
import nsdc from "@/Image/nsdc.jpeg";
import cityguilds from "@/Image/cityGuilds.png";
import Image from "next/image";
const EggFreeCertificationContent = () => {
  return (
    <section className="eggFreeCerti-section">
      <div className="eggFreeCerti-content">
        <span className="tag">EGGFREE CERTIFICATION COURSE</span>
        <h2>Kickstart Your Pastry Career with EggFree Certification Course</h2>
        <p className="desc">
          Our 2-month Professional Baking and Pastry (Egg-Free) Certificate
          Course is the ideal starting point for your journey in the world of
          baking. At Mejoria International School of Pastry, you’ll master
          everything from creating stunning 3-tier wedding cakes to perfecting
          eggless baking techniques. This comprehensive course is designed to
          equip you with the skills needed to succeed as a pastry chef,
          chocolatier, or patissier at top-tier bakeries and cafés. Whether
          you’re starting your own business or aiming for a prestigious role,
          our training will set you on the path to success.
        </p>
        <p className="desc">
          With certification endorsed by City & Guilds London, you’ll gain
          global recognition, unlocking career opportunities worldwide.
        </p>

        <a href="#enroll" className="enroll-btn">
          Enroll Now
        </a>

        <div className="certification">
          <Image src={cityguilds} alt="City and Guilds" />
          <span>Certified by City & Guilds, London</span>
        </div>
        <div className="nsdc">
          <Image src={nsdc} className="" />
          <p className="nsdc-desc">
            Food Industry Capacity & Skill Initiative (FICSI) offers skilling
            programs leading to certification, placement, capacity building &
            entrepreneurship focusing on the Food Processing Industry.
          </p>
        </div>
      </div>

      <div className="eggFreeCerti-images">
        <div className="image-grid">
          <Image src={eggFreeCertiContentImg} alt="Batch" />
        </div>
      </div>
    </section>
  );
};

export default EggFreeCertificationContent;
