// style
import { PaginationWrap } from "@styles/pagination/pagination";

interface PaginationType {
  page: number;
  totalPage: number;
}

function createNumberArray(length: number) {
  return Array.from({ length }, (_, index) => index + 1);
}

const Pagination = ({ page, totalPage }: PaginationType) => {
  return (
    <PaginationWrap>
      <div className="pagination-list-wrap">
        <a className="button">&lt;</a>
        {Array.from({ totalPage }, (_, index) => index + 1).map((element, index) => {
          return <a>{index}</a>;
        })}
        <a className="button">&gt;</a>
      </div>
    </PaginationWrap>
  );
};

export default Pagination;
