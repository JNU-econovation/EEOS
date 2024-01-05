export const calcPageNumbers = (
  currentPage: number,
  totalPages: number,
): number[] => {
  const count = 5;

  const [startPage, endPage] = getStartEndPage(currentPage, totalPages, count);

  const range: number[] = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  return range;
};

const getStartEndPage = (
  currentPage: number,
  totalPages: number,
  count: number,
): number[] => {
  if (totalPages <= count) return [1, totalPages];

  const countBeforeCurrentPage = Math.floor(count / 2);
  const countAfterCurrentPage = Math.ceil(count / 2) - 1;

  if (currentPage <= countBeforeCurrentPage) return [1, count];
  if (currentPage + countAfterCurrentPage >= totalPages)
    return [totalPages - count + 1, totalPages];

  return [
    currentPage - countBeforeCurrentPage,
    currentPage + countAfterCurrentPage,
  ];
};
