"use client";

import { useRouter } from "next/navigation";
import TeamBuildingDetail from "./TeamBuildingDetail";
import TeamBuildingHeader from "./TeamBuildingHeader";
import { useGetTeamBuildingInfoQuery } from "@/hooks/query/useTeamBuildingQuery";
import LoadingSpinner from "@/components/common/LoadingSpinner";

const TeamBuildingInfo = () => {
  const { data: teamBuildingData, isLoading } = useGetTeamBuildingInfoQuery();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="space-y-8">
      <TeamBuildingHeader
        title={teamBuildingData.title}
        accessRight={teamBuildingData.accessRight}
      />
      <TeamBuildingDetail content={teamBuildingData.content} />
    </section>
  );
};

export default TeamBuildingInfo;
