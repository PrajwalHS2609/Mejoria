import React from "react";
import "./Faculty.css";
import { FaAward } from "react-icons/fa";
import Image from "next/image";
import chef from "@/Image/chef1.png"
const Faculty = () => {
  return (
    <div className="chef-section">
      <div className="chef-image">
        <Image
          src={chef}
          alt="Chef Divya Saraf"
        />
      </div>
      <div className="chef-content">
        <h2>
          Chef Divya Saraf <span>— Our Esteemed Faculty</span>
        </h2>

        <br />
        <p className="chef-intro">
          Chef Divya Saraf is a distinguished Pastry Chef with over 14 years of
          expertise, widely celebrated for her mastery in Patisserie and cake
          design. With an impressive career, she has shared her invaluable
          knowledge and passion with nearly 10,000 students, shaping the future
          of pastry professionals worldwide.
        </p>
        <p className="chef-bio">
          As a dedicated mentor, she has played a pivotal role in the success
          stories of countless aspiring chefs, guiding them to excel in fine
          baking and cake artistry. Her unwavering commitment to nurturing
          talent and fostering creativity continues to inspire and empower
          students, leaving an enduring impact on the pastry industry.
        </p>
        <div className="chef-stats">
          <div className="stat-box">
            <span className="stat-number">14+</span>
            <span className="stat-label">Years of Experience</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">10,000+</span>
            <span className="stat-label">Students Mentored</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">IICMA 2025 </span>
            <span className="stat-label" id="stat-label3">
              "Promising Talent India"
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
