import EggFreeCertificationCareer from "../../components/EggFreeCertification/EggFreeCertificationCareer";
import EggFreeCertificationContent from "../../components/EggFreeCertification/EggFreeCertificationContent";
import EggFreeCertificationCourse from "../../components/EggFreeCertification/EggFreeCertificationCourse";
import EggFreeCertificationHeader from "../../components/EggFreeCertification/EggFreeCertificationHeader";
import ClassicCertificationFromCourse from "./../../components/ClassicCertification/ClassicCertificationFromCourse";

export default function EggFreeCertification() {
  return (
    <div>
      <EggFreeCertificationHeader />
      <EggFreeCertificationContent />
      <EggFreeCertificationCourse />
      <ClassicCertificationFromCourse />
      <EggFreeCertificationCareer />
    </div>
  );
}
