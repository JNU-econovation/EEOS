import { AttendStatus } from "@/types/member";
import { TabOption } from "@/types/tab";

export interface AttendStatusToggleOption extends TabOption<AttendStatus> {
  color: string;
}
type AttendStatusToggle = {
  [key in Exclude<
    AttendStatus,
    "nonRelated" | "nonResponse"
  >]: AttendStatusToggleOption;
};

type AttendStatusList = {
  [key in Exclude<AttendStatus, "nonRelated">]: TabOption<AttendStatus> & {
    icon: string;
    color: string;
  };
};

type AttendStatusUser = {
  [key in AttendStatus]: TabOption<AttendStatus> & {
    color: string;
    demand_text?: string;
  };
};

const TOGGLE: AttendStatusToggle = {
  attend: { type: "attend", text: "참석", color: "green" },
  absent: { type: "absent", text: "불참", color: "red" },
  late: { type: "late", text: "지각", color: "yellow" },
};

const LIST: AttendStatusList = {
  attend: {
    type: "attend",
    text: "참석",
    icon: "/icons/check.svg",
    color: "green",
  },
  absent: {
    type: "absent",
    text: "불참",
    icon: "/icons/x.svg",
    color: "red",
  },
  late: {
    type: "late",
    text: "지각",
    icon: "/icons/clock.svg",
    color: "yellow",
  },
  nonResponse: {
    type: "nonResponse",
    text: "미응답",
    icon: "/icons/minus.svg",
    color: "gray",
  },
};

const USER: AttendStatusUser = {
  ...TOGGLE,
  nonResponse: {
    type: "nonResponse",
    text: "출석체크 해주세요!",
    demand_text: "수요조사 해주세요!",
    color: "teal",
  },
  nonRelated: {
    type: "nonRelated",
    text: "본 행사와 관련 없음",
    color: "gray",
  },
};

const LABEL = {
  EDITABLE: "본인의 출석 상태를 선택해주세요.",
  NON_RELATED: "출석 상태를 변경할 수 없습니다.",
  INACTIVE: "종료된 행사는 출석 상태를 변경할 수 없습니다.",
};

Object.freeze(TOGGLE);
Object.freeze(LIST);
Object.freeze(USER);
Object.freeze(LABEL);

export default { TOGGLE, LIST, USER, LABEL };
