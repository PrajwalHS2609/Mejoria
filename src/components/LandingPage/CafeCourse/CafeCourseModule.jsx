import React from "react";
import "./CafeCourse.css";
const CafeCourseModule = () => {
  const modules = [
    {
      id: 1,
      title: " 1. PATISSERIE MODULE",
      desp: " Dive deep into the world of gourmet desserts with this hands-on module covering 48 recipes.",
      points: [
        " Teatime Gourmet Cakes",
        " Gourmet Brownies",
        " Gourmet Cheesecakes",
        " Classic Desserts",
        "Cookies",
        " Gourmet Cupcakes and Muffins",
        " Gourmet Cake Slices",
      ],
    },
    {
      id: 2,
      title: " 2. BAKERY MODULE",
      desp: " Learn to bake a variety of breads and pastries in this hands-on module, encompassing 24 recipes.",
      points: [
        " Sandwich Style Basic Breads",
        " Savoury Breads",
        " Sweet Breads",
        " Puff Pastry",
        " Croissants and Danish",
        "Donuts",
      ],
    },
    {
      id: 3,
      title: " 3. SMALL BITES MODULE",
      desp: " Perfect your skills in creating delightful small savory items with this hands-on module, featuring 11 recipes.",
      points: [" Quiches and Tarts", " Lavash and Dips"],
    },
    {
      id: 4,
      title: "Module 4: Celebration Cakes",
      desp: " Discover the art of presentation and intricate dessert creation in this hands-on module, covering 12 recipes.",
      points: [" "],
    },
  ];
  return (
    <div className="cafeCourseModule-container">
      <div className="cafeCourseModule-heading">
        <h2>
          WHAT YOU WILL MASTER: <span> MODULE BREAKDOWN</span>{" "}
        </h2>
      </div>
      <div className="module-cards-wrapper">
        {modules.map((item, i) => (
          <div className="module-card-modern" key={i}>
            <h3 className="module-title">{item.title}</h3>
            <p className="module-desp">{item.desp}</p>
            <ul className="module-points">
              {item.points.map((point, idx) => (
                <li key={idx}>
                  <span className="module-icon">🍰</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CafeCourseModule;
