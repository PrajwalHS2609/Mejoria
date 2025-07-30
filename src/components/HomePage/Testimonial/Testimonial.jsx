"use client";
import React, { useState } from "react";
import "./Testimonial.css";
import { FaRegCirclePlay } from "react-icons/fa6";

const videos = {
  Yachika: "https://www.youtube.com/embed/MieajCjCj-8",
  Akanksha: "https://www.youtube.com/embed/ip9OnKK5GtU",
  Apeksha: "https://www.youtube.com/embed/FZccdKsLD00",
  Shriem: "https://www.youtube.com/embed/XUXHsK35cJU",
  Sachi: "https://www.youtube.com/embed/4nhcsy4b3Ko",
  Laxmi: "https://www.youtube.com/embed/ZDIzsOE63vA",
  Tirtha: "https://www.youtube.com/embed/OLi45-c0ORw",
  Baisakhee: "https://www.youtube.com/embed/KDkzisifu0Q",
  Tenzing: "https://www.youtube.com/embed/Gw8zBIdme1A",
};
const Testimonial = () => {
  const [activeVideo, setActiveVideo] = useState("Yachika");

  return (
    <div className="testimonial-container" >
      <h2>
        <span>Success Speaks</span> Louder Than Promises
      </h2>
      <br />
      <div className="testimonial-content">
        <div className="testimonial-vidWrapper">
          <iframe
            src={videos[activeVideo]}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="testimonial-content">
        <div className="testimonial-icons">
          {Object.keys(videos).map((videoKey) => (
            <div
              key={videoKey}
              className={`testimonial-item ${
                activeVideo === videoKey ? "active" : ""
              }`}
              onClick={() => setActiveVideo(videoKey)}
            >
              <FaRegCirclePlay className="testimonial-icon" />
              <p>{videoKey}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
