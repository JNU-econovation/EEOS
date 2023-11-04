type attendStatus = "attend" | "absent" | "none";

export interface defaultMember {
  memberId: number;
  generation: string;
  name: string;
  attendStatus: attendStatus;
}

/* getMembersByStatus */
export type getMembersByStatusResponse = defaultMember[];

/* getAllMembers */
export type getAllMembersResponse = defaultMember[];

/* updateMembers */
export interface updateMembersRequest {
  memberId: number;
  beforeAttendStatus: attendStatus;
  afterAttendStatus: attendStatus;
}

export interface updateMembersResponse {
  programId: number;
}
