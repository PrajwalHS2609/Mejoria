import React from "react";
import "./Lp2CafeCourse.css";
import cafeImg from "@/Image/cafe craft/Small Bites 3.jpg";
import Image from "next/image";
const Lp2CafeCourse = () => {
  return (
    <div className="cafe-kraft-container">
      <div className="cafe-image">
        <Image src={cafeImg} alt="Cafe Kraft Certificate Course" />
      </div>

      <div className="cafe-content">
        <h4 className="launch-tag">LAUNCHING NEW.!!!</h4>

        <h2 className="course-title">
          <span className="pink-text">CAFÉ KRAFT</span>
          <br />
          CERTIFICATE <span className="pink-text">COURSE</span>
        </h2>

        <p className="dream-tag">
          DREAM TO <span className="pink-text">OPEN A CAFÉ ?</span>
        </p>

        <div className="course-info">
          <div className="info-box">
            <b className="info-head">DURATION</b>
            <p>1 MONTH</p>
            <p>80 HOURS +</p>
          </div>

          <div className="info-box offer-box">
            <b className="info-head">BIRTHDAY OFFER</b>
            <p className="">₹1 LAKH</p>
            <p className="offer-percent">25% OFF</p>
          </div>

          <div className="info-box price-box">
            <b className="info-head">ALL INCLUSIVE</b>
            <p className="price">₹75,000</p>
          </div>
        </div>

        <div className="module-list">
          <span>PATISSERIE MODULE</span> <span>BOULONGERIE MODULE</span>
          <span>SMALL BITES</span> <span>PLATED DESSERTS</span>
          <span>LEARN 90+ RECIPES</span>
        </div>

        {/* <div className="footer-contact">
          <p>Mejoria International School Of Pastry</p>
          <p>🌐 www.mejoria.in 📞 +9187775 75992</p>
        </div> */}
      </div>
    </div>
  );
};

export default Lp2CafeCourse;
