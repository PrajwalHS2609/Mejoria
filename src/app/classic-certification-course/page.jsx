import AboutUsCareer from "@/components/AboutUs/AboutUsCareer";
import ClassicCertificationHeader from "./../../components/ClassicCertification/ClassicCertificationHeader";
import ClassicCertificationContent from "./../../components/ClassicCertification/ClassicCertificationContent";
import ClassicCertificationCourse from "./../../components/ClassicCertification/ClassicCertificationCourse";
import ClassicCertificationFromCourse from "./../../components/ClassicCertification/ClassicCertificationFromCourse";

export default function ClassicCertification() {
  return (
    <div>
      <ClassicCertificationHeader />
      <ClassicCertificationContent />
      <ClassicCertificationCourse />
      <ClassicCertificationFromCourse />
      <AboutUsCareer />
    </div>
  );
}
