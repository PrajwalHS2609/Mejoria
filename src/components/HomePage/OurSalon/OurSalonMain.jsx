"use client";
import React from "react";
import "./OurSalon.css";
import OurSalonCard from "./OurSalonCard";
import NumberCounter from "number-counter";

const OurSalonMain = () => {
  return (
    <div className="salonContent2">
      <OurSalonCard
        txt={<NumberCounter end={14} delay={5} postFix="+ years" />}
      />
      {/* <OurSalonCard txt={<NumberCounter end={6} delay={5} postFix="salons" />} /> */}
      <OurSalonCard txt="10,000 + Students" />
    </div>
  );
};

export default OurSalonMain;
