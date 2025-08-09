import EggFreeDiplomaContent from "../../components/EggFreeDiploma/EggFreeDiplomaContent";
import EggFreeDiplomaHeader from "../../components/EggFreeDiploma/EggFreeDiplomaHeader";
import EggFreeDiplomaIntro from "../../components/EggFreeDiploma/EggFreeDiplomaIntro";
import EggFreeDiplomaFeature from "../../components/EggFreeDiploma/EggFreeDiplomaFeature";
import Faculty from "@/components/HomePage/Faculty/Faculty";
import Partners from "@/components/HomePage/FromCourse/FromCourse";
import ServiceWhy from "@/components/HomePage/ServiceWhy/ServiceWhy";
import Testimonial from "@/components/HomePage/Testimonial/Testimonial";
export const metadata = {
  title: "Egg Free Pastry & Baking Diploma Course in Kolkata, West Bengal",
  description:
    "Egg Free Pastry & Baking Diploma Course in Kolkata, West Bengal. This program covers baking fundamentals and advanced chocolate-making techniques while refining your entrepreneurial skills.",
  canonical: "https://mejoria.in/eggfree-cake-diploma-baking-course",
  keywords: [
    "cake making classes near me",
    "pastry making classes online",
    "professional baking courses",
    "learn to bake cakes",
  ],
};
export default function EggFreeDiploma() {
  return (
    <div>
      <EggFreeDiplomaHeader />
      <EggFreeDiplomaContent />
      <EggFreeDiplomaIntro />
      <EggFreeDiplomaFeature />
      <Faculty />
      <Partners />
      <ServiceWhy />
      <Testimonial />
    </div>
  );
}
