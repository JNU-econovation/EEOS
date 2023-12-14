import {
  ActiveStatus,
  AttendStatus,
  UserActiveStatusInfo,
  UserAttendStatusInfo,
} from "@/types/member";

export class UserAttendStatusInfoDto {
  public readonly name: string;
  public readonly attendStatus: AttendStatus;

  constructor(data: UserAttendStatusInfo) {
    this.name = data.name;
    this.attendStatus = data.attendStatus;
  }
}

export class UserActiveStatusInfoDto {
  public readonly name: string;
  public readonly activeStatus: ActiveStatus;

  constructor(data: UserActiveStatusInfo) {
    this.name = data.name;
    this.activeStatus = data.activeStatus;
  }
}
