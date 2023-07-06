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
  const firstNum = page - (page % 5);
  const lastNum = page - (page % 5) + 5 > totalPage ? totalPage : page - (page % 5) + 5;

  return (
    <PaginationWrap>
      <div className="pagination-list-wrap">
        <Link
          key={"product-list-previous"}
          className={firstNum + 1 === 1 ? "button disabled" : "button"}
          href={`${router.pathname}?page=${lastNum - 5}`}
        >
          &lt;
        </Link>
        {Array.from({ length: 5 }, (_, i) => {
          if (firstNum + 1 + i > totalPage) {
            return;
          }
          return (
            <Link
              key={"product-list-" + i}
              className={firstNum + 1 + i === page ? "selected" : ""}
              href={`${router.pathname}?page=${firstNum + 1 + i}`}
            >
              {firstNum + 1 + i}
            </Link>
          );
        })}
        <Link
          key={"product-list-next"}
          className={lastNum === totalPage ? "button disabled" : "button"}
          href={`${router.pathname}?page=${lastNum + 1}`}
        >
          &gt;
        </Link>
      </div>
    </PaginationWrap>
  );
};

export default Pagination;
