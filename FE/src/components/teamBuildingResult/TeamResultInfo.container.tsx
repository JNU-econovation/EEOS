import TeamResultInfo from "./TeamResultInfo";
import { useGetTeamBuildingResultQuery } from "@/hooks/query/useTeamBuildingQuery";

interface TeamResultInfoContainerProps {
  teamResult: ReturnType<typeof useGetTeamBuildingResultQuery>["data"];
}

const TeamResultInfoContainer = ({
  teamResult,
}: TeamResultInfoContainerProps) => {
  return (
    <div className="flex h-full w-full flex-col gap-16 overflow-y-scroll scrollbar-hide">
      {teamResult.result.map((members, index) => (
        <TeamResultInfo key={index} index={index} members={members} />
      ))}
    </div>
  );
};

export default TeamResultInfoContainer;
