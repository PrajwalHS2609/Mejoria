import ServiceWhy from "@/components/HomePage/ServiceWhy/ServiceWhy";
import CoursePrice from "../../components/Expertise/CoursePrice";
export const metadata = {
  title: "Our Expertise - Mejoria International School of Pastry",
  description:
    "Mejoria International School of Pastry, located in Kolkata, fosters excellence in pastry and baking. Combining traditional methods with modern techniques.",
  canonical: "https://mejoria.in/our-expertise",
  keywords: [
    "cake making classes near me",
    "pastry making classes online",
    "professional baking courses",
    "learn to bake cakes",
  ],
};
export default function Expertise() {
  return (
    <div>
      <ServiceWhy />
      <CoursePrice />
    </div>
  );
}
