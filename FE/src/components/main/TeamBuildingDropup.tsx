import Image from "next/image";
import Dropup from "../common/Dropup";
import { useRouter } from "next/navigation";

const TeamBuildingDropup = () => {
  const router = useRouter();

  const TITLE = "AI 팀빌딩";
  const ITEMS = [
    {
      text: "팀빌딩 생성하기",
      onClick: () => {
        router.push("/team-building/create");
      },
    },
    {
      text: "팀빌딩 참여하기",
      onClick: () => {
        router.push("/team-building/detail");
      },
    },
  ];
  return (
    <Dropup title={TITLE} items={ITEMS}>
      <Image src="/icons/robot.svg" alt="팀빌딩 로봇" width={28} height={28} />
    </Dropup>
  );
};

export default TeamBuildingDropup;
