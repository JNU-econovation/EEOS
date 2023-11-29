export type ActiveStatus = "am" | "rm" | "cm" | "ob";
export type AttendStatus =
  | "attend"
  | "absent"
  | "perceive"
  | "nonResponse"
  | "nonRelated";

export interface MemberInfo {
  memberId: number;
  name: string;
  attendStatus: AttendStatus;
  activeStatus: ActiveStatus;
}

export interface MemberAttendStatusInfo
  extends Omit<MemberInfo, "activeStatus"> {}

export interface MemberActiveStatusInfo
  extends Omit<MemberInfo, "attendStatus"> {}

export interface MyActiveStatusInfo
  extends Omit<MemberInfo, "memberId" | "attendStatus"> {}
export interface MyAttendStatusInfo
  extends Omit<MemberInfo, "memberId" | "activeStatus"> {}
