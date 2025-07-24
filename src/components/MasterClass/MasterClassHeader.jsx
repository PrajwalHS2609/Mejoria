import React from "react";
import "./MasterClass.css";
import masterClassBanner from "@/Image/Img/21.jpg";
import Image from "next/image";

const MasterClassHeader = () => {
  return (
    <div className="masterClass-headerContainer">
      <div className="masterClass-headerCover">
        <h2>Master Classes</h2>
      </div>
      <Image src={masterClassBanner} alt="master class  Banner" />
    </div>
  );
};

export default MasterClassHeader;
