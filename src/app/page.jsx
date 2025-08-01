import Video from "./../components/HomePage/Video/Video";
import Services from "./../components/HomePage/Services/Services";
import ServiceWhy from "./../components/HomePage/ServiceWhy/ServiceWhy";
import Partners from "../components/HomePage/FromCourse/FromCourse";
import HelpNearYou from "./../components/HomePage/Help/HelpNearYou";
import TextLocReviews from "./../components/HomePage/TextLocReviews/TextLocReviews";
import Nurture from "./../components/HomePage/Nurture/Nurture";
import Faculty from "./../components/HomePage/Faculty/Faculty";
import FormHeader from "./../components/Form/FormHeader";
import Testimonial from "./../components/HomePage/Testimonial/Testimonial";
import HomePageContent from "./../components/HomePage/HomePageContent/HomePageContent";
import ContactUsMap from "@/components/ContactUs/ContactUsMap";

export const metadata = {
  title:
    "Baking Course in Kolkata, West Bengal | Cake & Bread Baking Classes Near Me",
  description:
    "Baking Course in Kolkata, West Bengal. At Mejoria, we turn your passion for pastry into perfection with comprehensive training and exposure to global trends.",
  canonical: "https://mejoria.in",
  keywords: [
    "cake making classes near me",
    "pastry making classes online",
    "professional baking courses",
    "learn to bake cakes",
  ],
};

export default function Home() {
  return (
    <div>
      <Video />
      <FormHeader />
      <Services />
      <Faculty />
      <Partners />
      <Nurture />
      <ServiceWhy />
      <Testimonial />
      <TextLocReviews />
      <HomePageContent />
      <ContactUsMap />
    </div>
  );
}
