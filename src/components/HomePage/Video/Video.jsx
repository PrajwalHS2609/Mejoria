import React from "react";
import "./Video.css";
// import scentVid from "./../../../video/ScentHomeVid.mp4";
import { FaArrowDown } from "react-icons/fa6";
const Video = () => {
  return (
    <div className="vidContainer" id="home">
      <div className="vid-wrapper">
        <div className="vid-content" id="vid-content1">
          <video className="" src="/videos/vid1.mp4" autoPlay loop muted />
        </div>
        <div className="vid-content" id="vid-content1">
          <video className="" src="/videos/vid2.mp4" autoPlay loop muted />
        </div>
        <div className="vid-content" id="vid-content2">
          <video className="" src="/videos/vid3.mp4" autoPlay loop muted />
        </div>
        <div className="vid-content" id="vid-content1">
          <video className="" src="/videos/vid4.mp4" autoPlay loop muted />
        </div>
        <div className="vidHeader-cover">
          <h2>
            Eastern India's Only <br /> Baking School In Kolkata
          </h2>
        </div>
      </div>

      {/* <div className="vidTxt">
        <a href="">
          {" "}
          <button>Apply Now</button>
        </a>
        <FaArrowDown className="vidIcon" />
      </div> */}
      {/* <div className="vidUnderline"></div> */}
    </div>
  );
};

export default Video;
