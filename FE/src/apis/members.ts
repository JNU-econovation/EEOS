import API from "../constants/API";
import { ActiveStatus, AttendStatus } from "../types/member";
import {
  MemberActiveStatusListDto,
  MemberAttendStatusListDto,
  MemberListDto,
} from "./dtos/member.dto";
import { https } from ".";

/**
 * 활동 상태별 회원 정보 조회
 */

export const getMembersByActiveStatus = async (
  activeStatus: ActiveStatus | "all",
) => {
  const { data } = await https({
    url: API.MEMBER.LIST,
    method: "GET",
    params: { activeStatus },
  });

  return new MemberActiveStatusListDto(data.data);
};

/**
 * 해당 프로그램의 활동 상태별 회원 정보 조회
 */

export const getProgramMembersByActiveStatus = async (
  programId: number,
  activeStatus: ActiveStatus | "all",
) => {
  const { data } = await https({
    url: API.MEMBER.PROGRAM(programId),
    method: "GET",
    params: { activeStatus },
  });

  return new MemberListDto(data.data);
};

/**
 * 해당 프로그램의 출석 상태별 회원 정보 조회
 */

export const getProgramMembersByAttendStatus = async (
  programId: number,
  attendStatus: AttendStatus,
) => {
  const { data } = await https({
    url: API.MEMBER.PROGRAM(programId),
    method: "GET",
    params: { attendStatus },
  });
  return new MemberAttendStatusListDto(data.data);
};
