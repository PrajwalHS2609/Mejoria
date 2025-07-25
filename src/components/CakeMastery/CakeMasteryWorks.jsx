"use client";
import React, { useState } from "react";
import "./CakeMastery.css";
import workImg1 from "@/Image/works/workImg1.jpeg";
import workImg2 from "@/Image/works/workImg2.jpeg";
import workImg3 from "@/Image/works/workImg3.jpeg";
import workImg4 from "@/Image/works/workImg4.jpeg";
import workImg5 from "@/Image/works/workImg5.jpeg";
import workImg6 from "@/Image/works/workImg6.jpeg";
import workImg7 from "@/Image/works/workImg7.jpeg";
import workImg8 from "@/Image/works/workImg8.jpeg";
import Image from "next/image";

const CakeMasteryWorks = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const recentWorks = [
    workImg1,
    workImg2,
    workImg3,
    workImg4,
    workImg5,
    workImg6,
    workImg7,
    workImg8,
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
            <Image src={img} alt={`Work ${idx + 1}`} className="work-img" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <span className="close-btn" onClick={() => setSelectedImage(null)}>
            &times;
          </span>
          <Image src={selectedImage} alt="Full View" className="lightbox-img" />
        </div>
      )}
    </section>
  );
};

export default CakeMasteryWorks;
