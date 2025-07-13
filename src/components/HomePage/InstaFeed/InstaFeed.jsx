import React from "react";
import "./InstaFeed.css";
import InstaHead from "./InstaHead";
import InstaImgContain from "./InstaImgContain";
const InstaFeed = () => {
  return (
    <div className="instaContainer">
     <InstaHead/>
     <InstaImgContain/>
     </div>
  );
};

export default InstaFeed;
