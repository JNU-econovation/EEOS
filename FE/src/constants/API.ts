const PROGRAM = "/programs";

const MEMBER = {
  UPDATE_ATTENDSTATUS: "/attend/programs",
  GET_MEMBER_LIST_BY_STATUS: (programId: number) =>
    `attend/programs/${programId}/members`,
  GET_ALL_MEMBERS: "/attend/candidate/programs",
};

Object.freeze(MEMBER);
export default { PROGRAM, MEMBER };
