import React from "react";
import "./HomeBlog.css";
import HomeBlogCard from "./HomeBlogCard";
import olaplexBenefitsBanner from "./../../../Images/Blog/10 Amazing Benefits of Olaplex Hair Treatment/Banner.png";
import bodyWaxingRightBanner from "./../../../Images/Blog/BodyWaxingRight/Banner.png";
import moroccanOilBanner from "./../../../Images/Blog/moroccan_oil/Banner.png";
import Link from "next/link";
const HomeBlogMain = () => {
  return (
    <div className="homeBlogMain">
      <div className="homeBlogMainContainer">
        <HomeBlogCard
          img={moroccanOilBanner}
          head="How Moroccanoil Hair Treatment Can Rescue Damaged Hair?"
          para="When it comes to rescuing dry, brittle, and damaged hair, the solution often lies ..."
          link="/how-moroccanoil-hair-treatment-can-rescue-damaged-hair"
        />
        <HomeBlogCard
          img={bodyWaxingRightBanner}
          head="Aroma Body Spa: Rejuvenate Your Senses with the Power of Essential Oils"
          para="In the world of hair removal, body waxing stands out as one of the most popular and ..."
          link="/is-body-waxing-right-for-you-pros-cons-and-tips"
        />
        <HomeBlogCard
          img={olaplexBenefitsBanner}
          head="10 Amazing Benefits of Olaplex Hair Treatment"
          para="In a world where hair is constantly exposed to heat styling, coloring, pollution, and ..."
          link="/10-amazing-benefits-of-olaplex-hair-treatment"
        />
      </div>
      <div className="homeBlogBtn">
        <Link href={"/blog"}>
          <button>View More</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeBlogMain;
