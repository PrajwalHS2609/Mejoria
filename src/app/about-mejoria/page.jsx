import AboutUsHeader from "./../../components/AboutUs/AboutUsHeader";
import WhyChoose from "./../../components/WhyChoose/WhyChoose";
import AboutUsCareer from "./../../components/AboutUs/AboutUsCareer";
import Faculty from "@/components/HomePage/Faculty/Faculty";
import AboutUsEmpower from "./../../components/AboutUs/AboutUsEmpower";
import AboutUsContent from "./../../components/AboutUs/AboutUsContent";
export const metadata = {
  title: "About Mejoria International School of Pastry ",
  description:
    "Welcome to Mejoria International School of Pastry, where the art of creating sweet masterpieces meets the highest standards of education.",
  canonical: "https://mejoria.in/about-mejoria",
  keywords: [
    "cake making classes near me",
    "pastry making classes online",
    "professional baking courses",
    "learn to bake cakes",
  ],
};
export default function AboutUs() {
  return (
    <div>
      <AboutUsHeader />
      <AboutUsContent />
      <AboutUsEmpower />
      <WhyChoose />
      <AboutUsCareer />
      <Faculty />
    </div>
  );
}
