"use client";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import weekImg1 from "@/Image/Img/21.jpg";
import weekImg2 from "@/Image/Img/20.jpg";
import weekImg3 from "@/Image/Img/23.jpg";
import Image from "next/image";

const CakeCourseWeeks = () => {
  const weekData = [
    {
      title: "WEEK 1 : FUNDAMENTALS & FOUNDATIONS",
      image: weekImg1,

      topics: [
        {
          heading: "Day 1 – INTRODUCTION TO EQUIPMENT & INGREDIENTS",
          content:
            "Understanding the science behind eggless baking, common replacements, and kitchen essentials.",
          learnings: [
            " Learn to operate commercial ovens, stand mixers, and professional baking tools",
            " Gain knowledge of essential ingredients and their uses.",
            "Discover which equipment to buy to set up your bakery business.",
            "Understand where to source your ingredients.",
          ],
        },
        {
          heading: "Day 2 – WEIGHTS, MEASURES & EGG-FREE THEORY",
          content:
            "Essential tools and precise measuring for successful baking.",
          learnings: [
            " Master the basics of measuring your ingredients.",
            " Learn to convert cup measurements into grams.",
            " Delve into the theory on Eggfree baking, understanding the use of eggs in baking and effective egg substitutes",
          ],
        },
        {
          heading: "Day 3 – CUPCAKES GALORE!",
          content:
            "Essential tools and precise measuring for successful baking.",
          learnings: [
            "  Bake 4 different flavors of cupcakes.",
            "  Explore various fillings and frostings.",
            " Learn essential techniques for decorating cupcakes.",
          ],
        },
        {
          heading: "Day 4 –  WHIPPED CREAM ARTISTRY ",
          content:
            "Essential tools and precise measuring for successful baking.",
          learnings: [
            "  Discover how to prepare stable whipped cream.",
            "  Master techniques for covering a cake with whipped cream and achieving sharp edges.",
            " Practice diverse piping techniques.",
          ],
        },
      ],
    },

    {
      title: " WEEK 2: CELEBRATION & CLASSIC CAKES",
      image: weekImg2,

      topics: [
        {
          heading: "Day 5-7 – CELEBRATION CAKES & LAYERED PASTRIES ",
          content: "Bake soft and spongy tea cakes with a variety of flavors.",
          learnings: [
            "Create 7 types of celebration cakes.",
            "Explore layered pastries, different sponges, and fillings",
            "Perfect your skills in cake trimming & levelling.",
            "Further enhance your piping techniques",
            "Learn how to layer a cake and various combing techniques",
            " Keep up with trending cake themes.",
          ],
        },
        {
          heading: "Day 8-9 – CLASSIC CAKES & TRADITIONAL FLAVORS ",
          content: "Bake soft and spongy tea cakes with a variety of flavors.",
          learnings: [
            " Bake 3 classic cake recipes.",
            " Learn about the origin of these timeless desserts.",
            " Explore traditional Flavors.",
          ],
        },
      ],
    },
    {
      title: "WEEK 3: ADVANCED DECORATING & FONDANT TECHNIQUES",
      image: weekImg3,

      topics: [
        {
          heading: "Day 10 – CUPCAKES FLORAL DECORATION ",
          content: "Bake soft and spongy tea cakes with a variety of flavors.",
          learnings: [
            " Learn to create 6 different types of whipped cream flowers.",
            " Understand the uses of various nozzles.",
            " Master the art of coloring whipped cream.",
          ],
        },
        {
          heading: "Day 11-12 – FONDANT CAKES & BUSINESS SKILLS ",
          content: "Bake soft and spongy tea cakes with a variety of flavors.",
          learnings: [
            "  Learn making a chocolate ganache cake.",
            "  Discover how to make cake toppers.",
            "  Get tips to achieving sharp edges with fondant",
            " Master covering a cake with fondant and basic fondant techniques.",
            " Learn how to use moulds neatly.",
            " Receive valuable business tips for starting your own home bakery.",
          ],
        },
      ],
    },
  ];

  return (
    <div className="cakeCourseWeek-container">
      <div className="cakeCourseWeek-heading">
        <span className="tag">WHAT YOU WILL MASTER</span>

        <h2>DETAILED COURSE CURRICULUM</h2>
      </div>

      <div className="curriculum-wrapper">
        {weekData.map((module, i) => (
          <div
            className={`module-card ${i % 2 === 1 ? "reverse-layout" : ""}`}
            key={i}
          >
            {/* IMAGE */}
            <div className="week-image">
              <Image src={module.image} alt={`Visual for ${module.title}`} />
            </div>

            {/* TEXT */}
            <div className="week-content">
              <h2 className="module-title">{module.title}</h2>
              <Accordion defaultActiveKey={[]} flush>
                {module.topics.map((topic, j) => (
                  <Accordion.Item eventKey={`${i}-${j}`} key={`${i}-${j}`}>
                    <Accordion.Header>
                      <div className="accordion-heading">
                        <h6>{topic.heading}</h6>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body className="acc-Body">
                      <p>{topic.content}</p>
                      <strong>Learnings:</strong>
                      <ul>
                        {topic.learnings.map((item, k) => (
                          <li key={k}>{item}</li>
                        ))}
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CakeCourseWeeks;
