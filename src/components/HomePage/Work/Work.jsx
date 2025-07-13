import React from "react";
import "./Work.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import homeWorkImg from "./../../../Images/homeWorkImg.png";
const Work = () => {
  return (
    <div className="workContainer">
      <img src={homeWorkImg} alt="homeWorkImg" loading="lazy" />
      <div className="workContent">
        <div className="innerWorkContent">
          <div className="workContentTxt1">
            <h2>
              <span>Our</span> work
            </h2>
          </div>
          <div className="workContentTxt2">
            <p>
              Refining our expertise to cater to your desires at every stage of
              your experience, our hair and beauty treatments offer a serene and
              pleasurable retreat from the everyday. Beginning with a
              personalized consultation with our talented team of stylists and
              technicians, to utilizing top-tier, award-winning, and ethical
              products, to the ultimate finishing touch; we are dedicated to
              indulging you during your time at SCENT.
            </p>
          </div>
          <div className="workContentTxt3">
            <Link to="/service">
              {" "}
              <p>VIEW OUR WORK </p>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="workIcon"
              ></FontAwesomeIcon>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
