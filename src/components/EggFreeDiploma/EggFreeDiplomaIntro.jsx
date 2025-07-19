"use client";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./EggFreeDiploma.css"; // Update CSS for smoothness and icons

const EggFreeDiplomaIntro = () => {
  const curriculumData = [
    {
      title: "1. Introduction to Cakes, Fillings and Icing",
      topics: [
        {
          heading: "Introduction To Cakes, Fillings And Icing",
          content:
            "This module is dedicated to the darling of the baking world — Cake! Perfect your fundamentals and master advanced techniques as well.",
          learnings: [
            "Sponge Technique and Cake Preparation",
            "Piping Technique and Basic Chocolate Garnishes",
            "Travel Cakes",
          ],
        },
        {
          heading: "Sugar Craft And Cake Decoration",
          content:
            "Bring your artistry to life with Sugar Crafting. This module helps you develop and perfect – advanced techniques as well.",
          learnings: [
            "Basic Cake Decorating Techniques",
            "Piping Skill",
            "Create your own Theme Cake",
          ],
        },
        {
          heading: "Advanced Cake Decoration",
          content:
            "Weddings are one of the sweetest moments of life and the Wedding Cake is always the centerpiece. Create Tiered Masterpieces and get hands-on with Advanced Sugar Craft.",
          learnings: [
            "Wedding Cakes",
            "Icing and Filling Techniques",
            "Airbrushing",
            "Sugar Flower Creations",
            "Advanced Cake",
            "Toppers",
          ],
        },
      ],
    },
    {
      title: "2. Pastry",
      topics: [
        {
          heading: "Introduction To Pastry Products",
          content:
            "Learn how to make mouth-watering pastries and grasp all the granular details of the art of pastry making.",
          learnings: [
            "Short Crust Pastry",
            "Tarts and Pies",
            "Puff Pastry",
            "Choux Pastry",
          ],
        },
        {
          heading: "French Style Modern Entremets",
          content:
            "Master multi-layered desserts using different textures – creamy & crunchy, adding the goodness of fruits and chocolates.",
          learnings: [
            "Cake Inserts",
            "French Biscuit",
            "Crunchy Layering",
            "Glazing",
            "Velvet Spraying",
            "Chocolate Mousse",
            "Entremets Assembly",
          ],
        },
        {
          heading: "Petit Gateaux And Modern French Pastry",
          content:
            "Reinvent the acclaimed Petit Gateaux and other Classic French Pastries, for the modern palate.",
          learnings: [
            "Pastry Shop Desserts",
            "Stack and Molded Desserts",
            "Creating new textures and working with innovative flavors",
            "Serving Temperature",
            "Costing Considerations",
          ],
        },
      ],
    },
    {
      title: "3. Chocolate",
      topics: [
        {
          heading: "Chocolate Foundation",
          content:
            "Chocolate is the quintessential ingredient in many great desserts.",
          learnings: [
            "Chocolate Tempering",
            "Chocolate Garnishing",
            "Chocolate Shelling",
            "Introduction to Single Origin",
            "Chocolate",
          ],
        },
        {
          heading: "Chocolate Master Class",
          content:
            "Go beyond the basics, learn Advanced Techniques with Chocolate and Sugar.",
          learnings: [
            "Chocolate Fudge",
            "Chocolate Ganache",
            "Chocolate Bars",
            "Chocolate Bon Bon",
            "Nougat",
            "Candies",
            "French Macaron",
          ],
        },
        {
          heading: "Chocolate Showpiece",
          content:
            "Develop the knowledge and ability to create Striking Display Pieces, whilst learning Innovative Chocolate Techniques. This module focuses on creating a synergy between the Medium of Chocolate and Artistic Presentation to make Showpieces of the Highest Standard",
          learnings: [],
        },
      ],
    },
    {
      title: "4. Desserts",
      topics: [
        {
          heading: "Master Class for Modern Trending Desserts",
          content:
            "This module takes you to the new additions in International Dessert Menus, as well as the experimentation on, and modernization of Classic Cakes and Desserts. Influence your senses with different fundamentals of Textures and Composition.",
          learnings: [
            "Revisiting Classic Cakes",
            "Reinventing Classic Desserts",
            "Innovative and Trending Flavors",
          ],
        },
        {
          heading: "Conceptualize Your Own Plated Dessert",
          content:
            "Explore your creativity to create a feast for your visual and gastronomic pleasures. The only limit is your creativity!",
          learnings: [
            "Designing your own plated dessert",
            "Key elements for a plated dessert",
            "Serving temperature and plate costing",
            "Portion Sizing",
          ],
        },
      ],
    },
    {
      title: "5. Boulangerie",
      topics: [
        {
          heading: "Fundamentals of Baking Bread",
          content:
            "Learn about different leavening agents and their action with different ingredients in the process of bread making. Gain an ability to assess the quality of baked food, understand the faults and apply the necessary measures to correct themLearnings:",
          learnings: [
            "Science of Baking Bread",
            "International Breads",
            "Lean Dough and Enriched Dough",
          ],
        },
        {
          heading: "Advanced Breakfast Pastries and Viennoiserie",
          content:
            "Crowd-pleasers and Chef Signature recipes are yours for the taking.",
          learnings: [
            "Breakfast Pastries/ Viennoiserie",
            "Chef’s Signature Breakfast Pastries",
            "Croissant",
            "Danish",
          ],
        },
        {
          heading: "Artisan Breads",
          content:
            "Discover enriched-bread making containing multiple variations and creatively designed breads",
          learnings: [
            "Traditional European Bread",
            "Advanced European Bread",
            "Bake Artisan Breads",
            "Bake Artisan Breads",
          ],
        },
      ],
    },
    {
      title: "6. Beyond Baking",
      topics: [
        {
          heading: "Food Photography Classes",
          content:
            "Photographing food is something we all love to do. From a casual ‘clicker’ to a pro, who doesn’t do it? In the business of Pastry, a great picture says much more than a ‘thousand words. In these classes, you will be taught a mix of technical as well as creative concepts.",
          learnings: [],
        },
        {
          heading: "France Internship Program",
          content:
            "Learn the Art of Pastry from the cradle of its birth, France. We have tied-up with a Global Education Firm to facilitate internships for you for a period of 4-6 months. What can be better that getting paid in Euros, while learning with the best.",
          learnings: [],
        },
        {
          heading: "Budgeting & Costing Sessions",
          content:
            "Discover enriched-bread making containing multiple variations and creatively designed breads",
          learnings: [],
        },
        {
          heading: "Entrepreneurship Classes",
          content:
            "Becoming a Food Entrepreneur is s shared dream amongst all of us. Let’s understand and learn how to make that happen from professionals who have done just that. Whether you dream of setting up a café, a commercial kitchen, or a home-baking business, these classes will provide you the required foundation.",
          learnings: [],
        },
        {
          heading: "Industrial Visit",
          content:
            "Observe and interact with professionals from known hotel chains by visiting their place of work. Learn how commercial kitchens look, how is the process managed, the system, the hierarchy and so on",
          learnings: [],
        },
        {
          heading: "Marketing & Branding Sessions",
          content:
            "Lemon Cup Cake’ or ‘Lemon Sponge with a white chocolate buttercream and white chocolate shavings.? Well, there is a way to present, brand, and market, desserts. Learn concepts of marketing & branding to understand business, and to better serve your customers",
          learnings: [],
        },
        {
          heading: "Hygiene & Food Safety Classes",
          content:
            "A clean working station and hygienic kitchen is the hallmark of a true chef. Well, we don’t just preach this, we practice it, and we also impart it. Global practices, principles and standards for food safety forms the core of these classes",
          learnings: [],
        },
      ],
    },
  ];

  return (
    <div className="eggFreeIntro-container">
      <div className="eggFreeIntro-heading">
        <h6>HERE'S WHAT YOU'LL LEARN ABOUT TIS COURSE</h6>
        <h2>Introducing the EggFree Diploma Program on Baking & Pastry</h2>
      </div>
      <div className="curriculum-wrapper">
        {curriculumData.map((module, i) => (
          <div className="module-card" key={i}>
            <h2 className="module-title">{module.title}</h2>
            <Accordion defaultActiveKey={[]} flush>
              {module.topics.map((topic, j) => (
                <Accordion.Item eventKey={`${i}-${j}`} key={`${i}-${j}`}>
                  <Accordion.Header className="accHeader">
                    <div className="accordion-heading">
                      <h6>{topic.heading}</h6>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="accBody">
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
        ))}
      </div>
    </div>
  );
};

export default EggFreeDiplomaIntro;
