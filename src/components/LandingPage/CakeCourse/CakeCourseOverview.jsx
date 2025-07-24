import React from "react";
import "./CakeCourse.css";
import cakeCourseOverviewImg from "@/Image/Img/13.jpg"
import Image from "next/image";
const CakeCourseOverview = () => {
  return (
    <div className="cakeCourseOverview-container" id="overview">
      <div className="cakeCourseOverview-content">
        <span className="tag">FROM BASIC TO BRILLIANCE:</span>
        <h2>MASTER EGG-FREE BAKING & LAUNCH YOUR HOME BAKERY!</h2>
        <p>
          Unleash your baking potential with our comprehensive 12-day course,
          designed to transform you into a skilled egg-free baker and equip you
          with the knowledge to start your own home bakery business. Get
          hands-on training in our fully equipped studio and receive a
          certificate upon completion.
        </p>

        {/* ✨ Highlight List */}
        <ul className="highlight-list">
          <li>From Basics to Brilliance</li>
          <li>Beginner Friendly</li>
          <li>Start with Basics of Baking</li>
          <li>Learn to Frost with Flair</li>
          <li>Flavours and Textures</li>
          <li>Create Cake like a Pro</li>
          <li>Perfect to setup a Home Business</li>
        </ul>
      </div>

      <div className="cakeCourseOverview-content">
        <Image
          src={cakeCourseOverviewImg}
          alt="cake Course Overview Img"
        />
      </div>
    </div>
  );
};

export default CakeCourseOverview;
