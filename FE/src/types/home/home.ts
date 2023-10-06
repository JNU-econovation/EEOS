export type eventStatusEn = "ING" | "END";
export type eventStatusKr = "진행 중" | "종료";

export type eventStatusOptionType = {
  [key in eventStatusKr]: eventStatusEn;
};
