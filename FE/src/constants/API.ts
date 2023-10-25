const PROGRAM = "/programs";

const MEMBER = {
  POST_ATTENDSTATUS: "/attend/programs",
  GET_MEMBER_LIST_BY_STATUS: (programId: number) =>
    `/programs/${programId}/members`,
  GET_ALL_MEMBERS: "/attend/candidate/program",
};

Object.freeze(MEMBER);
export default { PROGRAM, MEMBER };
