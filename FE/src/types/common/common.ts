import { AttendStatus } from "../member";

export type Color =
  | "green"
  | "yellow"
  | "red"
  | "gray"
  | "teal"
  | "white"
  | "navy";

export type BadgeColor = Exclude<Color, "white" | "navy">;
export type TabColor = Exclude<Color, "red" | "green">;

export interface badgeOption {
  text: string;
  color: BadgeColor;
  type: AttendStatus;
}
