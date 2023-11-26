// FIXME: {type, text, color, icon}[]의 형태로 바꾸기

import { attendStatus } from "../apis/types/member";

interface badgeStyle {
  type: attendStatus;
  text: string;
  color: "gray" | "green" | "yellow" | "red" | "teal";
}

interface titleStyle extends Omit<badgeStyle, "color"> {
  color: string;
  icon: string;
}

const TITLE_STYLE: titleStyle[] = [
  {
    type: "attend",
    text: "참석",
    color: "bg-success-30",
    icon: "/icons/check.svg",
  },
  { type: "absent", text: "불참", color: "bg-action-20", icon: "/icons/x.svg" },
  {
    type: "perceive",
    text: "지각",
    color: "bg-warning-20",
    icon: "/icons/click.svg",
  },
  {
    type: "nonResponse",
    text: "미정",
    color: "bg-gray-20",
    icon: "/icons/minus.svg",
  },
] as const;

const BADGE_STYLE: badgeStyle[] = [
  {
    type: "attend",
    text: "참석",
    color: "green",
  },
  {
    type: "perceive",
    text: "지각",
    color: "yellow",
  },
  {
    type: "absent",
    text: "불참",
    color: "red",
  },
  {
    type: "nonResponse",
    text: "출석체크 해주세요!",
    color: "teal",
  },
  {
    type: "nonRelated",
    text: "본 행사와 관련없음",
    color: "gray",
  },
] as const;

const LABEL = "본인의 출석 상태를 선택해주세요.";

Object.freeze(TITLE_STYLE);
Object.freeze(BADGE_STYLE);
export default { TITLE_STYLE, BADGE_STYLE, LABEL };
