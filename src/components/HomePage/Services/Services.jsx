"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.css";
import { FaAngleRight } from "react-icons/fa6";

import ServiceHead from "./ServiceHead";
import leftArrow from "@/Image/left.png";
import rightArrow from "@/Image/right.png";
// import hair from "./../../../video/HomeServiceVids/hairVid.mp4";
// import facial from "./../../../video/HomeServiceVids/facialsVid.mp4";
// import spa from "./../../../video/HomeServiceVids/spaVid.mp4";
// import nails from "./../../../video/HomeServiceVids/nailsVid.mp4";
// import beautyEssentials from "./../../../video/HomeServiceVids/beautyVid.mp4";
// import lashes from "./../../../video/HomeServiceVids/lashesVid.mp4";
// import bridal from "./../../../video/HomeServiceVids/bridalVid.mp4";
// import micro from "./../../../video/HomeServiceVids/microbladingVid.mp4";
import Link from "next/link";

const Services = () => {
  return (
    <div className="service-container">
      <ServiceHead />
      <div className="service-content">
        <div className="serviceCard-container">
          <div className="serviceCard-content">
            <img
              src="https://mejoria.in/wp-content/uploads/2024/12/ClassicCertificateKickstartYourPastryCareerwithClassicCertificationCourse-ezgif.com-optiwebp-1285x1536.webp"
              alt="Classic Certification Course"
              loading=""
            />
          </div>
          <h3>
            <Link href={"/classic-certification-course"}>
              Classic Certification Course
            </Link>
          </h3>
        </div>
        <div className="serviceCard-container">
          <div className="serviceCard-content">
            <img
              src="https://mejoria.in/wp-content/uploads/2024/12/StartYourPastryCareerwithEggFreeCertificationCourse-ezgif.com-optiwebp-1152x1536.webp"
              alt="Eggfree Certification Course"
              loading="lazy"
            />
          </div>
          <h3>
            <Link href={"/eggfree-certification-course"}>
              Eggfree Certification Course
            </Link>
          </h3>
        </div>
        <div className="serviceCard-container">
          <div className="serviceCard-content">
            <img
              src="https://mejoria.in/wp-content/uploads/2024/12/7d6664ac-04a6-47fa-a4fe-a6e11623e480.jpeg"
              alt="Home Bakers Certificate Course"
              loading=""
            />
          </div>
          <h3>
            <Link href={"/home-bakers-certificate-course"}>
              Home Bakers Certificate Course
            </Link>
          </h3>
        </div>
        <div className="serviceCard-container">
          <div className="serviceCard-content">
            <img
              src="https://mejoria.in/wp-content/uploads/2024/12/CakeMastery2-ezgif.com-optiwebp-scaled-1-1536x2048.webp"
              alt="Cake Mastery"
              loading=""
            />
          </div>
          <h3>
            <Link href={"/cake-mastery"}>Cake Mastery</Link>
          </h3>
        </div>
      </div>
      <div className="service-desp">
        <p>
          Mejoria International School of Pastry, located in Kolkata, fosters
          excellence in pastry and baking. Combining traditional methods with
          modern techniques, we offer an exceptional learning experience for
          aspiring pastry chefs and enthusiasts. Join us to master the art!
        </p>
        <p>
          Mejoria International School of Pastry, located in Kolkata, fosters
          excellence in pastry and baking. Combining traditional methods with
          modern techniques, we offer an exceptional learning experience for
          aspiring pastry chefs and enthusiasts. Join us to master the art!
        </p>
        <p>
          At Mejoria, we turn your passion for pastry into perfection with
          comprehensive training and exposure to global trends. Whether refining
          skills or building a career, Mejoria is where passion meets precision,
          and dreams are shaped. Join us today!
        </p>
      </div>
      {/* <div className="serviceContent" id="serviceContent3">
        <Link href={"/certification"}>
          <pre>Explore Our Certification </pre>
        </Link>
        <FaAngleRight className="serviceIcon" />
      </div> */}
    </div>
  );
};

export default Services;
