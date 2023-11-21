type attendStatus = "attend" | "absent" | "none" | "perceive" | "noResponse";

export interface defaultMember {
  memberId: number;
  generation: string;
  name: string;
  attendStatus: attendStatus;
}

/* getMembersByStatus */
export type getMembersByStatusResponse = { data: defaultMember[] };

/* getAllMembers */
export type getAllMembersResponse = { data: defaultMember[] };

/* updateMembers */
export interface updateMembersRequest {
  memberId: number;
  beforeAttendStatus: attendStatus;
  afterAttendStatus: attendStatus;
}

export interface updateMembersResponse {
  data: {
    programId: number;
  };
}
