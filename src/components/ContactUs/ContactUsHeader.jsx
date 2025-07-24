import React from "react";
import "./ContactUs.css";
import contactUsBanner from "@/Image/Img/1.jpg";
import Image from "next/image";
const ContactUsHeader = () => {
  return (
    <div className="contactUs-headerContainer">
      <div className="contactUs-headerCover">
        <h2>Contact Us</h2>
      </div>
      <Image src={contactUsBanner} alt="ContactUs Banner" />
    </div>
  );
};

export default ContactUsHeader;
