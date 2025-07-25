import MasterClassContent from "../../components/MasterClass/MasterClassContent";
import MasterClassCourse from "../../components/MasterClass/MasterClassCourse";
import MasterClassHeader from "../../components/MasterClass/MasterClassHeader";
export const metadata = {
  title: "",
  description: "",
  canonical: "https://mejoria.in",
  keywords: [""],
};
export default function MasterClass() {
  return (
    <div>
      <MasterClassHeader />
      <MasterClassContent />
      <MasterClassCourse/>
    </div>
  );
}
