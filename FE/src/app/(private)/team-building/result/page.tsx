"use client";

import Title from "@/components/common/Title";
import TeamBuildingCloseBtn from "@/components/teamBuildingResult/TeamBuildingCloseBtn";
import TeamResultInfoContainer from "@/components/teamBuildingResult/TeamResultInfo.container";

const TeamBuildingResultPage = () => {
  return (
    <div className="flex h-[75vh] w-full flex-col gap-12 sm:flex-row lg:gap-20">
      <div className="flex min-w-[12rem] flex-col gap-4 sm:h-full sm:justify-between">
        <Title text="팀빌딩 결과" />
        <TeamBuildingCloseBtn />
      </div>
      <TeamResultInfoContainer />
    </div>
  );
};

export default TeamBuildingResultPage;
