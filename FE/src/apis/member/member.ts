import { sortMembers } from "./../../utils/sort";
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

export const getEditMembers = async (programId: string) => {
  const { data } = await https.get<getEditMembersResponse>(
    `/attend/candidate/program/${programId}`
  );
  return sortMembers(data);
};

export const editMembers = async (
  programId: number,
  body: editMembersRequest
) => {
  const { data } = await https.post<editMembersResponse>(
    `/attend/programs/${programId}`,
    body
  );
  return data;
};
