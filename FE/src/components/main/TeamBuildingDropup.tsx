import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Dropup from "../common/Dropup";
import ERROR_CODE from "@/constants/ERROR_CODE";
import ERROR_MESSAGE from "@/constants/ERROR_MESSAGE";
import ROUTES from "@/constants/ROUTES";
import {
  useGetIsCreableQuery,
  useGetIsJoinableQuery,
} from "@/hooks/query/useTeamBuildingQuery";

const TeamBuildingDropup = () => {
  const router = useRouter();
  const { refetch: refetchCreatable } = useGetIsCreableQuery(false);
  const { refetch: refetchJoinable } = useGetIsJoinableQuery(false);

  const TITLE = "AI 팀빌딩";
  const ITEMS = [
    {
      text: "팀빌딩 생성하기",
      onClick: async () => {
        const latestCreatable = (await refetchCreatable()).data;
        if (latestCreatable.status !== "creatable") {
          toast.error(
            ERROR_MESSAGE[ERROR_CODE.TEAM_BUILDING.NOT_CREATABLE].message,
          );
          return;
        }
        router.push(ROUTES.TEAM_BUILDING.CREATE);
      },
    },
    {
      text: "팀빌딩 참여하기",
      onClick: async () => {
        const latestJoinable = (await refetchJoinable()).data;
        if (latestJoinable.status !== "joinable") {
          toast.error(
            ERROR_MESSAGE[ERROR_CODE.TEAM_BUILDING.NOT_JOINABLE].message,
          );
          return;
        }
        router.push(ROUTES.TEAM_BUILDING.DETAIL);
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
