"use client"
import React from "react";
import "./Members.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import crew1 from "./../../../Images/Rose - Salon Director.jpeg.jpg";
// import crew2 from "./../../../Images/Sam - Creative Director.jpg";
// import crew3 from "./../../../Images/Lobsang - Top Stylist.jpg";
// import crew4 from "./../../../Images/Kevin - Top Stylist.jpg";
import leftArrow from "@/Image/left.png"
import rightArrow from "@/Image/right.png"
const MembersSlide = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          // background: "#cc2228",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "14px",
          height: "40px",
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          // background: "#cc2228",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
          height: "40px",
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    );
  }
  function RespSampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          height: "50px",
          width: "50px",
          cursor: "pointer",
          backgroundImage: `url(${rightArrow})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          marginRight: "-15px",
        }}
        onClick={onClick}
      />
    );
  }
  function RespSamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          height: "50px",
          width: "50px",
          cursor: "pointer",
          backgroundImage: `url(${leftArrow})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          marginLeft: "-15px",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          nextArrow: <RespSampleNextArrow />,
          prevArrow: <RespSamplePrevArrow />,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="memberSlideContainer">
      <div className="memberSlideContent">
        <Slider {...settings}>
          <div className="memberSlide">
            {/* <img src={crew1} alt="" loading="lazy"/> */}
            <h3>Rose</h3>
            <pre>Salon Director</pre>
          </div>
          <div className="memberSlide">
            {/* <img src={crew2} alt="" loading="lazy"/> */}
            <h3>Sam</h3>
            <pre>Creative Director</pre>
          </div>
          <div className="memberSlide">
            {/* <img src={crew3} alt="" loading="lazy"/> */}
            <h3>Lobsang</h3>
            <pre>Top Stylist</pre>
          </div>
          <div className="memberSlide">
            {/* <img src={crew4} alt="" loading="lazy"/> */}
            <h3>Kevin</h3>
            <pre>Salon Director</pre>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MembersSlide;
