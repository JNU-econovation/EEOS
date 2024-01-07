const EDIT_DISABLED = {
  PROGRAM_ACTIVE: "진행중인 프로그램은 수정할 수 없습니다.",
  NO_RIGHT: "수정 권한이 없습니다.",
};

const AUTH = {
  LOGIN_REQUIRED: "로그인이 필요합니다.",
  LOGIN_FAILED: "로그인에 실패했습니다.",
};

Object.freeze(EDIT_DISABLED);
Object.freeze(AUTH);

export default { EDIT_DISABLED, AUTH };
