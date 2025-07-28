import React from "react";
import "./ThankYou.css";

const ThankYou = () => {
  return (
    <div className="thankYou-container">
      <div className="thankYou-glow"></div>

      <div className="thankYou-card">
        <div className="thankYou-icon">🍰</div>
        <h1>Thank You</h1>
        <p>
          Your form has been successfully submitted. Our team at Mejoria
          International School of Pastries will get in touch with you shortly.
          We look forward to welcoming you into our world of pastry excellence!
        </p>
        <a href="/" className="thankYou-button">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
