import React from "react";
import "./ServiceWhy.css";
import { MdGroupAdd } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import { FaGlobeAfrica } from "react-icons/fa";
import { PiCirclesThreePlusBold } from "react-icons/pi";
import { ImUsers } from "react-icons/im";

const ServiceWhyMain = () => {
  const card = [
    {
      id: 1,
      icon: <MdGroupAdd className="fromCourse-cardIco" />,
      title: "Hands-On Baking Classes",
      desp: "Gain practical experience with interactive, hands-on sessions to perfect your baking skills.",
    },
    {
      id: 2,
      icon: <PiCirclesThreePlusBold className="fromCourse-cardIco" />,
      title: "Small Batch Sizes",
      desp: "We maintain small class sizes to ensure personalized attention and tailored guidance for every student.",
    },
    {
      id: 3,
      icon: <ImUsers className="fromCourse-cardIco" />,
      title: "Expert Guidance",
      desp: "Learn from expert chefs with over 15 years of experience in the pastry and baking industry.",
    },
    {
      id: 4,
      icon: <IoLogoGameControllerB className="fromCourse-cardIco" />,
      title: "Cutting-Edge Techniques",
      desp: "Stay ahead with exposure to the latest and most modern pastry-making methods.",
    },
    {
      id: 5,
      icon: <FaUsers className="fromCourse-cardIco" />,
      title: "Business Strategy Skill Development",
      desp: "We teach both baking and business skills for entrepreneurial success.",
    },
    {
      id: 6,
      icon: <FaBookOpen className="fromCourse-cardIco" />,
      title: "Philosophy of Excellence",
      desp: "Master the craft through our 3 Ps training approach—Practice, Patience, and Perseverance.",
    },
    {
      id: 7,
      icon: <FaChalkboardUser className="fromCourse-cardIco" />,
      title: "After-Class Support & Mentoring",
      desp: "Continue your learning journey with ongoing mentoring and support even after class hours.",
    },
    {
      id: 8,
      icon: <FaGlobeAfrica className="fromCourse-cardIco" />,
      title: "Global Perspective",
      desp: "Training that integrates global culinary trends and practices to keep you at the forefront of the industry.",
    },
  ];
  return (
    <div className="serviceWhyMainContainer">
      <div className="fromCourse-container">
        <div className="fromCourse-content">
          <h2>Our Expertise</h2>
        </div>
        <div className="fromCourse-content">
          {card.map((x) => (
            <div className="fromCourse-card" key={x.id}>
              <div className="icon-circle">
                {x.icon}
                {/* <Image src={} alt=""/> */}
              </div>
              <h3 className="from-course-title">{x.title}</h3>
              <p className="course-desc">{x.desp}</p>
              {/* <button className="learn-btn">Learn More</button> */}
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default ServiceWhyMain;
