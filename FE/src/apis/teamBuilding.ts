import API from "@/constants/API";
import { https } from "./instance";
import { toast } from "react-toastify";
import MESSAGE from "@/constants/MESSAGE";
import {
  TeamBuildingIdDto,
  TeamBuildingInfoDto,
  TeamBuildingResultListDto,
  UserInputStatusInfoDto,
} from "./dtos/teamBuilding.dto";

/**
 * 팀빌딩 생성 가능한지 확인
 */
export const getIsTeamBuildingCreatable = async () => {
  const { status } = await toast.promise(
    https({
      url: API.TEAM_BUILDING.CREATABLE,
      method: "GET",
    }),
    {
      error: MESSAGE.TEAM_BUILDING.INCREATABLE,
    },
  );
  return status === 200;
};

/**
 * 팀빌딩 생성
 */

export interface CreateTeamBuildingRequest {
  title: string;
  content: string;
  minTeamSize: number;
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
  });

  return new TeamBuildingInfoDto(data?.data);
};

/**
 * 팀빌딩 문장 입력
 */

export const postTeamBuildingSentence = async (data: { sentence: string }) => {
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

export const putTeamBuildingSentence = async (data: { sentence: string }) => {
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
      method: "POST",
    }),
    {
      pending: MESSAGE.DELETE.PENDING,
      success: MESSAGE.DELETE.SUCCESS,
      error: MESSAGE.DELETE.FAILED,
    },
  );
};
