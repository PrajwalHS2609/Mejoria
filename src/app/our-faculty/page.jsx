import ServiceWhy from "@/components/HomePage/ServiceWhy/ServiceWhy";
import Faculty from "./../../components/HomePage/Faculty/Faculty";
import Partners from "@/components/HomePage/FromCourse/FromCourse";
import Testimonial from "@/components/HomePage/Testimonial/Testimonial";
export const metadata = {
  title: "Chef Divya Saraf — Our Esteemed Faculty ",
  description:
    "Chef Divya Saraf is a distinguished Pastry Chef with over 14 years of expertise, widely celebrated for her mastery in Patisserie and cake design.",
  canonical: "https://mejoria.in/our-faculty",
  keywords: [
    "cake making classes near me",
    "pastry making classes online",
    "professional baking courses",
    "learn to bake cakes",
  ],
};
export default function OurFaculty() {
  return (
    <div>
      <Faculty />
      <Partners />
      <ServiceWhy />
      <Testimonial />
    </div>
  );
}
