import API from "../constants/API";
import {
  ActiveStatus,
  AttendStatus,
  MyActiveStatusInfo,
  MyAttendStatusInfo,
} from "../types/member";
import { https } from ".";

/**
 * 본인의 출석 상태 조회
 */

interface GetMyAttendStatusResponse {
  data: MyAttendStatusInfo;
}

export const getMyAttendStatus = async (programId: number) => {
  const { data } = await https<GetMyAttendStatusResponse>({
    url: API.USER.ATTEND_STATUS(programId),
    method: "GET",
  });
  return data.data;
};

/**
 * 본인의 출석 상태 변경
 */

interface PutMyAttendStatusRequest {
  beforeAttendStatus: AttendStatus;
  afterAttendStatus: AttendStatus;
}

export const putMyAttendStatus = async (
  programId: number,
  body: PutMyAttendStatusRequest,
) => {
  const { data } = await https({
    url: API.USER.ATTEND_STATUS(programId),
    method: "PUT",
    data: body,
  });
  return data.data;
};

/**
 * 본인의 회원 상태 조회
 */

interface GetMyActiveStatusResponse {
  data: MyActiveStatusInfo;
}

export const getMyActiveStatus = async () => {
  const { data } = await https<GetMyActiveStatusResponse>({
    url: API.USER.ACTIVE_STATUS,
    method: "GET",
  });
  return data.data;
};

/**
 * 본인의 회원 상태 변경
 */

interface PutMyActiveStatusRequest {
  activeStatus: ActiveStatus;
}

interface PutMyActiveStatusResponse {
  data: MyActiveStatusInfo;
}

export const putMyActiveStatus = async (body: PutMyActiveStatusRequest) => {
  const { data } = await https<PutMyActiveStatusResponse>({
    url: API.USER.ACTIVE_STATUS,
    method: "PUT",
    data: body,
  });
  return data.data;
};
