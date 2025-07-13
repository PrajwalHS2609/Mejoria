import React from "react";
import "./WhatsApp.css";
import Scent from "./../../../Images/SCENT Logo.png";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsApp = () => {
  return (
    <div className="whatsAppContainer">
      <FloatingWhatsApp
        phoneNumber="919742232700"
        accountName="SCENT"
        avatar={Scent} // Optional
        statusMessage="Typically replies within 5 min" // Optional
        chatMessage="🌸Hello from SCENT Salon!🌸
Pamper yourself with our exclusive beauty & wellness services! ✨
 From glow-enhancing facials to luxurious hair & spa treatments, we’ve got everything to make you shine. Book your appointment today and indulge in a little self-care! 💆‍♀💖
📍 Visit us or call us at  +91 9742232700 to book now! 🌸"
        placeholder="Type a message..." // Optional
      />
    </div>
  );
};

export default WhatsApp;
