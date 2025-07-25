import CakeMasteryHeader from "../../components/CakeMastery/CakeMasteryHeader";
import CakeMasteryContent from "../../components/CakeMastery/CakeMasteryContent";
import CakeMasteryHighlights from "../../components/CakeMastery/CakeMasteryHighlights";
import CakeMasteryLearn from "../../components/CakeMastery/CakeMasteryLearn";
import CakeMasteryWorks from "../../components/CakeMastery/CakeMasteryWorks";

export const metadata = {
  title:
    "Cake Mastery - Pastery & Baking Certification Course in Kolkata, West Bengal",
  description:
    "Cake Mastery - Pastery & Baking Certification Course in Kolkata, West Bengal. You’ll start with the essentials, including food safety, the science of baking perfect cakes, and creating egg-free masterpieces.",
  canonical: "https://mejoria.in/cake-mastery-baking-certification-course",
  keywords: [
    "cake making classes near me",
    "pastry making classes online",
    "professional baking courses",
    "learn to bake cakes",
  ],
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
