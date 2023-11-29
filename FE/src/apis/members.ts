import {
  ActiveStatus,
  AttendStatus,
  MemberActiveStatusInfo,
  MemberAttendStatusInfo,
  MemberInfo,
} from "../types/member";
import { https } from ".";

/**
 * 활동 상태별 회원 정보 조회
 */

interface GetMembersByActiveStatusResponse {
  data: { members: MemberActiveStatusInfo[] };
}

export const getMembersByActiveStatus = async (
  activeStatus: ActiveStatus | "all",
) => {
  const { data } = await https<GetMembersByActiveStatusResponse>({
    url: "members",
    method: "GET",
    params: { activeStatus },
  });

  return data.data;
};

/**
 * 해당 프로그램의 활동 상태별 회원 정보 조회
 */

interface GetProgramMembersByActiveStatusResponse {
  data: { members: MemberInfo[] };
}

export const getProgramMembersByActiveStatus = async (
  programId: string,
  activeStatus: ActiveStatus | "all",
) => {
  const { data } = await https<GetProgramMembersByActiveStatusResponse>({
    url: `programs/${programId}/members`,
    method: "GET",
    params: { activeStatus },
  });

  return data.data;
};

/**
 * 해당 프로그램의 출석 상태별 회원 정보 조회
 */

interface GetProgramMembersByAttendStatusResponse {
  data: { members: MemberAttendStatusInfo[] };
}

export const getProgramMembersByAttendStatus = async (
  programId: string,
  attendStatus: AttendStatus,
) => {
  const { data } = await https<GetProgramMembersByAttendStatusResponse>({
    url: `programs/${programId}/members`,
    method: "GET",
    params: { attendStatus },
  });
  return data.data;
};

// TODO: 프로그램 대상자 선정 & 사용자 출석 정보 변경 api 나오면 추가
