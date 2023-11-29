const PROGRAM = {
  LIST: "/programs",
  CREATE: "/programs",
  UPDATE: (programId: number) => `/programs/${programId}`,
  DELETE: (programId: number) => `/programs/${programId}`,
  DETAIL: (programId: number) => `/programs/${programId}`,
};

const MEMBER = {
  LIST: "/members",
  PROGRAM: (programId: number) => `/programs/${programId}/members`,
};

Object.freeze(MEMBER);
export default { PROGRAM, MEMBER };
