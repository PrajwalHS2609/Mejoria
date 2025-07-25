import React from "react";
import "./EggFreeDiploma.css";
import eggFreeCourseImg1 from "@/Image/DiplomaCourse/eggFreeDiplomaCourseImg1.jpg";
import eggFreeCourseImg2 from "@/Image/DiplomaCourse/eggFreeDiplomaCourseImg2.jpg";
import eggFreeCourseImg3 from "@/Image/DiplomaCourse/eggFreeDiplomaCourseImg3.jpg";
import Image from "next/image";
const EggFreeDiplomaFeature = () => {
  const modules = [
    {
      image: eggFreeCourseImg1,
      title: "FOOD SAFETY & PERSONAL HYGIENE",
      description:
        "Food safety is a crucial skill to learn before baking. Gain knowledge on proper food handling, hygiene practices, and safety guidelines to ensure a clean, safe, & successful baking experience.",
    },
    {
      image: eggFreeCourseImg2,
      title: "BASICS OF BAKING: BREADS & COOKIES",
      description:
        "Bread & cookies blend culinary and baking skills. This module explores global bread varieties, offering hands-on experience and valuable insights into the bread industry’s business aspects.",
    },
    {
      image: eggFreeCourseImg3,
      title: "EGG THEORY & FRENCH PASTRY",
      description:
        "Eggs are essential in baking and pastry. This hands-on class covers recipes for desserts, afternoon tea, egg-less options, seasonal flavors, and stunning presentations with classic cakes and tortes.",
    },
  ];

  return (
    <div className="eggFreeFeature-container">
      <div className="eggFreeFeature-content">
        <h2>Course Features</h2>
      </div>
      <div className="eggFreeFeature-content">
        <div className="module-cards-wrapper">
          {modules.map((item, i) => (
            <div className="feature-module-card-modern" key={i}>
              <div className="module-card-img-container">
                {" "}
                <Image
                  src={item.image}
                  alt={item.title}
                  className="module-image"
                />
              </div>
              <h4 className="module-title">{item.title}</h4>
              <p className="module-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EggFreeDiplomaFeature;
