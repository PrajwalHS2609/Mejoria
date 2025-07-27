import React from 'react';
import './ThankYou.css';

const ThankYou = () => {
  return (
    <div className="thankYou-container">
      <div className="thankYou-glow"></div>

      <div className="thankYou-card">
        <div className="thankYou-icon">🍰</div>
        <h1>Thank You</h1>
        <p>
          You’ve officially taken your first step into the magical world of baking.
          Our cake-making journey will be as delightful as a fresh slice of strawberry shortcake!
        </p>
        <a href="/" className="thankYou-button">Back to Home</a>
      </div>
    </div>
  );
};

export default ThankYou;
