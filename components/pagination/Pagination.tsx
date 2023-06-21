// style
import { PaginationWrap } from "@styles/pagination/pagination";

const Pagination = () => {
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
