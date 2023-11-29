/**
 * 프로그램 정보 조회
 */

import {
  ProgramCategory,
  ProgramInfo,
  ProgramListInfo,
  ProgramStatus,
} from "../types/program";
import { https } from ".";

interface GetProgramByIdResponse {
  data: ProgramInfo;
}

export const getProgramById = async (programId: string) => {
  const { data } = await https<GetProgramByIdResponse>({
    url: `programs/${programId}`,
  });
  return data.data;
};

/**
 * 프로그램 리스트 조회
 */

interface GetProgramListResponse {
  data: ProgramListInfo[];
}
export const getProgramList = async (
  category: ProgramCategory,
  programStatus: ProgramStatus,
  size: number,
  page: number,
) => {
  const { data } = await https<GetProgramListResponse>({
    url: "programs",
    method: "GET",
    params: {
      category,
      programStatus,
      size,
      page,
    },
  });
  return data.data;
};

/**
 * 프로그램 삭제
 */

export const deleteProgram = async (programId: string) => {
  const { data } = await https({
    url: `programs/${programId}`,
    method: "DELETE",
  });
  return data.data;
};

/**
 * 행사 생성 및 수정은 api 완성되면 추가
 */
