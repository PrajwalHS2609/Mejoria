"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.css";

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
import classicCourse from "@/Image/courses/classicCourse.png";
import cakeMastery from "@/Image/courses/cakeMasteryCourse.png";
import eggFree from "@/Image/courses/eggFreeCourse.png";
import homeBaker from "@/Image/courses/homeBakersCourse.png";

import Image from "next/image";
const Services = () => {
  return (
    <div className="service-container">
      <ServiceHead />
      <div className="service-content">
        <div className="serviceCard-container">
          <div className="serviceCard-content">
            <Image
              src={classicCourse}
              alt="Classic Certification Course"
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
            <Image
              src={eggFree}
              alt="Eggfree Certification Course"
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
            <Image
              src={homeBaker}
              alt="Home Bakers Certificate Course"
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
            <Image src={cakeMastery} alt="Cake Mastery"  />
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
