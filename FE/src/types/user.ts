export type ActiveStatus = "am" | "rm" | "cm" | "ob";
export type AttendStatus =
  | "attend"
  | "absent"
  | "perceive"
  | "nonResponse"
  | "nonRelated";

export interface UserAttendstatus {
  name: string;
  attendStatus: AttendStatus;
}

export interface UserActiveStatus {
  name: string;
  activeStatus: ActiveStatus;
}
