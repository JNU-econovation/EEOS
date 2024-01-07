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

const USER = {
  ATTEND_STATUS: (programId: number) =>
    `/programs/${programId}/members/attendStatus`,
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
