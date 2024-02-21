import Title from "@/components/common/Title";
import InputStatusInfoContainer from "@/components/teamBuildingDetail/inputStatus/InputStatusInfo.container";
import TeamBuildingInfo from "@/components/teamBuildingDetail/teamBuilding/TeamBuildingInfo";
import UserInputModalContainer from "@/components/teamBuildingDetail/userInputModal/UserInputModal.container";

const TeamBuildingDetailPage = () => {
  return (
    <div className="mb-16 space-y-16">
      <TeamBuildingInfo />
      {/* <InputStatusInfoContainer /> */}
      <UserInputModalContainer />
    </div>
  );
};

export default TeamBuildingDetailPage;
