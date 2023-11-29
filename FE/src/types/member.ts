export type ActiveStatus = "am" | "rm" | "cm" | "ob";
export type AttendStatus =
  | "attend"
  | "absent"
  | "perceive"
  | "nonResponse"
  | "nonRelated";

export interface MemberInfo {
  memberId: string;
  name: string;
  attendStatus: AttendStatus;
  activeStatus: ActiveStatus;
}

export interface MemberAttendStatusInfo
  extends Omit<MemberInfo, "activeStatus"> {}

export interface MemberActiveStatusInfo
  extends Omit<MemberInfo, "attendStatus"> {}

export interface MyInfo extends Omit<MemberInfo, "memberId" | "attendStatus"> {}
