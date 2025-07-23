import React from "react";
import "./MasterClass.css";
import ChocolateMasterclass from "./../../Image/shortCourses/choclateMasterImg.png";
import CakeMasterclass from "./../../Image/shortCourses/MasterclassCAKE.png";
import FrenchPastry from "./../../Image/shortCourses/MasterclassFrenchPastry.png";
import WeddingCake from "./../../Image/shortCourses/weddingMasterClassImg.png";
import BreadMasterclass from "./../../Image/shortCourses/masterclassbreads.png";
import Image from "next/image";

const MasterClassCourse = () => {
  const masterclasses = [
    {
      title: "Chocolate Masterclass (3 days)",
      image: ChocolateMasterclass,
      price: 25000,
      originalPrice: 30000,
      label: "Sale!",
    },
    {
      title: "Cake Masterclass",
      image: CakeMasterclass,
      price: 25000,
      originalPrice: 30000,
      label: "Sale!",
    },
    {
      title: "French Pastry Masterclass (5 days)",
      image: FrenchPastry,
      price: 25000,
      originalPrice: 30000,
      label: "Sale!",
    },
    {
      title: "Wedding Cake Masterclass (3 days)",
      image: WeddingCake,
      price: 25000,
      originalPrice: 30000,
      label: "Sale!",
    },
    {
      title: "Bread Masterclass (3 days)",
      image: BreadMasterclass,
      price: 25000,
      originalPrice: 30000,
      label: "Sale!",
    },
  ];
  return (
    <section className="masterclass-section">
      <h2 className="masterclass-heading">Our Masterclass Short Courses :</h2>
      <div className="masterclass-grid">
        {masterclasses.map((cls, i) => (
          <div className="masterclass-card" key={i}>
            <div className="card-img-container">
              {cls.label && <span className="badge">{cls.label}</span>}
              <Image src={cls.image} alt={cls.title} />
            </div>
            <div className="card-body">
              <p className="category-label">Master Classes</p>
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

export default MasterClassCourse;
