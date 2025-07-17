import React from "react";
import "./Expertise.css";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
const CoursePrice = () => {
  const priceCard = [
    {
      id: 1,
      title: "WEEKEND COURSE (8 WEEKENDS)",
      type: "Egg",
      date: "December 7, 2024",
      time: "10 AM - 4 PM",
      priceBef: "₹60,000.00",
      priceAft: "₹ 48,000.00",
    },
    {
      id: 2,
      title: "CROISSANT",
      type: "Eggless",
      date: "December 12, 2024",
      time: "10 AM - 4 PM",
      priceBef: "₹7,000.00",
      priceAft: "₹ 6,000.00",
    },
        {
      id: 3,
      title: "PUFF PASTRY",
      type: "Egg",
      date: "December 11, 2024",
      time: "10 AM - 4 PM",
      priceBef: "₹5,000.00",
      priceAft: "₹ 4,000.00",
    },
  ];
  return (
    <div className="coursePrice-container">
      <div className="coursePrice-content">
        <h2>Upcoming Short courses</h2>
      </div>
      <div className="coursePrice-content">
        {priceCard.map((x) => (
          <div className="course-card" key={x.id}>
            <h3>{x.title}</h3>

            <div className="course-card-tags">
              <span>
                <FaCheckCircle /> {x.type}
              </span>
              <span>
                <FaCheckCircle /> Hand-on, in Person
              </span>
            </div>

            <div className="course-card-info">
              <div>
                <FaCalendarAlt className="course-card-icon" />
                {x.date}
              </div>
              <div>
                <FaClock className="course-card-icon" />
                {x.time}
              </div>
              <div>
                <FaMapMarkerAlt className="course-card-icon" />
                Mejoria Institute, Kolkata
              </div>
            </div>

            <div className="course-card-pricing">
              <span className="old-price">{x.priceBef}</span>
              <span className="new-price">{x.priceAft}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePrice;
