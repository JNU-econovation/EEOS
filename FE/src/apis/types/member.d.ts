type attendStatus = "ATTEND" | "ABSENT" | "IRRELEVANT";
type attendStatusLower = "attend" | "absent";

export interface defaultMember {
  memberId: number;
  generation: string;
  name: string;
  attendStatus: attendStatus;
}

/* getDetailMembers */
export type getDetailMembersResponse = defaultMember[];

/* getEditMembers */
export type getEditMembersResponse = defaultMember[];

/* editMembers */
export interface editMembersRequest {
  memberId: number;
  beforeAttendStatus: attendStatus;
  afterAttendStatus: attendStatus;
}

export interface editMembersResponse {
  programId: number;
}
