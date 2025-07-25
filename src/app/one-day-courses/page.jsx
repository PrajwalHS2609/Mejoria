import OneDayCourseContent from "../../components/OneDayCourse/OneDayCourseContent";
import OneDayCourseHeader from "../../components/OneDayCourse/OneDayCourseHeader";
import OneDayCourseShort from "../../components/OneDayCourse/OneDayCourseShort";
export const metadata = {
  title: "",
  description: "",
  canonical: "https://mejoria.in",
  keywords: [""],
};
export default function OneDayCourse(){
    return(
        <div>
            <OneDayCourseHeader/>
            <OneDayCourseContent/>
            <OneDayCourseShort/>
        </div>
    )
}