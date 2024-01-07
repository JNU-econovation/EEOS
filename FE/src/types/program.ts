export type ProgramCategory = "weekly" | "presidentTeam" | "eventTeam" | "etc";
export type ProgramCategoryWithAll = ProgramCategory | "all";

export type ProgramStatus = "active" | "end";
export type ProgramType = "demand" | "notification";
export type AccessRight = "edit" | "read_only";

export interface ProgramInfo {
  programId: number;
  title: string;
  deadLine: string;
  content: string;
  category: ProgramCategory;
  programStatus: ProgramStatus;
  type: ProgramType;
  accessRight: AccessRight;
}

export interface ProgramSimpleInfo extends Omit<ProgramInfo, "content"> {}

export interface ProgramListInfo {
  size: number;
  page: number;
  totalPage: number;
  programs: ProgramSimpleInfo[];
}
