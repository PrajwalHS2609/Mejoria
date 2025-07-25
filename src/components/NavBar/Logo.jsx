import React from "react";
import "./Navbar2.css";
// import scentLogo from "./../../Images/SCENT Logo.png";
import Link from "next/link";
import Image from "next/image";
import logo from "@/Image/logo.png";
const Logo = () => {
  return (
    <div className="logo">
      <Link href={"/"}>
        <Image src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
