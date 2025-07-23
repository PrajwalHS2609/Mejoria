import React from "react";
import "./OneDayCourse.css";
import BreadMasterclass from "./../../Image/shortCourses/masterclassbreads.png";
import TeaCakes from "./../../Image/shortCourses/TeacakeandTravelCake.png";
import EggFreeMacrons from "./../../Image/shortCourses/Macrons.png";
import PuffPastry from "./../../Image/shortCourses/PuffPastry.png";
import Brownies from "./../../Image/shortCourses/choclateMasterImg.png";
import Tarts from "./../../Image/shortCourses/Tarts.png";
import cheeseCake from "./../../Image/shortCourses/Cheescakes.png";
import Image from "next/image";

const OneDayCourseShort = () => {
  const masterclasses = [
    {
      title: "Bread Masterclass (3 days)",
      image: BreadMasterclass,
      price: 25000,
      originalPrice: 30000,
      label: "Sale!",
    },
    {
      title: "Tea Cakes and Travel Cakes",
      image: TeaCakes,
      price: 4200,
      originalPrice: 6000,
      label: "Sale!",
    },
    {
      title: "EggFree Macrons",
      image: EggFreeMacrons,
      price: 4000,
      originalPrice: 5000,
      label: "Sale!",
    },
    {
      title: "Puff Pastry",
      image: PuffPastry,
      price: 5000,
      originalPrice: 6000,
      label: "Sale!",
    },
    {
      title: "Brownies",
      image: Brownies,
      price: 4000,
      originalPrice: 5000,
      label: "Sale!",
    },
    {
      title: "Tarts",
      image: Tarts,
      price: 4000,
      originalPrice: 5000,
      label: "Sale!",
    },
    {
      title: "Cheese Cake",
      image: cheeseCake,
      price: 4500,
      originalPrice: 6000,
      label: "Sale!",
    },
  ];
  return (
    <section className="masterclass-section">
      <h2 className="masterclass-heading">Our One Day Short Courses</h2>
      <div className="masterclass-grid">
        {masterclasses.map((cls, i) => (
          <div className="masterclass-card" key={i}>
            <div className="card-img-container">
              {cls.label && <span className="badge">{cls.label}</span>}
              <Image src={cls.image} alt={cls.title} />
            </div>
            <div className="card-body">
              <p className="category-label">One Day Course</p>
              <h3 className="card-title">{cls.title}</h3>
              <p className="price">
                <span className="original">
                  ₹{cls.originalPrice.toLocaleString()}
                </span>{" "}
                <span className="discounted">
                  ₹{cls.price.toLocaleString()}
                </span>
              </p>
              <button className="add-btn">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OneDayCourseShort;
