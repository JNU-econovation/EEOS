import { useGetTeamBuildingResultQuery } from "@/hooks/query/useTeamBuildingQuery";
import TeamResultInfo from "./TeamResultInfo";

const TeamResultInfoContainer = () => {
  const { data: teamResult, isLoading } = useGetTeamBuildingResultQuery();

  if (isLoading) return null;

  return (
    <div className="flex h-full w-full flex-col gap-16 overflow-y-scroll scrollbar-hide">
      {teamResult.result.map((members, index) => (
        <TeamResultInfo key={index} index={index} members={members} />
      ))}
    </div>
  );
};

export default TeamResultInfoContainer;
