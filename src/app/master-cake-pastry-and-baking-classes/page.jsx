import Faculty from "@/components/HomePage/Faculty/Faculty";
import MasterClassContent from "../../components/MasterClass/MasterClassContent";
import MasterClassCourse from "../../components/MasterClass/MasterClassCourse";
import MasterClassHeader from "../../components/MasterClass/MasterClassHeader";
import Partners from "@/components/HomePage/FromCourse/FromCourse";
import ServiceWhy from "@/components/HomePage/ServiceWhy/ServiceWhy";
import Testimonial from "@/components/HomePage/Testimonial/Testimonial";
export const metadata = {
  title: "Master Cake Pastry & Baking Classes in Kolkata, West Bengal",
  description:
    "Master Cake Pastry & Baking Course in Kolkata, West Bengal. You’ll start with the essentials, including food safety, the science of baking perfect cakes, and creating egg-free masterpieces.",
  canonical: "https://mejoria.in/master-cake-pastry-and-baking-classes",
  keywords: [
    "cake making classes near me",
    "pastry making classes online",
    "professional baking courses",
    "learn to bake cakes",
  ],
};
export default function MasterClass() {
  return (
    <div>
      <MasterClassHeader />
      <MasterClassContent />
      <MasterClassCourse />
      <Faculty />
      <Partners />
      <ServiceWhy />
      <Testimonial />
    </div>
  );
}
