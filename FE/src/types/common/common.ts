import { AttendStatus } from "../member";

export interface badgeOption {
  text: string;
  color: "green" | "yellow" | "red" | "gray" | "teal";
  type: AttendStatus;
}
