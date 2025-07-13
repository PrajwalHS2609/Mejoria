import Video from "./../components/HomePage/Video/Video";
import Services from "./../components/HomePage/Services/Services";
import Members from "./../components/HomePage/Members/Members";
import OurSalon from "./../components/HomePage/OurSalon/OurSalon";
import InstaFeed from "./../components/HomePage/InstaFeed/InstaFeed";
import ServiceWhy from "./../components/HomePage/ServiceWhy/ServiceWhy";
import Partners from "../components/HomePage/FromCourse/FromCourse";
import HelpNearYou from "./../components/HomePage/Help/HelpNearYou";
import TextLocReviews from "./../components/HomePage/TextLocReviews/TextLocReviews";
import About from "./../components/HomePage/About/About";
import Nurture from "./../components/HomePage/Nurture/Nurture";
import Faculty from "./../components/HomePage/Faculty/Faculty";
import FormHeader from './../components/Form/FormHeader';
export default function Home() {
  return (
    <div>
      <Video />
      <FormHeader/>
      <Services />
      <Faculty />
      <Partners />
      {/* <About /> */}
      <Nurture />
      <ServiceWhy />
      {/* <Members /> */}
      {/* <OurSalon /> */}
      {/* <InstaFeed /> */}
      {/* <HelpNearYou /> */}
      <TextLocReviews />
    </div>
  );
}
