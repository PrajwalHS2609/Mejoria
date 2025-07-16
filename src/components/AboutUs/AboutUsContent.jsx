import React from "react";
import "./AboutUs.css";
import { FaBullseye } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const AboutUsContent = () => {
  return (
    <div className="aboutUsContent-container">
      <div className="aboutUsContent-content">
        <div className="aboutUsContent-wrapper">
          <h5>Where Baking Dreams Come True!</h5>
          <h2>Mejoria International School of Pastry</h2>
          <p>
            Welcome to Mejoria International School of Pastry, where the art of
            creating sweet masterpieces meets the highest standards of
            education. We are more than just an institution; we are the heart of
            Kolkata’s pastry and baking community, proudly affiliated with City
            & Guilds London.
          </p>
          <p>
            Our story is deeply rooted in the vision and expertise of our
            founder, Chef Divya Saraf, a renowned figure in the world of
            confectionery and cake design. With over 14 years of experience in
            Patisserie and cake artistry, Chef Divya has earned recognition both
            in India and internationally. Throughout her journey, she has
            mentored more than 10,000 students, imparting her knowledge and
            inspiring the next generation of pastry chefs.
          </p>
        </div>
        <div className="aboutUsContent-wrapper">
          <img
            src="https://mejoria.in/wp-content/uploads/2024/11/2024-05-24.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="aboutUsContent-content">
        <div className="aboutUsContent-item">
          <FaBullseye className="aboutUsContent-icon"/>
          <h3>Mission</h3>
          <p>
            To empower aspiring bakers with world-class education, skill
            development, and passion for pastry craftsmanship.
          </p>
        </div>
        <div className="aboutUsContent-item">
          <FaUserGraduate className="aboutUsContent-icon"/>
          <h3>Vision</h3>
          <p>
            To empower aspiring bakers with world-class education, skill
            development, and passion for pastry craftsmanship.
          </p>
        </div>
        <div className="aboutUsContent-item">
          <FaEye className="aboutUsContent-icon"/>
          <h3>Core Values</h3>
          <p>
            We strive for excellence, creativity, integrity, passion, and
            sustainability in education, baking, and food production.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContent;
