import ERROR_CODE from "./ERROR_CODE";

const ERROR_MESSAGE = {
  // 프로그램
  [ERROR_CODE.PROGRAM.NOT_EXIST_PROGRAM]: {
    message: "존재하지 않는 행사입니다.",
  },
  [ERROR_CODE.PROGRAM.INVALID_DATE]: {
    message: "지난 날짜는 선택할 수 없습니다.",
  },
  [ERROR_CODE.PROGRAM.NOT_EXIST_CATEGORY]: {
    message: "존재하지 않는 카테고리입니다.",
  },
  [ERROR_CODE.PROGRAM.NOT_EXIST_TYPE]: {
    message: "존재하지 않는 행사 타입입니다.",
  },
  [ERROR_CODE.PROGRAM.NOT_EXIST_STATUS]: {
    message: "존재하지 않는 행사 상태입니다.",
  },
  [ERROR_CODE.PROGRAM.NO_EDIT_PERMISSION]: {
    message: "행사 생성자만 수정 가능합니다.",
  },
  [ERROR_CODE.PROGRAM.CANNOT_MODIFY_SURVEY]: {
    message: "수요조사 여부는 수정할 수 없습니다.",
  },
  [ERROR_CODE.PROGRAM.CANNOT_MODIFY_ACTIVE]: {
    message: "진행 중인 행사의 경우, 참석 정보를 수정할 수 없습니다.",
  },

  // 참석
  [ERROR_CODE.ATTEND.NOT_EXIST_ATTEND_STATUS]: {
    message: "존재하지 않는 참석 상태입니다.",
  },
  [ERROR_CODE.ATTEND.INVALID_PREV_STATUS]: {
    message: "수정에 실패했습니다. 다시 시도해주세요.",
  },
  [ERROR_CODE.ATTEND.OTHER_MEMBER_CHANGED_STATUS]: {
    message: "수정에 실패했습니다. 다시 시도해주세요.",
  },
  [ERROR_CODE.ATTEND.CANNOT_CHANGE_AFTER_DEADLINE]: {
    message: "마감된 행사의 경우, 참석 상태를 수정할 수 없습니다.",
  },
  [ERROR_CODE.ATTEND.NOT_EXIST_ATTEND_INFO]: {
    message: "존재하지 않는 참석 상태입니다.",
  },
  [ERROR_CODE.ATTEND.NOT_ATTEND_TARGET]: {
    message: "행사 참석 대상자가 아닙니다.",
  },

  // 회원
  [ERROR_CODE.MEMBER.NOT_EXIST_MEMBER]: {
    message: "존재하지 않는 회원입니다.",
  },
  [ERROR_CODE.MEMBER.NOT_EXIST_ACTIVITY_STATUS]: {
    message: "존재하지 않는 활동 상태입니다.",
  },

  // 인증
  [ERROR_CODE.AUTH.NO_ACCESS_TOKEN]: {
    message: "로그인이 필요합니다.",
  },
  [ERROR_CODE.AUTH.EXPIRED_ACCESS_TOKEN]: {
    message: "로그인이 필요합니다.",
  },
  [ERROR_CODE.AUTH.NOT_EXIST_OAUTH_SERVER]: {
    message: "로그인이 필요합니다.",
  },
  [ERROR_CODE.AUTH.NO_REFRESH_TOKEN]: {
    message: "로그인이 필요합니다.",
  },
  [ERROR_CODE.AUTH.EXPIRED_REFRESH_TOKEN]: {
    message: "로그인이 필요합니다.",
  },
  [ERROR_CODE.AUTH.INVALID_NAME]: {
    message:
      "에코노베이션 슬랙의 표시 이름 형식이 올바르지 않습니다. (예: 25기 홍길동)",
  },

  // API
  [ERROR_CODE.API.SLACK_CALL_FAILED]: {
    message: "슬랙 로그인에 실패했습니다.",
  },

  // 알 수 없는
  UNKNOWN: {
    message: "알 수 없는 에러가 발생했습니다.",
  },
};

Object.freeze(ERROR_MESSAGE);
export default ERROR_MESSAGE;
