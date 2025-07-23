import React from "react";
import "./HomeBakers.css";
import homeBakerImg from"../../Image/homeCourseImg.png"
import Image from "next/image";
const HomeBakersContent = () => {
  return (
    <section className="home-bakers-section">
      <div className="home-bakers-wrapper">
        {/* Left: Text Content */}
        <div className="home-bakers-content">
          <h2 className="course-title">Home Bakers Certificate Course</h2>
          <p className="course-description">
            Learn to bake like a pro with our hands-on certificate program
            tailored for home bakers.
          </p>

          <ul className="course-list">
            <li>
              <strong>Cakes Week:</strong> <span>4 days</span>
              <ul className="sublist">
                <li>Whipped cream techniques</li>
                <li>Cake sponge making</li>
                <li>Finishing & Decoration</li>
              </ul>
            </li>
            <li>
              <strong>Puddings and Cheesecake:</strong> <span>1 day</span>
            </li>
            <li>
              <strong>Cookies (Sweet):</strong> <span>2 days</span>
            </li>
            <li>
              <strong>Cookies (Savory):</strong> <span>1 day</span>
            </li>
            <li>
              <strong>Tarts:</strong> <span>2 days</span>
            </li>
            <li>
              <strong>Cupcakes:</strong> <span>1 day</span>
            </li>
            <li>
              <strong>Teacake:</strong> <span>1 day</span>
            </li>
            <li>
              <strong>Brownie:</strong> <span>1 day</span>
            </li>
            <li>
              <strong>Theory:</strong> <span>1 day</span>
            </li>
            <li>
              <strong>Cakesicles Cake Pop:</strong> <span>1 day</span>
            </li>
            <li>
              <strong>Cakepops:</strong> <span>1 day</span>
            </li>
          </ul>

          <div className="course-price">
            <span>Total Course Fee:</span> Rs. <strong>75,000/-</strong>
          </div>
        </div>

        {/* Right: Image */}
        <div className="home-bakers-image">
          <Image
            src={homeBakerImg}
            alt="Home Bakers Certificate"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeBakersContent;
