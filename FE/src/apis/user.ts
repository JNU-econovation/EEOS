import { ActiveStatus, AttendStatus, UserActiveStatus } from "../types/user";
import { attendStatus } from "./types/member";
import { https } from ".";

/**
 * 본인의 출석 상태 조회
 */

interface GetMyAttendStatusResponse {
  data: AttendStatus;
}

export const getMyAttendStatus = async (programId: string) => {
  const { data } = await https<GetMyAttendStatusResponse>({
    url: `programs/${programId}/members/attendStatus`,
    method: "GET",
  });
  return data.data;
};

/**
 * 본인의 출석 상태 변경
 */

interface PutMyAttendStatusRequest {
  beforeAttendStatus: attendStatus;
  afterAttendStatus: attendStatus;
}

export const putMyAttendStatus = async (
  programId: string,
  body: PutMyAttendStatusRequest,
) => {
  const { data } = await https({
    url: `programs/${programId}/members/attendStatus`,
    method: "PUT",
    data: body,
  });
  return data.data;
};

/**
 * 본인의 회원 상태 조회
 */

interface GetMyActiveStatusResponse {
  data: UserActiveStatus;
}

export const getMyActiveStatus = async () => {
  const { data } = await https<GetMyActiveStatusResponse>({
    url: "members/activeStatus",
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
  data: UserActiveStatus;
}

export const putMyActiveStatus = async (body: PutMyActiveStatusRequest) => {
  const { data } = await https<PutMyActiveStatusResponse>({
    url: "members/activeStatus",
    method: "PUT",
    data: body,
  });
  return data.data;
};
