import { closeTeamBuilding, getTeamBuildingInfo } from "@/apis/teamBuilding";
import API from "@/constants/API";
import ROUTES from "@/constants/ROUTES";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const useGetTeamBuildingInfoQuery = () => {
  return useQuery({
    queryKey: [API.TEAM_BUILDING.DETAIL],
    queryFn: () => getTeamBuildingInfo(),
  });
};

export const useCloseTeamBuildingMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationKey: [API.TEAM_BUILDING.CLOSE],
    mutationFn: () => closeTeamBuilding(),
    onSuccess: () => {
      router.push(ROUTES.TEAM_BUILDING.RESULT);
    },
  });
};
