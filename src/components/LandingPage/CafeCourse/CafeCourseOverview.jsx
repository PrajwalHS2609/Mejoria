import React from "react";
import "./CafeCourse.css";
import { FaClock } from "react-icons/fa6";
import { FaBirthdayCake } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

const CafeCourseOverview = () => {
  return (
    <div className="cafeCourseOverview-container">
      <div className="cafeCourseOverview-content">
        <span className="tag">CAFÉ KRAFT CERTIFICATE COURSE</span>

        <h2>UNLOCK YOUR CULINARY POTENTIAL!</h2>
        <p>
          {" "}
          Join our comprehensive &Cafe Craft& course and master the art of
          creating exquisite patisserie, bakery items, and plated desserts.
          Designed for aspiring bakers and chefs, this program offers extensive
          hands-on experience and a wide array of recipes.
        </p>
        <h3>Course Highlights</h3>
        <ul>
          <li>
            <FaCalendarDays className="cafeCourseOverview-highlightIco" />
            <h5>
              Duration: <b>4 Weeks</b>
            </h5>
          </li>
          <li>
            <FaClock className="cafeCourseOverview-highlightIco" />
            <h5>
              Total Hours: <b>80+ Hours</b>
            </h5>
          </li>
          <li>
            <FaBirthdayCake className="cafeCourseOverview-highlightIco" />
            <h5>
              Number of Recipes: <b>90+</b>
            </h5>
          </li>
        </ul>
        <div class="special-feature-box">
          <h3>🍰 Special Feature</h3>
          <p>
            All our desserts are <br />
            <span class="highlight">Egg-free</span>,
            <span class="highlight">Gelatin-free</span>, and
            <span class="highlight">100% Vegetarian 🌿</span>
          </p>
        </div>
      </div>
      <div className="cafeCourseOverview-content">
        <img
          src="https://images.pexels.com/photos/31321859/pexels-photo-31321859.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default CafeCourseOverview;
