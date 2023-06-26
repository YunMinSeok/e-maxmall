import Link from "next/link";
import { useRouter } from "next/router";
// style
import { PaginationWrap } from "@styles/pagination/pagination";

interface PaginationType {
  page: number;
  totalPage: number;
}

const Pagination = ({ page, totalPage }: PaginationType) => {
  const router = useRouter();
  return (
    <PaginationWrap>
      <div className="pagination-list-wrap">
        <a className="button">&lt;</a>
        {Array.from({ length: totalPage }, (_, index) => index + 1).map((element, index) => {
          return (
            <Link
              key={"product-list-" + element}
              className={element === page ? "selected" : ""}
              href={{
                pathname: router.pathname,
                query: { page: element },
              }}
            >
              {element}
            </Link>
          );
        })}
        <a className="button">&gt;</a>
      </div>
    </PaginationWrap>
  );
};

export default Pagination;
