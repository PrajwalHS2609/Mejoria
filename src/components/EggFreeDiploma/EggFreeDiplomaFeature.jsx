import React from "react";
import "./EggFreeDiploma.css";
const EggFreeDiplomaFeature = () => {
  const modules = [
    {
      image:
        "https://mejoria.in/wp-content/uploads/2024/11/pexels-elle-hughes-2696064.jpg",
      title: "FOOD SAFETY & PERSONAL HYGIENE",
      description:
        "Food safety is a crucial skill to learn before baking. Gain knowledge on proper food handling, hygiene practices, and safety guidelines to ensure a clean, safe, & successful baking experience.",
    },
    {
      image:
        "https://mejoria.in/wp-content/uploads/2024/11/pexels-vaibhav-jadhav-32184671.jpg",
      title: "BASICS OF BAKING: BREADS & COOKIES",
      description:
        "Bread & cookies blend culinary and baking skills. This module explores global bread varieties, offering hands-on experience and valuable insights into the bread industry’s business aspects.",
    },
    {
      image:
        "https://mejoria.in/wp-content/uploads/2024/11/pexels-rathaphon-nanthapreecha-6809019.jpg",
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
            <div className="module-card-modern" key={i}>
              <div className="module-card-img-container">
                {" "}
                <img
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
