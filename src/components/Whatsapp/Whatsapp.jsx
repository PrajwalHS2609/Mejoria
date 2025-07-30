"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import "./Whatsapp.css";
import logo from "@/Image/whatsapp.png";
const Whatsapp = () => {
  return (
    <div className="whatsAppContainer">
      {/* <div className="whatsAppContent">Hello</div> */}
      {/* <a href="https://wa.me/919742232700?text=Hello" >
        <img src={whatsApp} alt="" />
      </a> */}
      <FloatingWhatsApp
        phoneNumber="918777575992"
        accountName="Mejoria"
        avatar={logo.src} // Optional
        statusMessage="Typically replies within 5 min" // Optional
        chatMessage="🍰 Welcome to Mejoria! Your sweet baking journey starts now with our expert chefs" // Optional
        placeholder="Type a message..." // Optional
      />
    </div>
  );
};

export default Whatsapp;
