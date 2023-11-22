export const calcPageNumbers = (currentPage: number, totalPages: number) => {
  const count = 5;
  const range: number[] = [];

  let startPage = 0;
  let endPage = 0;

  // totalPage가 count보다 작거나 같으면 1부터 totalPage까지
  if (totalPages <= count) {
    startPage = 1;
    endPage = totalPages;
  } else {
    const countBeforeCurrentPage = Math.floor(count / 2);
    const countAfterCurrentPage = Math.ceil(count / 2) - 1;

    if (currentPage <= countBeforeCurrentPage) {
      // currentPage가 countBeforeCurrentPage보다 작거나 같으면 1부터 count까지
      startPage = 1;
      endPage = count;
    } else if (currentPage + countAfterCurrentPage >= totalPages) {
      // currentPage + countAfterCurrentPage가 totalPages보다 크거나 같으면 totalPages - count + 1부터 totalPages까지
      startPage = totalPages - count + 1;
      endPage = totalPages;
    } else {
      // 그 외의 경우는 currentPage - countBeforeCurrentPage부터 currentPage + countAfterCurrentPage까지
      startPage = currentPage - countBeforeCurrentPage;
      endPage = currentPage + countAfterCurrentPage;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    range.push(i);
  }

  return range;
};
