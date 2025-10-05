import EggFreeCertificationCareer from "../../components/EggFreeCertification/EggFreeCertificationCareer";
import EggFreeCertificationContent from "../../components/EggFreeCertification/EggFreeCertificationContent";
import EggFreeCertificationCourse from "../../components/EggFreeCertification/EggFreeCertificationCourse";
import EggFreeCertificationHeader from "../../components/EggFreeCertification/EggFreeCertificationHeader";
import ClassicCertificationFromCourse from "../../components/ClassicCertification/ClassicCertificationFromCourse";
import Faculty from "@/components/HomePage/Faculty/Faculty";
import Partners from "@/components/HomePage/FromCourse/FromCourse";
import ServiceWhy from "@/components/HomePage/ServiceWhy/ServiceWhy";
import Testimonial from "@/components/HomePage/Testimonial/Testimonial";
export const metadata = {
  title:
    "Egg Free Pastry & Baking Certification Course in Kolkata, West Bengal",
  description:
    "Egg Free Pastry & Baking Certification Course in Kolkata, West Bengal. Our 2-month Professional Baking and Pastry (Egg-Free) Certificate Course is the ideal starting point for your journey in the world of baking.",
  canonical: "https://mejoria.in/eggfree-cake-baking-certification-course",
  keywords: [
    "cake making classes near me",
    "pastry making classes online",
    "professional baking courses",
    "learn to bake cakes",
  ],
};
export default function EggFreeCertification() {
  return (
    <div>
      <EggFreeCertificationHeader />
      <EggFreeCertificationContent />
      <EggFreeCertificationCourse />
      <ClassicCertificationFromCourse />
      <EggFreeCertificationCareer />
      <Faculty />
      <Partners />
      <ServiceWhy />
      <Testimonial />
    </div>
  );
}
