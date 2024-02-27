import Button from "../common/Button";
import { useCloseTeamBuildingMutation } from "@/hooks/query/useTeamBuildingQuery";

const TeamBuildingCloseBtn = () => {
  const { mutate: closeTeamBuilding } = useCloseTeamBuildingMutation();

  const handleCloseButtonClick = () => {
    if (
      confirm(
        "팀빌딩 결과는 저장되지 않습니다. 정말 팀빌딩을 종료하시겠습니까? ",
      )
    ) {
      closeTeamBuilding();
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="font-medium text-gray-30">
          또 다른 팀빌딩을 위해서, 꼭 팀빌딩을 종료해주세요!
        </p>
        <p className="font-bold text-gray-40">*팀빌딩은 저장되지 않습니다.</p>
      </div>
      <Button size="lg" className="font-bold" onClick={handleCloseButtonClick}>
        팀빌딩 종료하기
      </Button>
    </div>
  );
};
export default TeamBuildingCloseBtn;
