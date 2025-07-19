"use client";
import React, { useState } from "react";
import "./Navbar2.css";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";

import Link from "next/link";

const Menu = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const showSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    sideBar.style.display = "flex";
    sideBar.style.transform = "translateX(0px)";
  };

  const hideSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    sideBar.style.transform = "translateX(620px)";
  };

  const handleDropDown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="menuContainer">
      <ul className="menuContent">
        <li>
          <Link href={"/"}>HOME</Link>
        </li>
        <li>
          <Link href={"/about-mejoria"}>ABOUT MEJORIA</Link>
          <MdKeyboardArrowDown className="menuIcon" />
          <div className="menuDrop">
            <Link href={"/who-we-are"}>
              <div className="dropItems">
                <p>WHO WE ARE</p>
              </div>
            </Link>
            <Link href={"/our-expertise"}>
              <div className="dropItems">
                <p>OUR EXPERTISE</p>
              </div>
            </Link>
            <Link href={"/our-faculty"}>
              <div className="dropItems">
                <p>OUR FACULTY</p>
              </div>
            </Link>
            <Link href={"/our-partnerships"}>
              <div className="dropItems">
                <p>OUR PARTNERSHIP</p>
              </div>
            </Link>
          </div>
        </li>
        <li>
          <Link href={"/"}>DIPLOMA PROGRAM</Link>
          <MdKeyboardArrowDown className="menuIcon" />
          <div className="menuDrop">
            <Link href={"/eggfree-diploma-course"}>
              <div className="dropItems">
                <p>EGGFREE DIPLOMA COURSE</p>
              </div>
            </Link>
            <Link href={"/classic-diploma-course"}>
              <div className="dropItems">
                <p>CLASSIC DIPLOMA COURSE</p>
              </div>
            </Link>
          </div>
        </li>
        <li>
          <Link href={"/"}>CERTIFICATION COURSES</Link>
          <MdKeyboardArrowDown className="menuIcon" />
          <div className="menuDrop">
            <Link href={"/eggfree-certification-course"}>
              <div className="dropItems">
                <p>EGGFREE CERTIFICATION COURSE</p>
              </div>
            </Link>
            <Link href={"/classic-certification-course"}>
              <div className="dropItems">
                <p>CLASSIC CERTIFICATION COURSE</p>
              </div>
            </Link>
            <Link href={"/cake-mastery"}>
              <div className="dropItems">
                <p>CAKE MASTERY</p>
              </div>
            </Link>
            <Link href={"/home-bakers-certification-course"}>
              <div className="dropItems">
                <p>HOME BAKER'S CERTIFICATION COURSE</p>
              </div>
            </Link>
          </div>
        </li>
        <li>
          <Link href={"/"}>SHORT COURSES</Link>
          <MdKeyboardArrowDown className="menuIcon" />
          <div className="menuDrop">
            <Link href={"/master-classes"}>
              <div className="dropItems">
                <p>MASTER CLASSES</p>
              </div>
            </Link>
            <Link href={"/one-day-courses"}>
              <div className="dropItems">
                <p>ONE DAY COURSES</p>
              </div>
            </Link>
          </div>
        </li>
        <li>
          <Link href={"/contact-us"}>CONTACT US</Link>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <ul onClick={showSideBar} className="mainMenu">
        <FaBars className="hamIcon" />
      </ul>

      {/* Responsive Sidebar */}
      <div className="respMenu">
        <div className="respMenuScroll" id="respMenuScrollId">
          <ul id="respMenuScrollUl">
            <h2>
              <Link onClick={hideSideBar} href={"/"}>
                HOME
              </Link>
            </h2>
            <h2 className="cross">
              <FaXmark className="respIcon" onClick={hideSideBar} />
            </h2>
          </ul>

          {/* ABOUT MEJORIA */}
          <ul className="serviceDrop">
            <h2>
              <Link onClick={hideSideBar} href={"/about-mejoria"}>
                ABOUT MEJORIA
              </Link>
              <MdKeyboardArrowDown
                className="menuIcon"
                onClick={() => handleDropDown("about")}
              />
            </h2>
            {openDropdown === "about" && (
              <span className="respMenuSpan">
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/who-we-are"}>
                      WHO WE ARE
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/our-expertise"}>
                      OUR EXPERTISE
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/our-faculty"}>
                      OUR FACULTY
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/our-partnerships"}>
                      OUR PARTNERSHIP
                    </Link>
                  </h4>
                </li>
              </span>
            )}
          </ul>

          {/* DIPLOMA PROGRAM */}
          <ul className="serviceDrop">
            <h2>
              <Link onClick={hideSideBar} href={"#"}>
                DIPLOMA PROGRAM
              </Link>
              <MdKeyboardArrowDown
                className="menuIcon"
                onClick={() => handleDropDown("diploma")}
              />
            </h2>
            {openDropdown === "diploma" && (
              <span className="respMenuSpan">
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/eggfree-diploma-course"}>
                      EGGFREE DIPLOMA COURSE
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/classic-diploma-course"}>
                      CLASSIC DIPLOMA COURSE
                    </Link>
                  </h4>
                </li>
              </span>
            )}
          </ul>

          {/* CERTIFICATION COURSES */}
          <ul className="serviceDrop">
            <h2>
              <Link onClick={hideSideBar} href={"#"}>
                CERTIFICATION COURSES
              </Link>
              <MdKeyboardArrowDown
                className="menuIcon"
                onClick={() => handleDropDown("certification")}
              />
            </h2>
            {openDropdown === "certification" && (
              <span className="respMenuSpan">
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/"}>
                      EGGFREE CERTIFICATION COURSE
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/"}>
                      CLASSIC CERTIFICATION COURSE
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/"}>
                      CAKE MASTERY
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/"}>
                      HOME BAKER'S CERTIFICATION COURSE
                    </Link>
                  </h4>
                </li>
              </span>
            )}
          </ul>

          {/* SHORT COURSES */}
          <ul className="serviceDrop">
            <h2>
              <Link onClick={hideSideBar} href={"/"}>
                SHORT COURSES
              </Link>
              <MdKeyboardArrowDown
                className="menuIcon"
                onClick={() => handleDropDown("short")}
              />
            </h2>
            {openDropdown === "short" && (
              <span className="respMenuSpan">
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/"}>
                      MASTER CLASSES
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/"}>
                      ONE DAY COURSE
                    </Link>
                  </h4>
                </li>
              </span>
            )}
          </ul>

          {/* CONTACT */}
          <ul>
            <h2>
              <Link onClick={hideSideBar} href={"/contact-us"}>
                CONTACT US
              </Link>
            </h2>
          </ul>

          <ul>
            <div className="respMenuGap"></div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
