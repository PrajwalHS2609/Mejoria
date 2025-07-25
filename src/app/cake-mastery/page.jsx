import CakeMasteryHeader from "./../../components/CakeMastery/CakeMasteryHeader";
import CakeMasteryContent from "./../../components/CakeMastery/CakeMasteryContent";
import CakeMasteryHighlights from "./../../components/CakeMastery/CakeMasteryHighlights";
import CakeMasteryLearn from "./../../components/CakeMastery/CakeMasteryLearn";
import CakeMasteryWorks from "./../../components/CakeMastery/CakeMasteryWorks";

export const metadata = {
  title: "",
  description: "",
  canonical: "https://mejoria.in",
  keywords: [""],
};
export default function CakeMastery() {
  return (
    <div>
      <CakeMasteryHeader />
      <CakeMasteryContent />
      <CakeMasteryHighlights />
      <CakeMasteryLearn />
      <CakeMasteryWorks />
    </div>
  );
}
