import React from "react";
import "./ClassicCertification.css";
import { MdContentCopy } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { FaCameraRetro } from "react-icons/fa";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaUserLock } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";

const ClassicCertificationFromCourse = () => {
  const card = [
    {
      id: 1,
      icon: <MdContentCopy className="fromCourse-cardIco" />,
      title: "Expand Your Horizons",
      desp: "Explore eggless baking, French pastries, cookies, and master baking techniques.",
    },
    {
      id: 2,
      icon: <FaUsers className="fromCourse-cardIco" />,
      title: "Expert Mentorship",
      desp: "Learn from expert chefs with 14 years' experience, mentoring 10,000+ students.",
    },
    {
      id: 3,
      icon: <TbCertificate className="fromCourse-cardIco" />,
      title: "Certification",
      desp: "Become a certified an expert baker, chocolatier, with City & Guilds (Landon)",
    },
    {
      id: 4,
      icon: <FaCameraRetro className="fromCourse-cardIco" />,
      title: "Beyond Baking",
      desp: "Discover food photography, home bakery essentials, & how to build a unique brand.",
    },
    {
      id: 5,
      icon: <HiMiniComputerDesktop className="fromCourse-cardIco" />,
      title: "Workshops & Seminars",
      desp: "Enhance skills through interactive workshops and insightful seminars.",
    },
    {
      id: 6,
      icon: <FaUserLock className="fromCourse-cardIco" />,
      title: "Lockers",
      desp: "Secure your belongings with personal lockers for hassle-free access.",
    },
    {
      id: 7,
      icon: <FaBookOpen className="fromCourse-cardIco" />,
      title: "Library",
      desp: "Explore extensive resources and references for unlimited learning opportunities.",
    },
    {
      id: 8,
      icon: <FaChalkboardTeacher className="fromCourse-cardIco" />,
      title: "Counseling",
      desp: "Receive personalized guidance to achieve academic and career success.",
    },
    {
      id: 9,
      icon: <FaUserGraduate className="fromCourse-cardIco" />,
      title: "Placement & Internship",
      desp: "Kickstart your career with assured placements and internships.",
    },
    {
      id: 10,
      icon: <FaUsersCog className="fromCourse-cardIco" />,
      title: "Exclusive Networking",
      desp: "Alumni Networking: Connect with alumni to expand opportunities and gain insights.",
    },
  ];
  return (
    <div className="serviceWhyMainContainer">
      <div className="fromCourse-container">
        <div className="fromCourse-content">
          <h2>Get more from this course</h2>
        </div>
        <div className="fromCourse-content">
          {card.map((x) => (
            <div className="fromCourse-card" key={x.id}>
              <div className="icon-circle">
                {x.icon}
                {/* <Image src={} alt=""/> */}
              </div>
              <h3 className="course-title">{x.title}</h3>
              <p className="course-desc">{x.desp}</p>
              {/* <button className="learn-btn">Learn More</button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassicCertificationFromCourse;
