import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
  CreateTeamBuildingRequest,
  TeamBuildingSentenceRequest,
  closeTeamBuilding,
  completeTeamBuilding,
  createTeamBuilding,
  deleteTeamBuilding,
  getTeamBuildingInfo,
  getTeamBuildingResult,
  getTeamBuildingValidation,
  getUserInputStatus,
  postTeamBuildingSentence,
  putTeamBuildingSentence,
} from "@/apis/teamBuilding";
import API from "@/constants/API";
import ERROR_CODE from "@/constants/ERROR_CODE";
import ROUTES from "@/constants/ROUTES";

// TODO: option 받는 부분 수정하기
export const useGetIsCreableQuery = (enabled: boolean) => {
  return useQuery({
    queryKey: [API.TEAM_BUILDING.VALIDATE, "creatable"],
    queryFn: () => getTeamBuildingValidation({ status: "creatability" }),
    enabled,
  });
};

// TODO: option 받는 부분 수정하기
export const useGetIsJoinableQuery = (enabled: boolean) => {
  return useQuery({
    queryKey: [API.TEAM_BUILDING.VALIDATE, "joinable"],
    queryFn: () => getTeamBuildingValidation({ status: "joinability" }),
    enabled,
  });
};

export const useCreateTeamBuildingMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationKey: [API.TEAM_BUILDING.CREATE],
    mutationFn: (data: CreateTeamBuildingRequest) => createTeamBuilding(data),
    onSettled: () => {
      router.push(ROUTES.TEAM_BUILDING.DETAIL);
    },
  });
};

// FIXME: 에러 처리 수정하기
export const useGetTeamBuildingInfoQuery = () => {
  return useQuery({
    queryKey: [API.TEAM_BUILDING.DETAIL],
    queryFn: () => getTeamBuildingInfo(),
    onError: (
      error: AxiosError<{ code: string; message: string; status: string }>,
    ) => {
      const { response } = error;
      const errorCode = response?.data?.code;
      if (errorCode === ERROR_CODE.TEAM_BUILDING.COMPLETED) {
        window.location.href = ROUTES.TEAM_BUILDING.RESULT;
      }
    },
  });
};

export const usePostSentenceMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [API.TEAM_BUILDING.SENTENCE],
    mutationFn: ({ content }: TeamBuildingSentenceRequest) =>
      postTeamBuildingSentence({ content }),
    onSettled: () => {
      queryClient.invalidateQueries([API.TEAM_BUILDING.INPUT_STATUS]);
    },
  });
};

export const usePutSentenceMutation = () => {
  const QueryClient = useQueryClient();
  return useMutation({
    mutationKey: [API.TEAM_BUILDING.SENTENCE],
    mutationFn: ({ content }: TeamBuildingSentenceRequest) =>
      putTeamBuildingSentence({ content }),
    onSettled: () => {
      QueryClient.invalidateQueries([API.TEAM_BUILDING.INPUT_STATUS]);
    },
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

export const useDeleteTeamBuildingMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationKey: [API.TEAM_BUILDING.DELETE],
    mutationFn: () => deleteTeamBuilding(),
    onSuccess: () => {
      router.push(ROUTES.MAIN);
    },
  });
};
