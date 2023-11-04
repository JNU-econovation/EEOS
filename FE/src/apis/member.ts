import { sortMembers } from "../utils/sort";
import {
  attendStatus,
  getAllMembersResponse,
  getMembersByStatusResponse,
  updateMembersRequest,
  updateMembersResponse,
} from "./types/member";
import { https } from ".";
import API from "@/src/constants/API";

export const getAllMembers = async (programId: string) => {
  const { data } = await https<getAllMembersResponse>({
    url: API.MEMBER.GET_ALL_MEMBERS + `/${programId}`,
    method: "GET",
  });
  return sortMembers(data);
};

export const getMembersByStatus = async (
  programId: number,
  attendStatus: attendStatus,
) => {
  const { data } = await https<getMembersByStatusResponse>({
    url: API.MEMBER.GET_MEMBER_LIST_BY_STATUS(programId),
    method: "GET",
    params: { attendStatus },
  });

  return data;
};

export const updateMembers = async (
  programId: string,
  body: updateMembersRequest,
) => {
  const { data } = await https<updateMembersResponse>({
    url: API.MEMBER.UPDATE_ATTENDSTATUS + `/${programId}`,
    method: "POST",
    data: body,
  });
  return data;
};
