"use client";
import React, { useState } from "react";
import "./CakeMastery.css";

const CakeMasteryWorks = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const recentWorks = [
    "https://mejoria.in/wp-content/uploads/2024/11/WhatsApp-Image-2023-10-30-at-1.59.32-PM-768x802-1.jpeg",
    "https://mejoria.in/wp-content/uploads/2024/11/WhatsApp-Image-2023-10-30-at-1.59.33-PM-1-768x1024-1.jpeg",
    "https://mejoria.in/wp-content/uploads/2024/11/WhatsApp-Image-2023-10-30-at-1.59.33-PM-768x1152-1.jpeg",
    "https://mejoria.in/wp-content/uploads/2024/11/WhatsApp-Image-2023-10-30-at-2.00.33-PM-768x1024-1.jpeg",
    "https://mejoria.in/wp-content/uploads/2024/11/WhatsApp-Image-2023-10-28-at-5.37.24-PM-768x1024-2.jpeg",
    "https://mejoria.in/wp-content/uploads/2024/11/WhatsApp-Image-2023-10-30-at-2.02.01-PM-768x1023-1.jpeg",
    "https://mejoria.in/wp-content/uploads/2024/11/WhatsApp-Image-2023-10-30-at-2.06.56-PM-768x1024-1.jpeg",
    "https://mejoria.in/wp-content/uploads/2024/11/WhatsApp-Image-2023-10-30-at-2.11.15-PM-768x1365-1.jpeg",
  ];

  return (
    <section className="recent-works">
      <h2 className="recent-works-title">Our Recent Works</h2>
      <div className="recent-works-grid">
        {recentWorks.map((img, idx) => (
          <div
            className="work-card"
            key={idx}
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} alt={`Work ${idx + 1}`} className="work-img" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <span className="close-btn" onClick={() => setSelectedImage(null)}>
            &times;
          </span>
          <img src={selectedImage} alt="Full View" className="lightbox-img" />
        </div>
      )}
    </section>
  );
};

export default CakeMasteryWorks;
