import React from "react";
import { MdGroupAdd } from "react-icons/md";
import { GiAtomicSlashes } from "react-icons/gi";
import { LuFactory } from "react-icons/lu";
import { FaBookOpen } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { FaGlobeAfrica } from "react-icons/fa";
import { LiaUserEditSolid } from "react-icons/lia";
import { ImUsers } from "react-icons/im";
import { LiaUserAstronautSolid } from "react-icons/lia";

import "./WhyChoose.css";
const WhyChoose = () => {
  const card = [
    {
      id: 1,
      icon: <ImUsers className="whyChoose-cardIco" />,
      title: "Best Mentorship",
      desp: "Expert educators with industry experience provide valuable insights for students.",
    },
    {
      id: 2,
      icon: <LiaUserEditSolid className="whyChoose-cardIco" />,
      title: "Career-Focused Training",
      desp: "Practical skills and knowledge equip students to succeed in pastry careers.",
    },
    {
      id: 3,
      icon: <LuFactory className="whyChoose-cardIco" />,
      title: "Cutting-Edge Facilities",
      desp: "Our facilities inspire innovation, hands-on learning, and career success.",
    },
    {
      id: 4,
      icon: <FaGlobeAfrica className="whyChoose-cardIco" />,
      title: "Global Recognition",
      desp: "City & Guilds affiliation boosts international career prospects in pastry.",
    },
    {
      id: 5,
      icon: <LiaUserAstronautSolid className="whyChoose-cardIco" />,
      title: "Personalized Support",
      desp: "Tailored guidance and resources help students achieve their skill with full potential.",
    },
    {
      id: 6,
      icon: <FaBookOpen className="whyChoose-cardIco" />,
      title: "Best Curriculum",
      desp: "A diverse program ensures students master essential pastry and baking skills.",
    },
    {
      id: 7,
      icon: <GiAtomicSlashes className="whyChoose-cardIco" />,
      title: "Industry Network",
      desp: "Access internships, placements, and collaborations with renowned pastry professionals.",
    },
    {
      id: 8,
      icon: <GrUserAdmin className="whyChoose-cardIco" />,
      title: "Innovation and Artistry",
      desp: "We inspire students to create innovative, unique, and memorable masterpieces.",
    },
  ];
  return (
    <div className="serviceWhyMainContainer">
      <div className="whyChoose-container">
        <div className="whyChoose-content">
          <h2>Why Choose Mejoria</h2>
        </div>
        <div className="whyChoose-content">
          {card.map((x) => (
            <div className="whyChoose-card" key={x.id}>
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

export default WhyChoose;
