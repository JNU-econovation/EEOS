import Title from "@/components/common/Title";
import TeamBuildingCreateForm from "@/components/teamBuildingCreate/TeamBuildingCreateForm";

const TeamBuildingCreatePage = () => {
  return (
    <>
      <div className="space-y-12">
        <Title text="팀빌딩 생성" />
        <TeamBuildingCreateForm />
      </div>
    </>
  );
};

export default TeamBuildingCreatePage;
