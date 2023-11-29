import {
  MemberInfo,
  ActiveStatus,
  AttendStatus,
  MemberActiveStatusInfo,
  MemberAttendStatusInfo,
} from "@/src/types/member";

export class MemberInfoDto {
  public readonly memberId: string;
  public readonly name: string;
  public readonly attendStatus: AttendStatus;
  public readonly activeStatus: ActiveStatus;

  constructor(data: MemberInfo) {
    this.memberId = data.memberId;
    this.name = data.name;
    this.attendStatus = data.attendStatus;
    this.activeStatus = data.activeStatus;
  }
}

export class MemberAttendStatusInfoDto {
  public readonly memberId: string;
  public readonly name: string;
  public readonly attendStatus: AttendStatus;

  constructor(data: MemberAttendStatusInfo) {
    this.memberId = data.memberId;
    this.name = data.name;
    this.attendStatus = data.attendStatus;
  }
}

export class MemberActiveStatusInfoDto {
  public readonly memberId: string;
  public readonly name: string;
  public readonly activeStatus: ActiveStatus;

  constructor(data: MemberActiveStatusInfo) {
    this.memberId = data.memberId;
    this.name = data.name;
    this.activeStatus = data.activeStatus;
  }
}

export class MemberListDto {
  public readonly members: MemberInfoDto[];

  constructor(data: MemberInfo[]) {
    this.members = data.map((member) => new MemberInfoDto(member));
  }
}

export class MemberAttendStatusListDto {
  public readonly members: MemberAttendStatusInfoDto[];

  constructor(data: MemberAttendStatusInfo[]) {
    this.members = data.map((member) => new MemberAttendStatusInfoDto(member));
  }
}

export class MemberActiveStatusListDto {
  public readonly members: MemberActiveStatusInfoDto[];

  constructor(data: MemberActiveStatusInfo[]) {
    this.members = data.map((member) => new MemberActiveStatusInfoDto(member));
  }
}
