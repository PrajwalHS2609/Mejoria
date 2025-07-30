"use client";
import React from "react";
import "./Lp2CafeCourse.css";
import Accordion from "react-bootstrap/Accordion";
import cafeImg1 from "@/Image/cafe craft/Small Bites 3.jpg";
import cafeImg2 from "@/Image/cafe craft/Bakery Module2.jpg";
import cafeImg3 from "@/Image/cafe craft/Pastry Module 2.jpg";
import cafeImg4 from "@/Image/cafe craft/Plated Desserts2.jpg";

import Image from "next/image";
import Link from "next/link";

const Lp2CafeCourse = () => {
  const handleAppointment = () => {
    const bookPopUpElement = document.querySelector(".popup-form-wrapper");
    if (bookPopUpElement) {
      bookPopUpElement.style.visibility = "visible";
    } else {
      console.warn("Element with class 'bookPopUp' not found");
    }
  };
  return (
    <div className="cakeCourseLp-wrapper">
      <div className="cake-banner-container">
        <div className="cake-images">
          <div className="cake-img1Content">
            <Image src={cafeImg1} alt="Cake 1" />
          </div>
          <div className="cake-imagesWrapper1">
            <div className="cake-img2Content">
              <Image src={cafeImg2} alt="Cake 2" />
            </div>
            <div className="cake-imagesWrapper2">
              <div className="cake-img3Content">
                <Image src={cafeImg3} alt="Cake 3" />
              </div>
              <div className="cake-img3Content">
                <Image src={cafeImg4} alt="Cake 4" />
              </div>
            </div>
          </div>
        </div>

        <div className="cake-content">
          <div className="cake-heading-box">
            <h2 className="main-title">CAFÉ KRAFT</h2>
            <h3 className="sub-title">
              CERTIFICATE COURSE <span className="badge">4 weeks</span>
            </h3>
            <div className="price">
              <span className="original-price">₹1,00,000</span>
              <span className="discounted-price">₹75,000</span>
            </div>
          </div>

          <div className="cake-features">
            <ul>
              <li> Patisserie Module</li>
              <li> Boulongerie Module</li>
              <li> Small Bites</li>
              <li>Plated Desserts</li>
              <li>Learn 90+ Recipes</li>
            </ul>
          </div>
          <div className="cakeCourse-btn">
            <button onClick={handleAppointment}>Apply Now</button>
            <a href="/Cafe-Craft.pdf" download>
              Download Boucher
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lp2CafeCourse;
