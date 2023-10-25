import { https } from "..";
import {
  createProgramRequest,
  createProgramResponse,
  getProgramDetailResponse,
  getProgramListResponse,
  updateProgramRequest,
} from "../types/program";
import API from "@/src/constants/API";

export const createProgram = async (body: createProgramRequest) => {
  const { data } = await https<createProgramResponse>({
    url: API.PROGRAM,
    method: "POST",
    data: body,
  });
  return data;
};

/* 행사 수정 */
export const updateProgram = async (
  programId: string,
  body: updateProgramRequest,
) => {
  const { data } = await https<updateProgramRequest>({
    url: API.PROGRAM + `/${programId}`,
    method: "PUT",
    data: body,
  });
  return data;
};

/* 행사 리스트 조회 */
export const getProgramList = async (
  programStatus: string,
  size: number,
  page: number,
) => {
  const { data } = await https<getProgramListResponse>({
    url: API.PROGRAM,
    method: "GET",
    params: { programStatus, size, page },
  });

  return data;
};

/* 행사 상세 조회 */
export const getProgramDetail = async (programId: string) => {
  const { data } = await https<getProgramDetailResponse>({
    url: API.PROGRAM + `/${programId}`,
    method: "GET",
  });

  return data;
};
