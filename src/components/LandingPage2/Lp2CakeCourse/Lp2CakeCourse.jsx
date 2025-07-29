import React from "react";
import cakeImg1 from "../../../Image/cakeLp/1.jpg";
import cakeImg2 from "../../../Image/cakeLp/2.jpg";
import cakeImg3 from "../../../Image/cakeLp/4.jpg";
import cakeImg4 from "../../../Image/cakeLp/7.jpg";
import Image from "next/image";
import "./Lp2CakeCourse.css";

const Lp2CakeCourse = () => {
  return (
    <div className="cakeCourseLp-wrapper" >
      <div className="cake-banner-container">
        <div className="cake-images">
          <div className="cake-img1Content">
            <Image src={cakeImg1} alt="Cake 1" />
          </div>
          <div className="cake-imagesWrapper1">
            <div className="cake-img2Content">
              <Image src={cakeImg2} alt="Cake 2" />
            </div>
            <div className="cake-imagesWrapper2">
              <div className="cake-img3Content">
                <Image src={cakeImg3} alt="Cake 3" />
              </div>
              <div className="cake-img3Content">
                <Image src={cakeImg4} alt="Cake 4" />
              </div>
            </div>
          </div>
        </div>

        <div className="cake-content">
          <div className="cake-heading-box">
            <h2 className="main-title">CAKE CANVAS</h2>
            <h3 className="sub-title">
              CERTIFICATE COURSE <span className="badge">3 WEEKS</span>
            </h3>
            <div className="price">
              <span className="original-price">₹40,000</span>
              <span className="discounted-price">₹30,000</span>
            </div>
          </div>

          <div className="cake-features">
            <ul>
              <li> From Basics to Brilliance</li>
              <li> Beginner Friendly</li>
              <li> Start with Basics of Baking</li>
              <li> Learn to Frost with Flair</li>
              <li> Flavours and Textures</li>
              <li> Create Cakes Like a Pro</li>
              <li> Perfect to Set Up a Home Business</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lp2CakeCourse;
