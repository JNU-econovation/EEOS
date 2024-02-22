const EDIT_DISABLED = {
  PROGRAM_ACTIVE: "진행중인 프로그램은 수정할 수 없습니다.",
  NO_RIGHT: "수정 권한이 없습니다.",
};

const EDIT = {
  SUCCESS: "수정이 완료되었습니다.",
  FAILED: "수정에 실패했습니다.",
  PENDING: "수정 중...",
};

const CREATE = {
  SUCCESS: "생성이 완료되었습니다.",
  FAILED: "생성에 실패했습니다.",
  PENDING: "생성 중...",
};

const DELETE = {
  SUCCESS: "삭제가 완료되었습니다.",
  FAILED: "삭제에 실패했습니다.",
  PENDING: "삭제 중...",
};

const AUTH = {
  LOGIN_REQUIRED: "로그인이 필요합니다.",
  LOGIN_FAILED: "로그인에 실패했습니다.",
};

const CONFIRM = {
  EDIT: "수정하시겠습니까?",
  DELETE: "삭제하시겠습니까?",
};

const COMPLATE = {
  SUCCESS: "완료되었습니다.",
  FAILED: "완료에 실패했습니다.",
  PENDING: "팀빌딩 완료 중...",
};

const TEAM_BUILDING = {
  INCREATABLE: "진행중인 팀빌딩이 있어 팀빌딩을 생성할 수 없습니다.",
};

Object.freeze(EDIT_DISABLED);
Object.freeze(AUTH);
Object.freeze(EDIT);
Object.freeze(CREATE);
Object.freeze(DELETE);
Object.freeze(CONFIRM);
Object.freeze(TEAM_BUILDING);
Object.freeze(COMPLATE);

export default {
  EDIT_DISABLED,
  AUTH,
  EDIT,
  CREATE,
  DELETE,
  CONFIRM,
  TEAM_BUILDING,
  COMPLATE,
};
