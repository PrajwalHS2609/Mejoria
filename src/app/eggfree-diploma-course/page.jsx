import EggFreeDiplomaContent from "./../../components/EggFreeDiploma/EggFreeDiplomaContent";
import EggFreeDiplomaHeader from "./../../components/EggFreeDiploma/EggFreeDiplomaHeader";
import EggFreeDiplomaIntro from "./../../components/EggFreeDiploma/EggFreeDiplomaIntro";
import EggFreeDiplomaFeature from "./../../components/EggFreeDiploma/EggFreeDiplomaFeature";
export const metadata = {
  title: "",
  description: "",
  canonical: "https://mejoria.in",
  keywords: [""],
};
export default function EggFreeDiploma() {
  return (
    <div>
      <EggFreeDiplomaHeader />
      <EggFreeDiplomaContent />
      <EggFreeDiplomaIntro />
      <EggFreeDiplomaFeature />
    </div>
  );
}
