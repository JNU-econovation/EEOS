const PROGRAM = {
  LIST: "/programs",
  CREATE: "/programs",
  UPDATE: (programId: number) => `/programs/${programId}`,
  DELETE: (programId: number) => `/programs/${programId}`,
  DETAIL: (programId: number) => `/programs/${programId}`,
  ACCESS_RIGHT: (programId: number) => `/programs/${programId}/accessRight`,
};

const MEMBER = {
  LIST: "/members",
  ACTIVE_STATUS: (programId) => `/programs/${programId}/members`,
  ATTEND_STATUS: (programId: number) => `/attend/programs/${programId}/members`,
};

const USER = {
  ATTEND_STATUS: (programId: number) => `/attend/programs/${programId}`,
  ACTIVE_STATUS: "/members/activeStatus",
};

const AUTH = {
  SLACK_LOGIN: "/auth/login/slack",
  TOKEN_REISSUE: "/auth/reissue",
};

Object.freeze(PROGRAM);
Object.freeze(MEMBER);
Object.freeze(USER);
Object.freeze(AUTH);
export default { PROGRAM, MEMBER, USER, AUTH };
