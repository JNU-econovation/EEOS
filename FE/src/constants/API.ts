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
  ACTIVE_STATUS: (programId: number) => `/programs/${programId}/members`,
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

const TEAM_BUILDING = {
  CREATE: "/team-building",
  DETAIL: "/team-building",
  CLOSE: "/team-building/end",
  VALIDATE: "/team-building/validate",
  INPUT_STATUS: "/target/team-building/status",
  RESULT: "/team-building/result",
  SENTENCE: "/target/team-building",
  COMPLETE: "/team-building/complete",
};

Object.freeze(PROGRAM);
Object.freeze(MEMBER);
Object.freeze(USER);
Object.freeze(AUTH);
Object.freeze(TEAM_BUILDING);

export default { PROGRAM, MEMBER, USER, AUTH, TEAM_BUILDING };
