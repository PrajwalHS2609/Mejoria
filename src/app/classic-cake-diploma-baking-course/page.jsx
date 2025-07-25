import ClassicDiplomaContent from "../../components/ClassicDiploma/ClassicDiplomaContent";
import ClassicDiplomaHeading from "../../components/ClassicDiploma/ClassicDiplomaHeader";
import EggFreeDiplomaIntro from "../../components/EggFreeDiploma/EggFreeDiplomaIntro";
import EggFreeDiplomaFeature from "../../components/EggFreeDiploma/EggFreeDiplomaFeature";
export const metadata = {
  title: "Classic Pastry & Baking Diploma Course in Kolkata, West Bengal",
  description:
    "Classic Pastry & Baking Diploma Course in Kolkata, West Bengal. Classroom instruction is paired with industrial training to ensure a smooth transition from student to professional baker, pâtissier, or chocolatier.",
  canonical: "https://mejoria.in/classic-cake-diploma-baking-course",
  keywords: [
    "cake making classes near me",
    "pastry making classes online",
    "professional baking courses",
    "learn to bake cakes",
  ],
};
export default function ClassicDiploma() {
  return (
    <div>
      <ClassicDiplomaHeading />
      <ClassicDiplomaContent />
      <EggFreeDiplomaIntro />
      <EggFreeDiplomaFeature />
    </div>
  );
}
