import React, { Suspense } from "react";
import Video from "./Video/Video";
import Services from "./Services/Services";
import Members from "./Members/Members";
import OurSalon from "./OurSalon/OurSalon";
import Partners from "./FromCourse/FromCourse";
import ServiceWhy from "./../MainServicePages/ServiceWhy/ServiceWhy";
import TextLocReviews from "./../TextLocReviews/TextLocReviews";
const InstaFeed = React.lazy(() => import("./InstaFeed/InstaFeed"));

const HomePage = () => {
  return (
    <div>
      <Video />
      <Services />
      {/* <Style />
      <About /> */}
      <Members />
      {/* <Work /> */}
      <OurSalon />
      <Partners />
      <Suspense fallback={<p>Loading....</p>}>
        <InstaFeed />
      </Suspense>
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      {/* <HomeBlog />
      <HomeRead /> */}
    </div>
  );
};

export default HomePage;
