import React from "react";
import "./MasterClass.css";
import nsdc from "@/Image/nsdc.jpeg"
import cityguilds  from "@/Image/cityGuilds.png"
import Image from "next/image";
const MasterClassContent = () => {
  return (
    <section className="masterClass-section">
      <div className="masterClass-content">
        <span className="tag">MASTER CLASSES</span>
        <h2>Mejoria's Art of Pastry: Mastering the Craft</h2>
        <p className="desc">
          Unveil the secrets of professional pastry chefs with Mejoria. Master
          key techniques, tricks, and tips to perfect your pastry creations,
          from delicate tarts to indulgent puff pastries.
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

      <div className="masterClass-images">
        <div className="image-grid">
          <video src="/videos/StrawberryChocolate.mp4" autoPlay loop muted controls ></video>
        </div>
      </div>
    </section>
  );
};

export default MasterClassContent;
