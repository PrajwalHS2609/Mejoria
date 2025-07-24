import React from "react";
import "./CakeMastery.css";
import cakeMasteryBanner from "@/Image/Img/20.jpg";
import Image from "next/image";

const CakeMasteryHeader = () => {
  return (
    <div className="cakeMastery-headerContainer">
      <div className="cakeMastery-headerCover">
        <h2>Cake Mastery</h2>
      </div>
      <Image src={cakeMasteryBanner} alt="cake mastery  Banner" />

    </div>
  );
};

export default CakeMasteryHeader;
