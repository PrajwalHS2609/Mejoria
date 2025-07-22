import React from "react";
import "./OneDayCourse.css"
const OneDayCourseShort = () => {
  const masterclasses = [
    {
      title: "Bread Masterclass (3 days)",
      image:
        "https://mejoria.in/wp-content/uploads/2025/01/masterclassbreads-ezgif.com-optiwebp-1-600x600.webp",
      price: 25000,
      originalPrice: 30000,
      label: "Sale!",
    },
    {
      title: "Tea Cakes and Travel Cakes",
      image:
        "https://mejoria.in/wp-content/uploads/2024/12/TeacakeandTravelCake1-ezgif.com-optiwebp-600x600.webp",
      price: 4200,
      originalPrice: 6000,
      label: "Sale!",
    },
    {
      title: "EggFree Macrons",
      image:
        "https://mejoria.in/wp-content/uploads/2024/12/Macrons-ezgif.com-optiwebp-600x600.webp",
      price: 4000,
      originalPrice: 5000,
      label: "Sale!",
    },
    {
      title: "Puff Pastry",
      image:
        "https://mejoria.in/wp-content/uploads/2024/12/PuffPastry1-ezgif.com-optiwebp-600x600.webp",
      price: 5000,
      originalPrice: 6000,
      label: "Sale!",
    },
    {
      title: "Brownies",
      image:
        "https://mejoria.in/wp-content/uploads/2025/01/masterclassbreads-ezgif.com-optiwebp-1-600x600.webp",
      price: 4000,
      originalPrice: 5000,
      label: "Sale!",
    },
    {
      title: "Tarts",
      image:
        "https://mejoria.in/wp-content/uploads/2024/12/Tarts-ezgif.com-optiwebp-600x600.webp",
      price: 4000,
      originalPrice: 5000,
      label: "Sale!",
    },
    {
      title: "Cheese Cake",
      image:
        "https://mejoria.in/wp-content/uploads/2024/12/Cheescakes-ezgif.com-optiwebp-600x600.webp",
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
              <img src={cls.image} alt={cls.title} />
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
