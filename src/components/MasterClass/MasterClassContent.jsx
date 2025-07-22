import React from "react";
import "./MasterClass.css";
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

      <div className="masterClass-images">
        <div className="image-grid">
          <video src="/videos/StrawberryChocolate.mp4" autoPlay loop muted controls ></video>
        </div>
      </div>
    </section>
  );
};

export default MasterClassContent;
