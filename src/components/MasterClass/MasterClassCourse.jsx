import React from "react";
import "./MasterClass.css";
const MasterClassCourse = () => {
  const masterclasses = [
    {
      title: "Chocolate Masterclass (3 days)",
      image:
        "https://mejoria.in/wp-content/uploads/2025/01/masterclassChocolate-ezgif.com-resize-600x600.webp",
      price: 25000,
      originalPrice: 30000,
      label: "Sale!",
    },
    {
      title: "Cake Masterclass",
      image:
        "https://mejoria.in/wp-content/uploads/2025/01/MasterclassCAKE-ezgif.com-optiwebp-2-600x600.webp",
      price: 25000,
      originalPrice: 30000,
      label: "Sale!",
    },
    {
      title: "French Pastry Masterclass (5 days)",
      image:
        "https://mejoria.in/wp-content/uploads/2025/01/MasterclassFrenchPastry-ezgif.com-resize-600x600.webp",
      price: 25000,
      originalPrice: 30000,
      label: "Sale!",
    },
    {
      title: "Wedding Cake Masterclass (3 days)",
      image:
        "https://mejoria.in/wp-content/uploads/2025/01/ezgif.com-resize-600x600.webp",
      price: 25000,
      originalPrice: 30000,
      label: "Sale!",
    },
    {
      title: "Wedding Cake Masterclass (3 days)",
      image:
        "https://mejoria.in/wp-content/uploads/2025/01/masterclassbreads-ezgif.com-optiwebp-1-600x600.webp",
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
              <img src={cls.image} alt={cls.title} />
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
