export type ProgramCategory = "weekly" | "presidentTeam" | "eventTema" | "etc";
export type ProgramStatus = "active" | "end";
export type ProgramType = "demand" | "notification";

export interface ProgramInfo {
  programId: number;
  title: string;
  deadLine: string;
  content: string;
  category: ProgramCategory;
  programStatus: ProgramStatus;
  type: ProgramType;
}

export interface ProgramSimpleInfo extends Omit<ProgramInfo, "content"> {}

export interface ProgramListInfo {
  size: number;
  page: number;
  totalPage: number;
  programs: ProgramSimpleInfo[];
}
