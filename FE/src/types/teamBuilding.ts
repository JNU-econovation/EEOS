import { SimpleMemberInfo } from "./member";

export type InputStatus = "incomplete" | "complete";

export type TeamBuildingInfo = {
  title: string;
  content: string;
};

export interface UserInputStatusInfo {
  status: InputStatus;
}

export type TeamBuildingResult = SimpleMemberInfo[][];

export type TeamBuildingResultList = {
  result: TeamBuildingResult;
};
