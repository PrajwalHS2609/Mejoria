// CakeMasteryLearn.jsx
import React from "react";
import "./CakeMastery.css";

const CakeMasteryLearn = () => {
  const modules = [
    {
      id: 1,
      title: "Module 1: Cake Basics",
      points: [
        "Types of Cakes and Tools Required",
        "Understanding Ingredients",
        "Preparing Cake Batters",
      ],
    },
    {
      id: 2,
      title: "Module 2: Fillings & Frosting",
      points: [
        "Whipping Techniques",
        "Types of Frosting",
        "Layering Cakes Professionally",
      ],
    },
    {
      id: 3,
      title: "Module 3: Buttercream Cake",
      points: [
        "Techniques to get sharp edges in buttercream cakes",
        "How to colour the buttercream and get dark shades",
        "Creating textures in buttercream",
        "Bordering tecniques, various cake textures using basic tools",
        "Modern buttercream styling techniques",
        "Buttercream flower bouquet",
        "Painting a buttercream cake",
      ],
    },
    {
      id: 4,
      title: "Module 4: Celebration Cakes",
      points: [
        "Understanding ganache ratios and fluidity",
        "Torte, layer and ganache a cake",
        "Fondant draping, decoration and finishing techniques",
        "Covering and decorating a cake board",
        "Cake toppers, animal figurines",
        "Designing a theme based cake",
      ],
    },
    {
      id: 5,
      title: "Module 5: Gum Paste Flowers",
      points: [
        "Creating your own ALL WEATHER PROOF gumpaste",
        "Making sugar flowers, (peony, rose, hibiscus, poppy, leaves, buds, fillers)",
        "Arranging a bouquet",
        "Concepts of designing a cake",
      ],
    },
    {
      id: 6,
      title: "Module 6: Wedding Cakes",
      points: [
        "Cake structuring",
        "Stacking and assembling a tier cake",
        "Use of false layers and dummies",
        "Concept of colour palette and design",
        "Textures, airbrushing, sugar lace, stenciling, wax paper transfer, wafer paper techniques, hand painting",
        "Pricing and packaging, transport and logistics",
      ],
    },
    {
      id: 7,
      title: "Module 7: Royal Icing",
      points: [
        "How to make your own royal icing.",
        "Coloring royal icing",
        "Royal icing cookies.",
        "Royal icing transfers.",
        "Basic string work, Lambeth and overpiping.",
      ],
    },
    {
      id: 8,
      title: "Module 8: Cake Carving",
      points: [
        "Cake carving techniques",
        "Ganaching and fondant covering (flower pot, ice cream cone, whiskey barrel, watering can, sneakers, handbags)",
        "Introduction to modeling chocolate – usage, colouring and finishing.",
        "Covering and decorating a cake board",
        "Cake toppers, animal figurines",
        "Designing a theme based cake",
      ],
    },
  ];

  return (
    <div className="cakeMasteryLearn-container">
      <div className="cakeMasteryLearn-heading">
        <h2>Here’s What You’ll Learn:</h2>
      </div>
      <div className="module-cards-wrapper">
        {modules.map((item, i) => (
          <div className="module-card-modern" key={i}>
            <h3 className="module-title">{item.title}</h3>
            <ul className="module-points">
              {item.points.map((point, idx) => (
                <li key={idx}>
                  <span className="module-icon">🍰</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CakeMasteryLearn;
