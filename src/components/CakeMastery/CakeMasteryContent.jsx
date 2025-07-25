import React from "react";
import "./CakeMastery.css";
import cakeMastery from "@/Image/CakeMastery.png"
import nsdc from "@/Image/nsdc.jpeg"
import cityGuilds from"@/Image/cityGuilds.png"
import Image from "next/image";
const CakeMasteryContent = () => {
  return (
    <section className="cakeMastery-section">
      <div className="cakeMastery-content">
        {/* <span className="tag">CLASSIC CERTIFICATION COURSE</span> */}
        <h2>
          <span>Cake Mastery:</span> Master Cake Decoration at Mejoria
        </h2>
        <p className="desc">
          Embark on an exciting journey into the world of cake decoration, where
          you’ll not only learn techniques but also unlock your creative
          potential. This course is designed to guide you step-by-step in
          crafting stunning and delicious cake masterpieces, blending art and
          science seamlessly.
        </p>
        <p className="desc">
          The Cake Mastery course covers all the key skills you need in cake
          engineering and decoration. You’ll start with the essentials,
          including food safety, the science of baking perfect cakes, and
          creating egg-free masterpieces. As you progress, you’ll master whipped
          cream cakes, refining your skills in torting, filling, and achieving
          sharp edges. Dive into buttercream techniques to create rich shades,
          textures, and modern styles, while also exploring ganache, fondant,
          and gum paste to elevate your cake artistry. The course culminates
          with advanced wedding cake creation and royal icing techniques, giving
          you all the tools to bring your cake visions to life. Get ready to
          unleash your inner cake artist!
        </p>

        <a href="#enroll" className="enroll-btn">
          Enroll Now
        </a>

        <div className="certification">
          <Image
            src={cityGuilds}
            alt="City and Guilds"
          />
          <span>Certified by City & Guilds, London</span>
        </div>
        <div className="nsdc">
          <Image
            src={nsdc}
            className="" alt="nsdc"
          />
          <p className="nsdc-desc">
            Food Industry Capacity & Skill Initiative (FICSI) offers skilling
            programs leading to certification, placement, capacity building &
            entrepreneurship focusing on the Food Processing Industry.
          </p>
        </div>
      </div>

      <div className="cakeMastery-images">
        <div className="image-grid">
          <Image
            src={cakeMastery}
            alt="Batch"
          />
        </div>
      </div>
    </section>
  );
};

export default CakeMasteryContent;
