import {
  MemberInfo,
  ActiveStatus,
  AttendStatus,
  MemberActiveStatusInfo,
  MemberAttendStatusInfo,
} from "@/src/types/member";

class MemberInfoDto {
  public readonly memberId: number;
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

class MemberAttendStatusInfoDto {
  public readonly memberId: number;
  public readonly name: string;
  public readonly attendStatus: AttendStatus;

  constructor(data: MemberAttendStatusInfo) {
    this.memberId = data.memberId;
    this.name = data.name;
    this.attendStatus = data.attendStatus;
  }
}

class MemberActiveStatusInfoDto {
  public readonly memberId: number;
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

  constructor(data: { members: MemberInfo[] }) {
    this.members = data.members.map((member) => new MemberInfoDto(member));
  }
}

export class MemberAttendStatusListDto {
  public readonly members: MemberAttendStatusInfoDto[];

  constructor(data: { members: MemberAttendStatusInfo[] }) {
    this.members = data.members.map(
      (member) => new MemberAttendStatusInfoDto(member),
    );
  }
}

export class MemberActiveStatusListDto {
  public readonly members: MemberActiveStatusInfoDto[];

  constructor(data: { members: MemberActiveStatusInfo[] }) {
    this.members = data.members.map(
      (member) => new MemberActiveStatusInfoDto(member),
    );
  }
}
