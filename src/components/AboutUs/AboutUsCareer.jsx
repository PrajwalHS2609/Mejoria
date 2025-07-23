import React from "react";
import "./AboutUs.css";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Image from "next/image";
import aboutUsCareerImg from "@/Image/aboutUsCareerImg.jpg"
const AboutUsCareer = () => {
  return (
    <div className="aboutUsCareer-container">
      <div className="aboutUsCareer-content">
        <h2>Career Paths Available After Completing This Course</h2>
        <ul>
          <li>
            <IoMdCheckmarkCircleOutline className="aboutUsCareer-icon" />
            <div>
              <b>LAUNCH YOUR OWN BAKERY/CAFÉ:</b> Gain skills and confidence to
              open and run your bakery or café, serving delicious treats to
              customers.
            </div>
          </li>
          <li>
            <IoMdCheckmarkCircleOutline className="aboutUsCareer-icon" />
            <div>
              <b>MASTER CUSTOM CAKE ARTISTRY:</b> Specialize in creating bespoke
              cakes for weddings, birthdays, and special events, showcasing your
              creativity.
            </div>
          </li>
          <li>
            <IoMdCheckmarkCircleOutline className="aboutUsCareer-icon" />
            <div>
              <b>BAKING CAREERS IN RENOWNED ESTABLISHMENTS:</b> Pursue a career
              as a pastry chef, chocolatier, or patissier at prestigious
              restaurants, hotels, or cruise ships.
            </div>
          </li>
          <li>
            <IoMdCheckmarkCircleOutline className="aboutUsCareer-icon" />
            <div>
              <b>GO GLOBAL WITH CITY & GUILDS CERTIFICATION:</b> City & Guilds
              certification opens global opportunities, working in top bakeries,
              hotels, and restaurants worldwide.
            </div>
          </li>
        </ul>
        <Link href="/">
          <button className="aboutUsCareer-btn">Enroll Now</button>
        </Link>
      </div>
      <div className="aboutUsCareer-image">
        <Image
          src={aboutUsCareerImg}
          alt="Young man with croissants"
        />
      </div>
    </div>
  );
};

export default AboutUsCareer;
