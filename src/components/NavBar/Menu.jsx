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
          <Link href={"/service"}>ABOUT MEJORIA</Link>
          <MdKeyboardArrowDown className="menuIcon" />
          <div className="menuDrop">
            <Link href={"/hair-salon"}>
              <div className="dropItems">
                <p>WHO WE ARE</p>
              </div>
            </Link>
            <Link href={"/nails-salon"}>
              <div className="dropItems">
                <p>OUR EXPERTISE</p>
              </div>
            </Link>
            <Link href={"/facial"}>
              <div className="dropItems">
                <p>OUR FACULTY</p>
              </div>
            </Link>
            <Link href={"/beauty-essentials"}>
              <div className="dropItems">
                <p>OUR PARTNERSHIP</p>
              </div>
            </Link>
          </div>
        </li>
        <li>
          <Link href={"/service"}>DIPLOMA PROGRAM</Link>
          <MdKeyboardArrowDown className="menuIcon" />
          <div className="menuDrop">
            <Link href={"/hair-salon"}>
              <div className="dropItems">
                <p>EGGFREE DIPLOMA COURSE</p>
              </div>
            </Link>
            <Link href={"/nails-salon"}>
              <div className="dropItems">
                <p>CLASSIC DIPLOMA COURSE</p>
              </div>
            </Link>
          </div>
        </li>
        <li>
          <Link href={"/service"}>CERTIFICATION COURSES</Link>
          <MdKeyboardArrowDown className="menuIcon" />
          <div className="menuDrop">
            <Link href={"/hair-salon"}>
              <div className="dropItems">
                <p>EGGFREE CERTIFICATION COURSE</p>
              </div>
            </Link>
            <Link href={"/nails-salon"}>
              <div className="dropItems">
                <p>CLASSIC CERTIFICATION COURSE</p>
              </div>
            </Link>
            <Link href={"/facial"}>
              <div className="dropItems">
                <p>CAKE MASTERY</p>
              </div>
            </Link>
            <Link href={"/beauty-essentials"}>
              <div className="dropItems">
                <p>HOME BAKER'S CERTIFICATION COURSE</p>
              </div>
            </Link>
          </div>
        </li>
        <li>
          <Link href={"/service"}>SHORT COURSES</Link>
          <MdKeyboardArrowDown className="menuIcon" />
          <div className="menuDrop">
            <Link href={"/hair-salon"}>
              <div className="dropItems">
                <p>MASTER CLASSES</p>
              </div>
            </Link>
            <Link href={"/nails-salon"}>
              <div className="dropItems">
                <p>ONE DAY COURSE</p>
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
        <div className="respMenuScroll">
          <ul>
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
              <Link onClick={hideSideBar} href={"/service"}>
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
                    <Link onClick={hideSideBar} href={"/hair-salon"}>
                      WHO WE ARE
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/nails-salon"}>
                      OUR EXPERTISE
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/facial"}>
                      OUR FACULTY
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/beauty-essentials"}>
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
              <Link onClick={hideSideBar} href={"/service"}>
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
                    <Link onClick={hideSideBar} href={"/hair-salon"}>
                      EGGFREE DIPLOMA COURSE
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/nails-salon"}>
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
              <Link onClick={hideSideBar} href={"/service"}>
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
                    <Link onClick={hideSideBar} href={"/hair-salon"}>
                      EGGFREE CERTIFICATION COURSE
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/nails-salon"}>
                      CLASSIC CERTIFICATION COURSE
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/facial"}>
                      CAKE MASTERY
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/beauty-essentials"}>
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
              <Link onClick={hideSideBar} href={"/service"}>
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
                    <Link onClick={hideSideBar} href={"/hair-salon"}>
                      MASTER CLASSES
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/nails-salon"}>
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
