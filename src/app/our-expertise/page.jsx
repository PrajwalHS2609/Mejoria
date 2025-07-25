  import ServiceWhy from "@/components/HomePage/ServiceWhy/ServiceWhy";
import CoursePrice from "../../components/Expertise/CoursePrice";
export const metadata = {
  title: "",
  description: "",
  canonical: "https://mejoria.in",
  keywords: [""],
};
export default function Expertise() {
  return (
    <div>
      <ServiceWhy />
      <CoursePrice />
    </div>
  );
}
