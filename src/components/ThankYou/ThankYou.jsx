"use client";
import React, { useEffect } from "react";
import "./ThankYou.css";

const ThankYou = () => {
  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-327194309/D84ICKuvtP4YEMWtgpwB",
      });
    }
  }, []);

  return (
    <div className="thankYou-container">
      <div className="thankYou-glow"></div>

      <div className="thankYou-card">
        <div className="thankYou-icon">🍰</div>
        <h1>Thank You</h1>
        <p>
          Submission successful! The Mejoria team will connect with you shortly.
          We look forward to having you join our vibrant pastry community and
          crafting sweet success together.
        </p>
        <a href="/" className="thankYou-button">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
