import {
  ActiveStatus,
  AttendStatus,
  MyActiveStatusInfo,
  MyAttendStatusInfo,
} from "@/src/types/member";

export class MyAttendStatusInfoDto {
  public readonly name: string;
  public readonly attendStatus: AttendStatus;

  constructor(data: MyAttendStatusInfo) {
    this.name = data.name;
    this.attendStatus = data.attendStatus;
  }
}

export class MyActiveStatusInfoDto {
  public readonly name: string;
  public readonly activeStatus: ActiveStatus;

  constructor(data: MyActiveStatusInfo) {
    this.name = data.name;
    this.activeStatus = data.activeStatus;
  }
}
