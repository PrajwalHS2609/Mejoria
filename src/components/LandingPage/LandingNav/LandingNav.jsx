import React from "react";
import "./LandingNav.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/Image/logo.png";
const LandingNav = () => {
  return (
    <div className="landing-navBarContainer">
      <div className="landing-navBarContent">
        <Image src={logo} alt="logo" />
      </div>
      <div className="landing-navBarContent">
        <ul>
          {/* <li>
            <Link href="/">Home</Link>
          </li> */}
          <li>
            <Link href="/">Overview</Link>
          </li>
          <li>
            <Link href="/">Course</Link>
          </li>
          <li>
            <Link href="/">Fees Structure</Link>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LandingNav;
