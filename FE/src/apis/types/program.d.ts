import { programStatusEn } from "../../types/home/home";

export interface defaultProgram {
  title: string;
  programDate: string;
  content: string;
}

/* 행사 생성 */

export interface createProgramRequest extends defaultProgram {}

export interface createProgramResponse {
  programId: number;
}

/* 행사 수정 */
export interface updateProgramRequest extends defaultProgram {}

/* 행사 조회 */
export interface summaryProgram extends Omit<defaultProgram, "content"> {
  programId: number;
  programStatus: programStatusEn;
}

export interface getProgramListResponse {
  size: number;
  page: number;
  totalPage: number;
  programs: summaryProgram[];
}

export interface getProgramDetailResponse extends summaryProgram {
  content: string;
}
