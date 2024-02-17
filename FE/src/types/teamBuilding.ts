import { SimpleMemberInfo } from "./member";
import { AccessRight } from "./program";

export type InputStatus = "incomplete" | "complete";

export type TeamBuildingInfo = {
  title: string;
  content: string;
  accessRight: AccessRight;
};

export interface UserInputStatusInfo {
  status: InputStatus;
}

export type TeamBuildingResult = SimpleMemberInfo[][];

export type TeamBuildingResultList = {
  result: TeamBuildingResult;
};
