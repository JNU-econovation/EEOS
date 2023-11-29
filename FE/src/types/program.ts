export type ProgramCategory = "weekly" | "presidentTeam" | "eventTema" | "etc";
export type ProgramStatus = "active" | "end";
export type ProgramType = "demand" | "notification";

export interface ProgramInfo {
  programId: string;
  title: string;
  deadLine: string;
  content: string;
  category: ProgramCategory;
  programstatus: ProgramStatus;
  type: ProgramType;
}

export interface ProgramListInfo extends Omit<ProgramInfo, "content"> {}
