export type programStatusEn = "ING" | "END";
export type programStatusKr = "진행 중" | "종료";

export type programStatusOptionType = {
  [key in programStatusKr]: programStatusEn;
};
