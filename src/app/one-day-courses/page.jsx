import OneDayCourseContent from "../../components/OneDayCourse/OneDayCourseContent";
import OneDayCourseHeader from "../../components/OneDayCourse/OneDayCourseHeader";
import OneDayCourseShort from "../../components/OneDayCourse/OneDayCourseShort";

export default function OneDayCourse(){
    return(
        <div>
            <OneDayCourseHeader/>
            <OneDayCourseContent/>
            <OneDayCourseShort/>
        </div>
    )
}