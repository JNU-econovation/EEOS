import { attendStatus } from "@/src/apis/types/member";

export interface badgeOption {
  text: string;
  color: "green" | "yellow" | "red" | "gray" | "teal";
  type: attendStatus;
}
