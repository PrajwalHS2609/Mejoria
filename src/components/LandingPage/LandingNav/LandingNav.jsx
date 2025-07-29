"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import logo from "@/Image/logo.png";
import "./LandingNav.css";
import { FaWhatsapp } from "react-icons/fa";

const LandingNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const showSidebar = () => setSidebarOpen(true);
  const hideSidebar = () => setSidebarOpen(false);
  const handleSectionClick = (section) => {
    setActiveSection(section);
    hideSidebar();
  };

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <div className="landing-navBarContainer">
        <div className="landing-navBarContent logo">
          <Image src={logo} alt="logo" />
        </div>
        <div className="landing-navBarContent nav-links">
          <ul>
            <li>
              <a
                href="#home"
                className={activeSection === "home" ? "active-link" : ""}
                onClick={() => handleSectionClick("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#course"
                className={activeSection === "course" ? "active-link" : ""}
                onClick={() => handleSectionClick("course")}
              >
                Course
              </a>
            </li>
            <li>
              <a
                href="#affiliate"
                className={activeSection === "affiliate" ? "active-link" : ""}
                onClick={() => handleSectionClick("affiliate")}
              >
                Affiliate
              </a>
            </li>
            <li>
              <a
                href="#chef"
                className={activeSection === "chef" ? "active-link" : ""}
                onClick={() => handleSectionClick("chef")}
              >
                Chef Divya
              </a>
            </li>
            <li>
              <a
                href="#testimonial"
                className={activeSection === "testimonial" ? "active-link" : ""}
                onClick={() => handleSectionClick("testimonial")}
              >
                Testimonial
              </a>
            </li>
            <li className="contact-link">
              <a href="https://wa.me/918777575992">
                <FaWhatsapp className="contact-ico" />{" "}
                <span>Drop a Message</span>
              </a>
            </li>
          </ul>
        </div>
        {/* Mobile menu icon */}
        <FaBars className="lpMenu-hamIcon" onClick={showSidebar} />
      </div>

      {/* MOBILE SIDEBAR */}
      <div className={`lpMenu-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="lpMenu-sidebar-header">
          <h2>Menu</h2>
          <FaXmark className="lpMenu-closeIcon" onClick={hideSidebar} />
        </div>
        <ul className="lpMenu-sidebar-links">
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active-link" : ""}
              onClick={() => handleSectionClick("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#affiliate"
              className={activeSection === "affiliate" ? "active-link" : ""}
              onClick={() => handleSectionClick("affiliate")}
            >
              Affiliate
            </a>
          </li>
          <li>
            <a
              href="#course"
              className={activeSection === "course" ? "active-link" : ""}
              onClick={() => handleSectionClick("course")}
            >
              Course
            </a>
          </li>
          <li>
            <a
              href="#chef"
              className={activeSection === "chef" ? "active-link" : ""}
              onClick={() => handleSectionClick("chef")}
            >
              Chef Divya
            </a>
          </li>
          <li>
            <a
              href="#testimonial"
              className={activeSection === "testimonial" ? "active-link" : ""}
              onClick={() => handleSectionClick("testimonial")}
            >
              Testimonial
            </a>
          </li>
          <li className="contact-link">
            <a href="tel:8777575992">
              <FaWhatsapp className="contact-ico" /> <span>Drop a Message</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LandingNav;
