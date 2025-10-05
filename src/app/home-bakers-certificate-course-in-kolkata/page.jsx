import Faculty from "@/components/HomePage/Faculty/Faculty";
import HomeBakersContent from "../../components/HomeBakers/HomeBakersContent";
import Partners from "@/components/HomePage/FromCourse/FromCourse";
import ServiceWhy from "@/components/HomePage/ServiceWhy/ServiceWhy";
import Testimonial from "@/components/HomePage/Testimonial/Testimonial";
import HomeBakersContext from "../../components/HomeBakers/HomeBakersContext";
export const metadata = {
  title: "Home Bakers Certificate Course in Kolkata, West Bengal",
  description:
    "Home Bakers Certificate Course in Kolkata, West Bengal. You’ll start with the essentials, including food safety, the science of baking perfect cakes, and creating egg-free masterpieces.",
  canonical: "https://mejoria.in/home-bakers-certificate-course",
  keywords: [
    "cake making classes near me",
    "pastry making classes online",
    "professional baking courses",
    "learn to bake cakes",
  ],
};
export default function HomeBakers() {
  return (
    <div>
      <HomeBakersContent />
      <Faculty />
      <Partners />
      <ServiceWhy />
      <Testimonial />
      <HomeBakersContext />
    </div>
  );
}
