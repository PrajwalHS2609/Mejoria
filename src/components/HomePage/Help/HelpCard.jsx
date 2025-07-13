import React from "react";
import "./HelpNearYou1.css";
import { FaPhone } from "react-icons/fa";

import Link from "next/link";

const HelpCard = (props) => {
  return (
    <>
      <div className="helpCardContainer">
        <img className="helpImg" src={props.image} alt="" />
        <div className="helpCover">
          <div className="helpCity">
            <h3>
              <Link href={props.link}>{props.city}</Link>
            </h3>
            <p>
              <FaPhone className="menuIcon" />: {props.no}
            </p>
          </div>
        </div>
      </div>
      <div className="respHelpCardContainer">
        <img className="respImage" src={props.image} alt="" />
        <div className="respHelpCardCover">
          <h3>
            <Link href={props.link}>{props.city}</Link>{" "}
          </h3>
          <p>
            <FontAwesomeIcon
              icon={faPhone}
              className="menuIcon"
            ></FontAwesomeIcon>
            {props.no}
          </p>
        </div>
      </div>
    </>
  );
};

export default HelpCard;
