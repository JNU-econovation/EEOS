"use client";

import Title from "@/components/common/Title";
import TeamBuildingCreateForm from "@/components/teamBuildingCreate/TeamBuildingCreateForm";
import ERROR_CODE from "@/constants/ERROR_CODE";
import ERROR_MESSAGE from "@/constants/ERROR_MESSAGE";
import ROUTES from "@/constants/ROUTES";
import { useGetIsCreableQuery } from "@/hooks/query/useTeamBuildingQuery";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

const TeamBuildingCreatePage = () => {
  const router = useRouter();
  const { data: creatable, isLoading } = useGetIsCreableQuery();

  isLoading && <div>로딩중...</div>;

  if (!creatable) {
    toast.error(ERROR_MESSAGE[ERROR_CODE.TEAM_BUILDING.NOT_CREATABLE].message);
    router.push(ROUTES.MAIN);
  }

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
