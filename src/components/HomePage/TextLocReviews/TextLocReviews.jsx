"use client";
import React, { useEffect } from "react";
import "./TextLocReviews.css";
import { FaStar } from "react-icons/fa";

const TextLocReviews = () => {
  // useEffect(() => {
  //   // Check if script already exists
  //   if (
  //     !document.querySelector(
  //       'script[src="https://static.elfsight.com/platform/platform.js"]'
  //     )
  //   ) {
  //     const script = document.createElement("script");
  //     script.src = "https://static.elfsight.com/platform/platform.js";
  //     script.async = true;
  //     document.body.appendChild(script);
  //   }
  // }, []);
  return (
    <div className="reviews-wrapper">
      <div className="reviews-container">
        {/* <div
          className="elfsight-app-d65eb19a-ad3e-4e0a-be1a-fe829d804009"
          data-elfsight-app-lazy
        ></div> */}
        <div>
        <iframe
          src="https://widgets.sociablekit.com/google-reviews/iframe/25577835"
          frameborder="0"
          width="100%"
          height="1000"
        ></iframe>
      </div>
      </div>
    </div>
  );
};

export default TextLocReviews;
