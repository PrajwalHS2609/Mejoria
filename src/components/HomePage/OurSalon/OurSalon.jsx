import React from "react";
import "./OurSalon.css";
import OurSalonHead from "./OurSalonHead";
import OurSalonMain from "./OurSalonMain";
// import OurSalonFooterTxt from "./OurSalonFooterTxt";
// import abstractImg from "./../../../Images/Abstract Shapes.png";

const OurSalon = () => {
  return (
    <div className="salonContainer">
      {/* <img src={abstractImg} alt="" /> */}
      <OurSalonHead />
      <OurSalonMain />
      {/* <OurSalonFooterTxt /> */}
    </div>
  );
};

export default OurSalon;
