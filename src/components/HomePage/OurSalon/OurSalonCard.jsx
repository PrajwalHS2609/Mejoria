import React from "react";
import "./OurSalon.css";

const OurSalonCard = (props) => {
  return (
    <div className="salonItem">
      <span>
        {props.txt}
      </span>
    </div>
  );
};

export default OurSalonCard;
