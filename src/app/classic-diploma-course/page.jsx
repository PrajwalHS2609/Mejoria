import ClassicDiplomaContent from "../../components/ClassicDiploma/ClassicDiplomaContent";
import ClassicDiplomaHeading from "../../components/ClassicDiploma/ClassicDiplomaHeader";
import EggFreeDiplomaIntro from './../../components/EggFreeDiploma/EggFreeDiplomaIntro';
import EggFreeDiplomaFeature from './../../components/EggFreeDiploma/EggFreeDiplomaFeature';
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
