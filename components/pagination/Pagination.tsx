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
  const firstNum = Math.floor((page - 1) / 5) * 5 + 1;
  const lastNum = Math.min(firstNum + 4, totalPage);
  return (
    <PaginationWrap>
      <div className="pagination-list-wrap">
        <Link
          key={"product-list-previous"}
          className={firstNum === 1 ? "button disabled" : "button"}
          href={`${router.pathname}?page=${lastNum - 5}`}
        >
          &lt;
        </Link>
        {Array.from(
          { length: 5 },
          (_, i) =>
            firstNum + i <= totalPage && (
              <Link
                key={"product-list-" + i}
                className={firstNum + i === page ? "selected" : ""}
                href={`${router.pathname}?page=${firstNum + i}`}
              >
                {firstNum + i}
              </Link>
            ),
        )}
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
