"use client";
import React from "react";
import "./Nurture.css";
import CountUp from "react-countup";

const NurtureKey = () => {
  return (
    <div className="aboutUs3Skill-key">
      <div className="aboutUsSkill-keyContent">
        <h3>
          <CountUp end={25} duration={5} /> +
        </h3>
        <b>HAPPY CLIENTS</b>
      </div>
      <div className="aboutUsSkill-keyContent">
        <h3>
          <CountUp end={10} duration={5} /> +
        </h3>
        <b>YEARS OF WORK</b>
      </div>
      <div className="aboutUsSkill-keyContent">
        <h3>
          <CountUp end={10} duration={5} />
        </h3>
        <b>TEAM MEMBERS</b>
      </div>
      <div className="aboutUsSkill-keyContent">
        <h3>
          <CountUp end={360} duration={5} /> +
        </h3>
        <b>HAPPY PETS</b>
      </div>
    </div>
  );
};

export default NurtureKey;
