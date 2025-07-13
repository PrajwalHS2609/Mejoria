import React from "react";
import { FaAngleRight } from "react-icons/fa6";

import Link from "next/link";
const OurSalonFooterTxt = () => {
  return (
    <div className="salonContent3">
      <Link href="/">
        <p>OUR SALONS </p>
        <FaAngleRight className="salonIcon" />
      </Link>
    </div>
  );
};

export default OurSalonFooterTxt;
