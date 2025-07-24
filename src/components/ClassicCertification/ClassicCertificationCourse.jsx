import React from "react";
import "./ClassicCertification.css";
import understanding from "@/Image/ClassicCertificate/understandingEgg.png";
import cake from "@/Image/ClassicCertificate/cakes.png";
import sugar from "@/Image/ClassicCertificate/sugarArt.png";
import cafe from "@/Image/ClassicCertificate/cafeStyle.png";
import cookies from "@/Image/ClassicCertificate/cookies.png";
import breads from "@/Image/ClassicCertificate/bread.png";
import chocolate from "@/Image/ClassicCertificate/chocolate.png";
import classic from "@/Image/ClassicCertificate/classicFrench.png";
import Image from "next/image";

const ClassicCertificationCourse = () => {
  const modules = [
    {
      image: understanding,
      title: "UNDERSTANDING EGG",
      description:
        "By understanding the specific role of eggs in a recipe, one can choose an appropriate substitute, maintaining the quality and integrity of the dish while catering to dietary needs.",
    },
    {
      image: cookies,
      title: "COOKIES & TARTS",
      description:
        "Basic and Advance techniques to make cookies like Drop cookies, Ice Box and Rolled cookies. Different methods of bulk and small scale production. Learning Sweet and savoury cookies",
    },
    {
      image: cake,
      title: "CAKES",
      description:
        " Learn eggless baking, sponge recipes, cake preparation, piping, chocolate garnishing, whipped cream, buttercream, ganache, fondant, teacakes, and muffins.",
    },
    {
      image: breads,
      title: "BREAD & BOULANGERIE",
      description:
        "Master bread baking fundamentals, egg-free substitutes, leavening agents, lean vs. enriched dough, international breads, breakfast pastries, and achieve perfect results in every bake.",
    },
    {
      image: sugar,
      title: "SUGAR ART & WEDDING CAKES",
      description:
        "Creating theme cakes with fondant and edible sugar art for the increasing market demand. Colours and designs to make eyecatching modern wedding cakes.",
    },
    {
      image: classic,
      title: "CLASSIC FRENCH BAKING",
      description:
        "French baking includes, macarons, choux pastry, layered mousse cakes and entremet . Classic cakes like opera, swiss rolls and tiramisu.",
    },
    {
      image:chocolate ,
      title: "CHOCOLATE & CONFECIONERY",
      description:
        "Master couverture and compound chocolate, tempering, garnishing, bonbons, ganache, crémeux, pralines, pâte de fruit, caramel, toffee and hard candy",
    },
    {
      image: cafe,
      title: "CAFÉ STYLE BAKING",
      description:
        "Cheesecakes, cupcakes, muffins, brownies and the best of café menus put together to all those who want to ultimately start their own business.",
    },
    {
      image: cafe,
      title: "BUSINESS STRATEGY",
      description:
        "Learn home bakery setup, food safety, hygiene, mobile and DSLR food photography, social media promotion, brand building, and gain insights from celebrity chef visits.",
    },
  ];
  return (
    <div className="classicCertiCourse-container">
      <div className="classicCertiCourse-content">
        <h2>Classic Certification Course Module</h2>
      </div>
      <div className="classicCertiCourse-content">
        <div className="module-cards-wrapper">
          {modules.map((item, i) => (
            <div className="module-card-modern" key={i}>
              <div className="module-card-img-container">
                {" "}
                <Image
                  src={item.image}
                  alt={item.title}
                  className="module-image"
                />
              </div>
              <h4 className="module-title">{item.title}</h4>
              <p className="module-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassicCertificationCourse;
