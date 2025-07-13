"use client";
import React from "react";
import InstaImages from "./InstaImages";
import "./InstaFeed.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "@/Image/left.png";
import rightArrow from "@/Image/right.png";
const InstaImgContain = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          height: "60px",
          width: "60px",
          cursor: "pointer",
          backgroundImage: `url(${rightArrow})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          marginRight: "-50px",
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
          height: "60px",
          width: "60px",
          cursor: "pointer",
          backgroundImage: `url(${leftArrow})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          marginLeft: "-50px",
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

          cursor: "pointer",
          // backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
          backgroundImage: `url(${rightArrow})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "50px",
          width: "50px",
          marginRight: "-5px",
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
          cursor: "pointer",
          // backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
          backgroundImage: `url(${leftArrow})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "50px",
          width: "50px",
          marginLeft: "-5px",
        }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };
  return (
    <div className="instaImgWrapper">
      <Slider {...settings} className="instaSlider">
        <div className="instaInnerSlider">
          <InstaImages vid="https://youtube.com/shorts/lEknNyC97zY?feature=share" />
        </div>
        <div className="instaInnerSlider">
          <InstaImages vid="https://youtube.com/shorts/Ww3HdIRN-Gk?feature=share" />
        </div>
        <div className="instaInnerSlider">
          <InstaImages vid="https://youtube.com/shorts/9OOgFzW3bZU?feature=share" />
        </div>
        <div className="instaInnerSlider">
          <InstaImages vid="https://youtube.com/shorts/C-VHUH8bCx4?feature=share" />
        </div>
        <div className="instaInnerSlider">
          <InstaImages vid="https://youtube.com/shorts/1rYcCGMMB3s?feature=share" />
        </div>
        <div className="instaInnerSlider">
          <InstaImages vid="https://youtube.com/shorts/YCxQiRrxRT0?feature=share" />
        </div>
        <div className="instaInnerSlider">
          <InstaImages vid="https://youtube.com/shorts/OKAD-nm_snw?feature=share" />
        </div>
        <div className="instaInnerSlider">
          <InstaImages vid="https://youtube.com/shorts/n9Qp7mV4ES8?feature=share" />
        </div>
        <div className="instaInnerSlider">
          <InstaImages vid="https://youtube.com/shorts/4A0hxkRywDk?feature=share" />
        </div>
        <div className="instaInnerSlider">
          <InstaImages vid="https://youtube.com/shorts/WcAyVijIvw4?feature=share" />
        </div>
        <div className="instaInnerSlider">
          <InstaImages vid="https://youtube.com/shorts/6rSSozqcpQo" />
        </div>
        <div className="instaInnerSlider">
          <InstaImages vid="https://youtube.com/shorts/abIXf7Cw1Cw?feature=share" />
        </div>
        <div className="instaInnerSlider">
          <InstaImages vid="https://youtube.com/shorts/VRN7I6G38Ms?feature=share" />
        </div>
        <div className="instaInnerSlider">
          <InstaImages vid="https://youtube.com/shorts/FTCoQQGPcNo?feature=share" />
        </div>
      </Slider>
    </div>
  );
};

export default InstaImgContain;
