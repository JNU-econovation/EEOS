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
  const { data } = await https.get<getDetailMembersResponse>(
    API.MEMBER.GET_MEMBER_LIST_BY_STATUS(programId),
    { params: { attendStatus } },
  );
  return data;
};

export const editMembers = async (
  programId: number,
  body: editMembersRequest,
) => {
  const { data } = await https.post<editMembersResponse>(
    API.MEMBER.GET_ALL_MEMBERS + `/${programId}`,
    body,
  );
  return data;
};
