import { toast } from "react-toastify";
import API from "../constants/API";
import { ActiveStatus, AttendStatus } from "../types/member";
import {
  UserActiveStatusInfoDto,
  UserAttendStatusInfoDto,
} from "./dtos/user.dto";
import { https } from "./instance";
import MESSAGE from "@/constants/MESSAGE";

/**
 * 본인의 출석 상태 조회
 */

export const getMyAttendStatus = async (
  programId: number,
): Promise<UserAttendStatusInfoDto> => {
  const { data } = await https({
    url: API.USER.ATTEND_STATUS(programId),
    method: "GET",
  });
  return new UserAttendStatusInfoDto(data?.data);
};

/**
 * 본인의 출석 상태 변경
 */

export interface PutMyAttendStatusRequest {
  beforeAttendStatus: AttendStatus;
  afterAttendStatus: AttendStatus;
}

export const putMyAttendStatus = async (
  programId: number,
  body: PutMyAttendStatusRequest,
): Promise<UserAttendStatusInfoDto> => {
  const { data } = await toast.promise(
    https({
      url: API.USER.ATTEND_STATUS(programId),
      method: "PUT",
      data: body,
    }),
    {
      pending: MESSAGE.EDIT.PENDING,
      success: MESSAGE.EDIT.SUCCESS,
      error: MESSAGE.EDIT.FAILED,
    },
  );
  return new UserAttendStatusInfoDto(data?.data);
};

/**
 * 본인의 회원 상태 조회
 */

export const getMyActiveStatus = async (): Promise<UserActiveStatusInfoDto> => {
  const { data } = await https({
    url: API.USER.ACTIVE_STATUS,
    method: "GET",
  });
  return new UserActiveStatusInfoDto(data?.data);
};

/**
 * 본인의 회원 상태 변경
 */

interface PutMyActiveStatusRequest {
  activeStatus: ActiveStatus;
}

export const putMyActiveStatus = async (
  body: PutMyActiveStatusRequest,
): Promise<UserActiveStatusInfoDto> => {
  const { data } = await toast.promise(
    https({
      url: API.USER.ACTIVE_STATUS,
      method: "PUT",
      data: body,
    }),
    {
      pending: MESSAGE.EDIT.PENDING,
      success: MESSAGE.EDIT.SUCCESS,
      error: MESSAGE.EDIT.FAILED,
    },
  );
  return new UserActiveStatusInfoDto(data?.data);
};
