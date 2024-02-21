import {
  CreateTeamBuildingRequest,
  TeamBuildingSentenceRequest,
  closeTeamBuilding,
  completeTeamBuilding,
  createTeamBuilding,
  getTeamBuildingInfo,
  getTeamBuildingResult,
  getTeamBuildingValidation,
  getUserInputStatus,
  postTeamBuildingSentence,
  putTeamBuildingSentence,
} from "@/apis/teamBuilding";
import API from "@/constants/API";
import ROUTES from "@/constants/ROUTES";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useGetIsCreableQuery = () => {
  return useQuery({
    queryKey: [API.TEAM_BUILDING.VALIDATE, "creatable"],
    queryFn: () => getTeamBuildingValidation({ status: "creatable" }),
    enabled: false,
  });
};

export const useGetIsJoinableQuery = () => {
  return useQuery({
    queryKey: [API.TEAM_BUILDING.VALIDATE, "joinable"],
    queryFn: () => getTeamBuildingValidation({ status: "joinable" }),
    enabled: false,
  });
};

export const useCreateTeamBuildingMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationKey: [API.TEAM_BUILDING.CREATE],
    mutationFn: (data: CreateTeamBuildingRequest) => createTeamBuilding(data),
    onSuccess: () => {
      router.push(ROUTES.TEAM_BUILDING.DETAIL);
    },
  });
};

export const useGetTeamBuildingInfoQuery = () => {
  return useQuery({
    queryKey: [API.TEAM_BUILDING.DETAIL],
    queryFn: () => getTeamBuildingInfo(),
  });
};

export const usePostSentenceMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [API.TEAM_BUILDING.SENTENCE],
    mutationFn: ({ sentence }: TeamBuildingSentenceRequest) =>
      postTeamBuildingSentence({ sentence }),
    onSettled: () => {
      queryClient.invalidateQueries([API.TEAM_BUILDING.INPUT_STATUS]);
    },
  });
};

export const usePutSentenceMutation = () => {
  return useMutation({
    mutationKey: [API.TEAM_BUILDING.SENTENCE],
    mutationFn: ({ sentence }: TeamBuildingSentenceRequest) =>
      putTeamBuildingSentence({ sentence }),
  });
};

export const useGetUserInputStatusQuery = () => {
  return useQuery({
    queryKey: [API.TEAM_BUILDING.INPUT_STATUS],
    queryFn: () => getUserInputStatus(),
  });
};

export const useGetTeamBuildingResultQuery = () => {
  return useQuery({
    queryKey: [API.TEAM_BUILDING.RESULT],
    queryFn: () => getTeamBuildingResult(),
  });
};

export const useCompleteTeamBuildingMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationKey: [API.TEAM_BUILDING.COMPLETE],
    mutationFn: () => completeTeamBuilding(),
    onSuccess: () => {
      router.push(ROUTES.TEAM_BUILDING.RESULT);
    },
  });
};

export const useCloseTeamBuildingMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationKey: [API.TEAM_BUILDING.CLOSE],
    mutationFn: () => closeTeamBuilding(),
    onSuccess: () => {
      router.push(ROUTES.MAIN);
    },
  });
};
