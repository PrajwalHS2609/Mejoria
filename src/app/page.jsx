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

export const metadata = {
  title: "",
  description: "",
  canonical: "https://mejoria.in",
  keywords: [""],
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
    </div>
  );
}
