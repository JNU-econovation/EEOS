import Button from "../common/Button";

const TeamBuildingCloseBtn = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="font-medium text-gray-30">
          또 다른 팀빌딩을 위해서, 꼭 팀빌딩을 종료해주세요!
        </p>
        <p className="font-bold text-gray-40">*팀빌딩은 저장되지 않습니다.</p>
      </div>
      <Button size="lg" className="font-bold">
        팀빌딩 종료하기
      </Button>
    </div>
  );
};
export default TeamBuildingCloseBtn;
