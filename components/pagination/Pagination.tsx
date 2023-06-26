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
        {Array.from({ length: totalPage }, (_, index) => index + 1).map((element, index) => {
          return <a key={element}>{element}</a>;
        })}
        <a className="button">&gt;</a>
      </div>
    </PaginationWrap>
  );
};

export default Pagination;
