import React from "react";
import "./About.css";
import { FaAngleRight } from "react-icons/fa6";
// import homeAboutUs from "./../../../Images/homeAboutUs.png";
import Link from "next/link";
const About = () => {
  return (
    <div className="aboutContainer">
      <img
        src="https://mejoria.in/wp-content/uploads/2024/12/WhowearePage-ezgif.com-optiwebp-1536x1152.webp"
        alt="homeAboutUs"
        loading="lazy"
      />
      <div className="aboutContent">
        <div className="innerAboutContent">
          <div className="aboutContentTxt2">
            <h2>Who We Are</h2>

            <p>
              Mejoria International School of Pastry, located in Kolkata,
              fosters excellence in pastry and baking. Combining traditional
              methods with modern techniques, we offer an exceptional learning
              experience for aspiring pastry chefs and enthusiasts. Join us to
              master the art!
            </p>

            <p>
              Mejoria International School of Pastry, located in Kolkata,
              fosters excellence in pastry and baking. Combining traditional
              methods with modern techniques, we offer an exceptional learning
              experience for aspiring pastry chefs and enthusiasts. Join us to
              master the art!
            </p>

            <p>
              At Mejoria, we turn your passion for pastry into perfection with
              comprehensive training and exposure to global trends. Whether
              refining skills or building a career, Mejoria is where passion
              meets precision, and dreams are shaped. Join us today!
            </p>
            <div className="aboutContentTxt3">
              <p>
                <Link href={"/contact-us"}>Contact Us</Link>
                <FaAngleRight className="aboutIcon" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
