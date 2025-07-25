import AboutUsCareer from "@/components/AboutUs/AboutUsCareer";
import ClassicCertificationHeader from "../../components/ClassicCertification/ClassicCertificationHeader";
import ClassicCertificationContent from "../../components/ClassicCertification/ClassicCertificationContent";
import ClassicCertificationCourse from "../../components/ClassicCertification/ClassicCertificationCourse";
import ClassicCertificationFromCourse from "../../components/ClassicCertification/ClassicCertificationFromCourse";

export const metadata = {
  title: "Classic Pastry & Baking Certification Course in Kolkata, West Bengal",
  description:
    "Classic Pastry & Baking Certification Course in Kolkata, West Bengal. Our 2 Months Professional Baking and Pastry (Classic) Certificate Course is the perfect foundation for your bakery or café dreams.",
  canonical: "https://mejoria.in/classic-cake-baking-certification-course",
  keywords: [
    "cake making classes near me",
    "pastry making classes online",
    "professional baking courses",
    "learn to bake cakes",
  ],
};
export default function ClassicCertification() {
  return (
    <div>
      <ClassicCertificationHeader />
      <ClassicCertificationContent />
      <ClassicCertificationCourse />
      <ClassicCertificationFromCourse />
      <AboutUsCareer />
    </div>
  );
}
