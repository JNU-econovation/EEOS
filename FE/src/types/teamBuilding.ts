export type InputStatus = "incomplete" | "complete";

export type TeamBuildingInfo = {
  title: string;
  content: string;
};

export interface UserInputStatusInfo {
  status: InputStatus;
}

export type TeamBuildingResult = { name: string }[][];

export type TeamBuildingResultList = {
  result: TeamBuildingResult;
};
