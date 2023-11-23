const weekList = ["일", "월", "화", "수", "목", "금", "토"];

export const convertDate = (
  timestamp: string,
  type: "default" | "short" = "default"
) => {
  const date = new Date(parseInt(timestamp));
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const dayOfWeek = weekList[date.getDay()];

  return type === "default"
    ? `${year}년 ${month}월 ${day}일 (${dayOfWeek})`
    : `${year}-${month}-${day} (${dayOfWeek})`;
};
