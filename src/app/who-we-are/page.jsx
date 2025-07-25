import WhoWeAreContent from "../../components/WhoWeAre/WhoWeAreContent";
import WhoWeAreHeader from "../../components/WhoWeAre/WhoWeAreHeader";
import WhyChoose from "./../../components/WhyChoose/WhyChoose";
export const metadata = {
  title: "Who We Are - Mejoria International School of Pastry",
  description:
    "At Mejoria, students are mentored by expert chefs, learning through Practice, Patience, and Perseverance to master their craft and reach their full potential.",
  canonical: "https://mejoria.in/who-we-are",
  keywords: [
    "cake making classes near me",
    "pastry making classes online",
    "professional baking courses",
    "learn to bake cakes",
  ],
};
export default function WhoWeAre() {
  return (
    <div>
      <WhoWeAreHeader />
      <WhoWeAreContent />
      <WhyChoose />
    </div>
  );
}
