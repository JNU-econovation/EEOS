import { toast } from "react-toastify";
import { StatusType } from "./../types/teamBuilding";
import {
  TeamBuildingIdDto,
  TeamBuildingInfoDto,
  TeamBuildingResultListDto,
  TeamBuildingStatusDto,
  UserInputStatusInfoDto,
} from "./dtos/teamBuilding.dto";
import { https } from "./instance";
import API from "@/constants/API";
import MESSAGE from "@/constants/MESSAGE";

/**
 * 팀빌딩 생성/참여 가능한지 확인
 */

interface GetTeamBuildingCreatableRequest {
  status: StatusType;
}

export const getTeamBuildingValidation = async ({
  status,
}: GetTeamBuildingCreatableRequest) => {
  const { data } = await https({
    url: API.TEAM_BUILDING.VALIDATE,
    method: "GET",
    params: { status },
  });

  return new TeamBuildingStatusDto(data?.data);
};

/**
 * 팀빌딩 생성
 */

export interface CreateTeamBuildingRequest {
  title: string;
  content: string;
  maxTeamSize: number;
  members: { memberId: number }[];
}

export const createTeamBuilding = async (
  body: CreateTeamBuildingRequest,
): Promise<TeamBuildingIdDto> => {
  const { data } = await toast.promise(
    https({
      url: API.TEAM_BUILDING.CREATE,
      method: "POST",
      data: body,
    }),
    {
      pending: MESSAGE.CREATE.PENDING,
      success: MESSAGE.CREATE.SUCCESS,
      error: MESSAGE.CREATE.FAILED,
    },
  );

  return new TeamBuildingIdDto(data?.data);
};

/**
 * 팀빌딩 정보 조회
 */

export const getTeamBuildingInfo = async (): Promise<TeamBuildingInfoDto> => {
  const { data } = await https({
    url: API.TEAM_BUILDING.DETAIL,
    method: "GET",
    params: { status: "progress" },
  });

  return new TeamBuildingInfoDto(data?.data);
};

/**
 * 팀빌딩 문장 입력
 */

export interface TeamBuildingSentenceRequest {
  content: string;
}

export const postTeamBuildingSentence = async (
  data: TeamBuildingSentenceRequest,
) => {
  await toast.promise(
    https({
      url: API.TEAM_BUILDING.SENTENCE,
      method: "POST",
      data,
    }),
    {
      pending: MESSAGE.CREATE.PENDING,
      success: MESSAGE.CREATE.SUCCESS,
      error: MESSAGE.CREATE.FAILED,
    },
  );
};

/**
 * 팀빌딩 문장 수정
 */

export const putTeamBuildingSentence = async (
  data: TeamBuildingSentenceRequest,
) => {
  await toast.promise(
    https({
      url: API.TEAM_BUILDING.SENTENCE,
      method: "PUT",
      data,
    }),
    {
      pending: MESSAGE.EDIT.PENDING,
      success: MESSAGE.EDIT.SUCCESS,
      error: MESSAGE.EDIT.FAILED,
    },
  );
};

/**
 * 본인의 문장 입력 상태 조회
 */

export const getUserInputStatus = async (): Promise<UserInputStatusInfoDto> => {
  const { data } = await https({
    url: API.TEAM_BUILDING.INPUT_STATUS,
    method: "GET",
  });

  return new UserInputStatusInfoDto(data?.data);
};

/**
 * 팀빌딩 완료하기
 */

export const completeTeamBuilding = async () => {
  await toast.promise(
    https({
      url: API.TEAM_BUILDING.COMPLETE,
      method: "POST",
    }),
    {
      pending: MESSAGE.COMPLATE.PENDING,
      success: MESSAGE.COMPLATE.SUCCESS,
      error: MESSAGE.COMPLATE.FAILED,
    },
  );
};

/**
 * 팀빌딩 결과 조회
 */

export const getTeamBuildingResult =
  async (): Promise<TeamBuildingResultListDto> => {
    const { data } = await https({
      url: API.TEAM_BUILDING.RESULT,
      method: "GET",
    });

    return new TeamBuildingResultListDto(data?.data);
  };

/**
 * 팀빌딩 종료
 */

export const closeTeamBuilding = async () => {
  await toast.promise(
    https({
      url: API.TEAM_BUILDING.CLOSE,
      method: "DELETE",
    }),
    {
      pending: MESSAGE.DELETE.PENDING,
      success: MESSAGE.DELETE.SUCCESS,
      error: MESSAGE.DELETE.FAILED,
    },
  );
};

/**
 * 팀빌딩 삭제
 */

export const deleteTeamBuilding = async () => {
  await toast.promise(
    https({
      url: API.TEAM_BUILDING.DELETE,
      method: "DELETE",
    }),
    {
      pending: MESSAGE.DELETE.PENDING,
      success: MESSAGE.DELETE.SUCCESS,
      error: MESSAGE.DELETE.FAILED,
    },
  );
};
