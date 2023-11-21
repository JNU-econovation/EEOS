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

Object.freeze(TITLE_STYLE);
export default { TITLE_STYLE };
