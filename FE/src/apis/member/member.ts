import { https } from "..";
import {
  attendStatusLower,
  editMembersRequest,
  editMembersResponse,
  getDetailMembersResponse,
  getEditMembersResponse,
} from "../types/member";

export const getDetailMembers = async (
  programId: number,
  attendStatus: attendStatusLower
) => {
  const { data } = await https.get<getDetailMembersResponse>(
    `/programs/${programId}/members?attendStatus=${attendStatus}`
  );
  return data;
};

export const getEditMembers = async (programId: number) => {
  const { data } = await https.get<getEditMembersResponse>(
    `/programs/${programId}/members/candidate`
  );
  return data;
};

export const editMembers = async (
  programId: number,
  body: editMembersRequest
) => {
  const { data } = await https.post<editMembersResponse>(
    `/programs/${programId}/attendStatus`,
    body
  );
  return data;
};
