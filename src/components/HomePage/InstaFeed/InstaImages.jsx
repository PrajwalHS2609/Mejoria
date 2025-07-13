"use client"
import React from "react";
import "./InstaFeed.css";
import ReactPlayer from "react-player";

const InstaImages = (props) => {
  return (
    <div className="instaFeedVidContainer">
      <ReactPlayer url={props.vid} />
    </div>
  );
};

export default InstaImages;
