import Faculty from "@/components/HomePage/Faculty/Faculty";
import OurPartnerShipContent from "../../components/OurPartnerShip/OurPartnerShipContent";
import Partners from "@/components/HomePage/FromCourse/FromCourse";
import ServiceWhy from "@/components/HomePage/ServiceWhy/ServiceWhy";
import Testimonial from "@/components/HomePage/Testimonial/Testimonial";
export const metadata = {
  title: "Our Esteemed Partner - City and Guilds London",
  description:
    "We are proud to be affiliated with City & Guilds London, a globally recognized leader in education and training.",
  canonical: "https://mejoria.in/our-partnerships",
  keywords: [
    "cake making classes near me",
    "pastry making classes online",
    "professional baking courses",
    "learn to bake cakes",
  ],
};
export default function OurPartnership() {
  return (
    <div>
      <OurPartnerShipContent />
      <Faculty />
      <Partners />
      <ServiceWhy />
      <Testimonial />
    </div>
  );
}
