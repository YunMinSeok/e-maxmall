// style
import { PaginationWrap } from "@styles/pagination/pagination";

interface PaginationType {
  page: number;
  totalPage: number;
}

const Pagination = ({ page, totalPage }: PaginationType) => {
  return (
    <PaginationWrap>
      <div className="pagination-list-wrap">
        <a className="button">&lt;</a>
        <a>1</a>
        <a className="button">&gt;</a>
      </div>
    </PaginationWrap>
  );
};

export default Pagination;
