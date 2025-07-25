import OneDayCourseContent from "../../components/OneDayCourse/OneDayCourseContent";
import OneDayCourseHeader from "../../components/OneDayCourse/OneDayCourseHeader";
import OneDayCourseShort from "../../components/OneDayCourse/OneDayCourseShort";
export const metadata = {
  title: "One Day Cake Pastry & Baking Class in Kolkata, West Bengal",
  description:
    "One Day Cake Pastry & Baking Course in Kolkata, West Bengal. You’ll start with the essentials, including food safety, the science of baking perfect cakes, and creating egg-free masterpieces.",
  canonical: "https://mejoria.in/one-day-cake-pastry-and-baking-class",
  keywords: [
    "cake making classes near me",
    "pastry making classes online",
    "professional baking courses",
    "learn to bake cakes",
  ],
};
export default function OneDayCourse() {
  return (
    <div>
      <OneDayCourseHeader />
      <OneDayCourseContent />
      <OneDayCourseShort />
    </div>
  );
}
