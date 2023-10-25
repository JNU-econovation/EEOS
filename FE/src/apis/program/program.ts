import { https } from "..";
import {
  createProgramRequest,
  createProgramResponse,
  getProgramDetailResponse,
  getProgramListResponse,
  updateProgramRequest,
} from "../types/program";
import API from "@/src/constants/API";

/* 행사 생성 */
export const createProgram = async (body: createProgramRequest) => {
  const { data } = await https.post<createProgramResponse>(API.PROGRAM, body);
  return data;
};

/* 행사 수정 */
export const updateProgram = async (
  programId: string,
  body: updateProgramRequest,
) => {
  const { data } = await https.put(API.PROGRAM + `/${programId}`, body);
  return data;
};

/* 행사 리스트 조회 */
export const getProgramList = async (
  programStatus: string,
  size: number,
  page: number,
) => {
  const response = await https.get<getProgramListResponse>(API.PROGRAM, {
    params: { programStatus, size, page },
  });
  return response.data;
};

/* 행사 상세 조회 */
export const getProgramDetail = async (programId: string) => {
  const { data } = await https.get<getProgramDetailResponse>(
    API.PROGRAM + `/${programId}`,
  );

  return data;
};
