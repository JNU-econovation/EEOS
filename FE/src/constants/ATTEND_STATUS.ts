// FIXME: {type, text, color, icon}[]의 형태로 바꾸기

const TITLE_STYLE: {
  [key: string]: { text: string; color: string; icon: string };
} = {
  attend: { text: "참석", color: "bg-success-20", icon: "/icons/check.svg" },
  absent: { text: "불참", color: "bg-action-20", icon: "/icons/x.svg" },
  perceive: {
    text: "지각",
    color: "bg-warning-20",
    icon: "/icons/click.svg",
  },
  nonResponse: {
    text: "미정",
    color: "bg-gray-20",
    icon: "/icons/minus.svg",
  },
} as const;

const BADGE_STYLE = {
  attend: {
    text: "참석",
    color: "green",
  },
  perceive: {
    text: "지각",
    color: "yellow",
  },
  absent: {
    text: "불참",
    color: "red",
  },
  nonResponse: {
    text: "출석체크 해주세요!",
    color: "teal",
  },
  nonRelated: {
    text: "본 행사와 관련없음",
    color: "gray",
  },
} as const;

Object.freeze(TITLE_STYLE);
Object.freeze(BADGE_STYLE);
export default { TITLE_STYLE, BADGE_STYLE };
