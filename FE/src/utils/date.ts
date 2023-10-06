const weekList = ["일", "월", "화", "수", "목", "금", "토"];

export const convertDate = (timestamp: string) => {
  const date = new Date(parseInt(timestamp));
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = weekList[date.getDay()];

  return `${year}년 ${month}월 ${day}일 (${dayOfWeek})`;
};
