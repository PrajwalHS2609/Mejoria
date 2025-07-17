import React from "react";
import "./ContactUs.css";
import ContactUsForm from "./ContactUsForm";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelopeOpenText } from "react-icons/fa";

const ContactUsAddress = () => {
  return (
    <div className="contactUs-AddressContainer">
      <div className="contactUs-AddressContent">
        <ContactUsForm />
      </div>
      <div className="contactUs-AddressContent">
        <div className="contactUs-AddressWrapper">
          <h3>Get In Touch</h3>
          <div className="contactUs-AddressItem">
            <span>
              <FiPhoneCall className="contactUs-addressIcon" />
            </span>
            <div className="contactUs-addressItemWrap">
              <h4>PHONE</h4>
              <b>
                <a href="">+91-87775 75992</a>
              </b>
            </div>
          </div>
          <div className="contactUs-AddressItem">
            {" "}
            <span>
              <FaEnvelopeOpenText className="contactUs-addressIcon" />
            </span>
            <div className="contactUs-addressItemWrap">
              <h4>EMAIL ID</h4>
              <b>
                <a href="">info@mejoria.in</a>
              </b>
            </div>
          </div>
          <div className="contactUs-AddressItem">
            {" "}
            <span>
              <IoLocationSharp className="contactUs-addressIcon" />
            </span>
            <div className="contactUs-addressItemWrap">
              <h4>ADDRESS</h4>
              <b>
                <a href="">
                  8, Dr.Sarat Banerjee Rd,Lake Market, Kalighat, Kolkata, West
                  Bengal 700029
                </a>
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsAddress;
