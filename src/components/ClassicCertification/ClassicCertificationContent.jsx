import React from "react";
import "./ClassicCertification.css";

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
          <img
            src="https://mejoria.in/wp-content/uploads/2024/11/city__guild_logo.png"
            alt="City and Guilds"
          />
          <span>Certified by City & Guilds, London</span>
        </div>
      </div>

      <div className="classicCerti-images">
        <div className="image-grid">
          <img
            src="https://mejoria.in/wp-content/uploads/2024/12/ClassicCertificateKickstartYourPastryCareerwithClassicCertificationCourse-ezgif.com-optiwebp-1285x1536.webp"
            alt="Batch"
          />
        </div>
      </div>
    </section>
  );
};

export default ClassicCertificationContent;
