import API from "../constants/API";
import {
  ActiveStatusWithAll,
  AttendStatus,
  MemberActiveStatusInfo,
  MemberAttendStatusInfo,
  MemberInfo,
} from "../types/member";
import {
  MemberActiveStatusInfoDto,
  MemberAttendStatusInfoDto,
  MemberInfoDto,
} from "./dtos/member.dto";
import { https } from "./instance";

/**
 * 활동 상태별 회원 정보 조회
 */

export const getMembersByActiveStatus = async (
  activeStatus: ActiveStatusWithAll,
): Promise<MemberActiveStatusInfoDto[]> => {
  const { data } = await https({
    url: API.MEMBER.LIST,
    method: "GET",
    params: { activeStatus },
  });

  return data.data.members.map(
    (member: MemberActiveStatusInfo) => new MemberActiveStatusInfoDto(member),
  );
};

/**
 * 해당 프로그램의 활동 상태별 회원 정보 조회
 */

export const getProgramMembersByActiveStatus = async (
  programId: number,
  activeStatus: ActiveStatusWithAll,
): Promise<MemberInfoDto[]> => {
  const { data } = await https({
    url: API.MEMBER.ACTIVE_STATUS(programId),
    method: "GET",
    params: { activeStatus },
  });

  return data.data.members.map(
    (member: MemberInfo) => new MemberInfoDto(member),
  );
};

/**
 * 해당 프로그램의 출석 상태별 회원 정보 조회
 */

export const getProgramMembersByAttendStatus = async (
  programId: number,
  attendStatus: AttendStatus,
): Promise<MemberAttendStatusInfoDto[]> => {
  const { data } = await https({
    url: API.MEMBER.ATTEND_STATUS(programId),
    method: "GET",
    params: { attendStatus },
  });

  return data.data.members.map(
    (member: MemberAttendStatusInfo) => new MemberAttendStatusInfoDto(member),
  );
};
