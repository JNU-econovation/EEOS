import API from "../constants/API";
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
    url: API.MEMBER.LIST,
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
  programId: number,
  activeStatus: ActiveStatus | "all",
) => {
  const { data } = await https<GetProgramMembersByActiveStatusResponse>({
    url: API.MEMBER.PROGRAM(programId),
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
  programId: number,
  attendStatus: AttendStatus,
) => {
  const { data } = await https<GetProgramMembersByAttendStatusResponse>({
    url: API.MEMBER.PROGRAM(programId),
    method: "GET",
    params: { attendStatus },
  });
  return data.data;
};
