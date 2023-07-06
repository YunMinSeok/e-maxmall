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
        <Link
          key={"product-list-previous"}
          className="button"
          href={`${router.pathname}?page=${page - 1}`}
        >
          &lt;
        </Link>
        {Array.from({ length: totalPage }, (_, index) => index + 1).map((element, index) => {
          return (
            <Link
              key={"product-list-" + element}
              className={element === page ? "selected" : ""}
              href={`${router.pathname}?page=${element}`}
            >
              {element}
            </Link>
          );
        })}
        <Link
          key={"product-list-next"}
          className="button"
          href={`${router.pathname}?page=${page + 1}`}
        >
          &gt;
        </Link>
      </div>
    </PaginationWrap>
  );
};

export default Pagination;
