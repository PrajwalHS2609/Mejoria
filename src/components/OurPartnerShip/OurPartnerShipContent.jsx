import Link from "next/link";
import React from "react";
import "./OurPartnerShip.css";
const OurPartnerShipContent = () => {
  return (
    <div className="partner-section">
      <div className="partner-container">
        <div className="partner-left">
          <div className="logos">
            {/* <img
              src="https://mejoria.in/wp-content/uploads/2024/11/city__guild_logo__1_-removebg-preview.png"
              alt="City & Guilds"
            /> */}
            <span className="affiliation-badge">
              Proudly Affiliated with City & Guilds London
            </span>
          </div>
          <h2 className="partner-title">
            Our Esteemed Partner: <span>City and Guilds London</span>
          </h2>
          <p className="partner-desc">
            We are proud to be affiliated with City & Guilds London, a globally
            recognized leader in education and training. This prestigious
            partnership brings immense value to our students by providing
            internationally recognized certifications that open doors to career
            opportunities in the pastry and baking industries.
          </p>
          <p>
            With City & Guilds’ extensive industry experience and commitment to
            excellence, our students gain the credibility and skills needed to
            thrive globally. Together, we ensure the highest standards in
            education, empowering students to achieve their full potential and
            excel in their culinary careers.
          </p>
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
          <br />
          <Link href={"/contact-us"}>
            <button>Contact Us </button>
          </Link>
        </div>

        <div className="partner-right">
          <div className="image-container">
            <img
              src="https://mejoria.in/wp-content/uploads/2024/12/IMG_8514.webp"
              alt="Mejoria Certification"
              className="partner-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartnerShipContent;
