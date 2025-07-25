import WhoWeAreContent from "../../components/WhoWeAre/WhoWeAreContent";
import WhoWeAreHeader from "../../components/WhoWeAre/WhoWeAreHeader";
import WhyChoose from "./../../components/WhyChoose/WhyChoose";
export const metadata = {
  title: "",
  description: "",
  canonical: "https://mejoria.in",
  keywords: [""],
};
export default function WhoWeAre() {
  return (
    <div>
      <WhoWeAreHeader />
      <WhoWeAreContent />
      <WhyChoose />
    </div>
  );
}
