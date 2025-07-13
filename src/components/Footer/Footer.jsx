import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

import TSS from "@/Image/TSS.png";
import Link from "next/link";
import Image from "next/image";
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
              <Link href={"/hair-salon"}>Home</Link>
            </div>
            <div className="footerTxt">
              <Link href={"/nails-salon"}>About Mejoria</Link>
            </div>
            <div className="footerTxt">
              <Link href={"/facial"}>Certification Course</Link>
            </div>
            <div className="footerTxt">
              <Link href={"/beauty-essentials"}>Diploma Program</Link>
            </div>
            <div className="footerTxt">
              <Link href={"/spa"}>Courses</Link>
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
              <Link href={"/terms"}>Returns & Refund Policy</Link>
            </div>
            <div className="footerTxt">
              <Link href={"/terms"}>Cancellation Policy</Link>
            </div>
            <div className="footerTxt">
              <Link href={"/terms"}>Payment Mode</Link>
            </div>
            <div className="footerTxt">
              <Link href={"/terms"}>Pricing Policy</Link>
            </div>
            <div className="footerTxt">
              <Link href={"/terms"}>Shipping</Link>
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
                <a href="https://www.instagram.com/scentlifestyle/">
                  <FaInstagram className="footerIcon" />
                </a>
              </div>
              <div className="block">
                <a href="https://www.facebook.com/ScentSalonSpas/">
                  <FaFacebook className="footerIcon" />
                </a>
              </div>
              <div className="block">
                <a href="https://in.pinterest.com/scentlifestyle/">
                  <FaPinterest className="footerIcon" />
                </a>
              </div>
            </div>
            <div className="innerSocialBlocks">
              <div className="block">
                <a href="https://twitter.com/scentlifestyle">
                  <FaXTwitter className="footerIcon" />
                </a>
              </div>
              <div className="block">
                <a href="https://www.youtube.com/@scentlifestyle">
                  <FaYoutube className="footerIcon" />
                </a>
              </div>
              <div className="block">
                <a href="https://scent.zenoti.com/webstoreNew/services">
                  <FaWhatsapp className="footerIcon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerContent2">
        <div className="footerCopy">
          <div className="footerCopy1">
            <p>Mejoria©Copyright 2025</p>
          </div>
          <div className="footerCopy2">
            <a href="https://tryseoservices.com/">
              <Image src={TSS} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
