import React from "react";
import "./Navbar2.css";
// import scentLogo from "./../../Images/SCENT Logo.png";
import Link from "next/link";
const Logo = () => {
  return (
    <div className="logo">
      <Link href={"/"}>
        <img
          src="https://mejoria.in/wp-content/uploads/2024/11/Mejoria-Logo-ver2-blck.png"
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
