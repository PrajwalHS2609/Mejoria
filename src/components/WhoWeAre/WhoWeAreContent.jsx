import Link from "next/link";
import React from "react";
import "./WhoWeAre.css";
const WhoWeAreContent = () => {
  return (
    <div className="whoWeContent-container">
      <div className="whoWeContent-wrapper">
        <img
          src="https://mejoria.in/wp-content/uploads/2024/12/WhowearePage-ezgif.com-optiwebp-1536x1152.webp"
          alt=""
        />
      </div>
      <div className="whoWeContent-wrapper">
        {/* <h2>Who We Are</h2> */}
        <p>
          Mejoria International School of Pastry, located in Kolkata, fosters
          excellence in pastry and baking. Combining traditional methods with
          modern techniques, we offer an exceptional learning experience for
          aspiring pastry chefs and enthusiasts. Join us to master the art!
        </p>
        <p>
          At Mejoria, students are mentored by expert chefs, learning through
          Practice, Patience, and Perseverance to master their craft and reach
          their full potential.
        </p>
        <p>
          At Mejoria, we turn your passion for pastry into perfection with
          comprehensive training and exposure to global trends. Whether refining
          skills or building a career, Mejoria is where passion meets precision,
          and dreams are shaped. Join us today!
        </p>
        <Link href={"/contact-us"}>
          <button>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default WhoWeAreContent;
