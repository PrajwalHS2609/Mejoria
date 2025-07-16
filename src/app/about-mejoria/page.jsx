import AboutUsHeader from "./../../components/AboutUs/AboutUsHeader";
import WhyChoose from "./../../components/WhyChoose/WhyChoose";
import AboutUsCareer from "./../../components/AboutUs/AboutUsCareer";
import Faculty from "@/components/HomePage/Faculty/Faculty";
import AboutUsEmpower from "./../../components/AboutUs/AboutUsEmpower";
import AboutUsContent from "./../../components/AboutUs/AboutUsContent";
export default function AboutUs() {
  return (
    <div>
      <AboutUsHeader />
      <AboutUsContent />
      <AboutUsEmpower />
      <WhyChoose />
      <AboutUsCareer />
      <Faculty />
    </div>
  );
}
