import { https } from "..";
import {
  createProgramRequest,
  createProgramResponse,
  getProgramDetailResponse,
  getProgramListResponse,
  updateProgramRequest,
} from "../types/program";

/* 행사 생성 */
export const createProgram = async (body: createProgramRequest) => {
  const { data } = await https.post<createProgramResponse>("/programs", body);
  return data;
};

/* 행사 수정 */
export const updateProgram = async (
  programId: string,
  body: updateProgramRequest,
) => {
  const { data } = await https.put(`/programs/${programId}`, body);
  return data;
};

/* 행사 리스트 조회 */
export const getProgramList = async (
  programStatus: string,
  size: number,
  page: number,
) => {
  const response = await https.get<getProgramListResponse>(
    `/programs?programStatus=${programStatus}&size=${size}&page=${page}`,
  );
  return response.data;
};

/* 행사 상세 조회 */
export const getProgramDetail = async (programId: string) => {
  const { data } = await https.get<getProgramDetailResponse>(
    `/programs/${programId}`,
  );

  return data;
};
