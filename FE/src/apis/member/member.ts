import { https } from "..";
import {
  attendStatusLower,
  editMembersRequest,
  editMembersResponse,
  getDetailMembersResponse,
} from "../types/member";
import API from "@/src/constants/API";

export const getDetailMembers = async (
  programId: number,
  attendStatus: attendStatusLower,
) => {
  const { data } = await https<getDetailMembersResponse>({
    url: API.MEMBER.GET_MEMBER_LIST_BY_STATUS(programId),
    method: "GET",
    params: { attendStatus },
  });

  return data;
};

export const editMembers = async (
  programId: number,
  body: editMembersRequest,
) => {
  const { data } = await https<editMembersResponse>({
    url: API.MEMBER.GET_ALL_MEMBERS + `/${programId}`,
    method: "POST",
    data: body,
  });
  return data;
};
