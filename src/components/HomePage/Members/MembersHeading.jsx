import React from "react";
import "./Members.css";
const MembersHeading = () => {
  return (
    <div className="headingContainer">
      <div className="firstMemberHeading">
        <h4>Meet our</h4>
      </div>
      <div className="secondMemberHeading">
        <h4>
          Creative <span>Team</span>
        </h4>
        <div className="memberUnderline"></div>
      </div>
    </div>
  );
};

export default MembersHeading;
