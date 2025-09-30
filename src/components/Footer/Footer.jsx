import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";

import Link from "next/link";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerContent1">
        {/* <div className="footerItem" >
          <img src="https://mejoria.in/wp-content/uploads/2024/11/Mejoria-Logo-ver2-blck.png" alt="" />
         </div> */}
        <div className="footerItem1" id="footerItem1">
          <div className="footerTxt1">
            <h3>
              <Link href={"/service"}>Pages</Link>
            </h3>
          </div>
          <div className="footerTxt2">
            <div className="footerTxt">
              <Link href={"/"}>Home</Link>
            </div>
            <div className="footerTxt">
              <Link href={"/"}>About Mejoria</Link>
            </div>
            <div className="footerTxt">
              <Link href={"/"}>Certification Course</Link>
            </div>
            <div className="footerTxt">
              <Link href={"/"}>Diploma Program</Link>
            </div>
            <div className="footerTxt">
              <Link href={"/"}>Courses</Link>
            </div>
          </div>
        </div>
        {/* <div className="footerItem1" id="footerItem2">
          <div className="footerTxt1">
            <h3>
              <Link href={"/about-us"}>About us</Link>
            </h3>
          </div>
          <div className="footerTxt2">
            <div className="footerTxt">
              <Link href={"/philosophy"}>Philosophy</Link>
            </div>
            <div className="footerTxt">
              <Link href={"/crew"}>Style Crew</Link>
            </div>
            <div className="footerTxt">
              <Link href={"/myself"}>All About Myself</Link>
            </div>
          </div>
        </div> */}
        {/* <div className="footerItem1" id="footerItem4">
          <div className="footerTxt1">
            <h3>Work</h3>
          </div>
          <div className="footerTxt2">
            <div className="footerTxt">
              <Link href={"/salon-membership"}>Membership</Link>
            </div>
            <div className="footerTxt">
              <Link href={"/shop"}>Shops</Link>
            </div>
            <div className="footerTxt">
              <Link href={"/franchise"}>Franchise</Link>
            </div>
          </div>
        </div> */}
        <div className="footerItem1" id="footerItem5">
          <div className="footerTxt1" id="footerTxtTerms">
            <h3>
              <Link href={"/terms"}>Links</Link>{" "}
            </h3>
          </div>
          <div className="footerTxt2">
            <div className="footerTxt">
              <Link href={"/terms"}>Terms & Conditions</Link>
            </div>
            <div className="footerTxt">
              <Link href={"/terms"}>Returns & Refund Policy</Link>
            </div>
            <div className="footerTxt">
              <Link href={"/terms"}>Pricing Policy</Link>
            </div>
            <div className="footerTxt">
              <Link href={"/terms"}>Shipping Policy</Link>
            </div>
          </div>
        </div>
        <div className="footerItem1" id="footerItem6">
          <div className="footerTxt1" id="footerTxtTerms">
            <h3>
              <Link href={"/contact-us"}>Contact Us</Link>{" "}
            </h3>
          </div>
          <div className="footerTxt2">
            <div className="footerTxt" id="footerContact-content">
              <FiPhoneCall className="contact-icon" />
              <a href="tel:7019925059">+91-7019925059</a>
            </div>
            <div className="footerTxt" id="footerContact-content">
              <IoMailOutline className="contact-icon" />
              <a href="mailto:info@mejoria.in">info@mejoria.in</a>
            </div>
            <div className="footerTxt" id="footerContact-content">
              <GrLocation className="contact-icon" />
              <a
                href={
                  "https://www.google.com/maps/place/Mejoria+International+School+of+Pastry/@22.5143114,88.3481952,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02713c611b60cd:0x7c28c220839572ed!8m2!3d22.5143065!4d88.3507701!16s%2Fg%2F11v19sbxgd?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D"
                }
              >
                8, Dr.Sarat Banerjee Rd,Lake Market, Kalighat, Kolkata, West
                Bengal 700029
              </a>
            </div>
          </div>
        </div>
        <div className="footerItem1" id="footerItem3">
          <div className="footerTxt1" id="socialTxt">
            <h3>Social Media</h3>
          </div>
          <div className="socialBlocks">
            <div className="innerSocialBlocks">
              <div className="block">
                <a href="https://www.instagram.com/mejoriabaking/">
                  <FaInstagram className="footerIcon" />
                </a>
              </div>
              <div className="block">
                <a href="https://www.facebook.com/Mejoriabaking">
                  <FaFacebook className="footerIcon" />
                </a>
              </div>
              <div className="block">
                <a href="https://www.youtube.com/@MejoriA">
                  <FaYoutube className="footerIcon" />
                </a>
              </div>
            </div>
            {/* <div className="innerSocialBlocks">
              <div className="block">
                <a href="https://in.pinterest.com/">
                  <FaPinterest className="footerIcon" />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="footerContent2">
        <div className="footerCopy">
          <div className="footerCopy1">
            <p> Managed By Genesis Creative House</p>
          </div>
        </div>
        <div className="footerCopy">
          <div className="footerCopy1">
            <p>Mejoria©Copyright 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
