import { SimpleMemberInfo } from "./member";
import { AccessRight } from "./program";

export type InputStatus = "incomplete" | "complete";

export type StatusType = "creatable" | "joinable";
export type CreatableStatus = "creatable" | "nonCreatable";
export type JoinableStatus = "joinable" | "nonJoinable";

export type TeamBuildingInfo = {
  title: string;
  content: string;
  accessRight: AccessRight;
};

export interface UserInputStatusInfo {
  name: string;
  status: InputStatus;
}

export type TeamBuildingResult = SimpleMemberInfo[][];

export type TeamBuildingResultList = {
  accessRight: AccessRight;
  result: TeamBuildingResult;
};
