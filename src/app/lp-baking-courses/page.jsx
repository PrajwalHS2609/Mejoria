  import LandingHeader from "../../components/LandingPage/LandingHeader/LandingHeader";
import Video from "./../../components/HomePage/Video/Video";
import LandingCourse from "../../components/LandingPage/LandingCourse/LandingCourse";
import LpForm from './../../components/LandingPage/LpForm/LpForm';
import LandingCourse2 from './../../components/LandingPage2/LandingCourse2';
export const metadata = {
  title: "",
  description: "",
  canonical: "https://mejoria.in",
  keywords: [""],
};
export default function LandingPage() {
  return (
    <div>
      <Video />
      <LpForm />
      <LandingCourse2 />
    </div>
  );
}
