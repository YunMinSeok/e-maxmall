"use client";

import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
// style
import { PaginationWrap } from "@styles/pagination/pagination";

interface PaginationType {
  page: number;
  totalPage: number;
}

const Pagination = ({ page, totalPage }: PaginationType) => {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const firstNum = Math.floor((page - 1) / 5) * 5 + 1;
  const lastNum = Math.min(firstNum + 4, totalPage);

  const handleRouter = (targetPage: number) => {
    const newQuery = {
      sort: String(params.get("sort") || "desc"),
      size: String(params.get("size") || "5"),
      page: targetPage.toString(),
    };
    const nestedUrl = {
      pathname: pathname,
      query: newQuery,
    };

    return nestedUrl;
  };

  return (
    <PaginationWrap>
      <div className="pagination-list-wrap">
        <Link
          key={"product-list-previous"}
          className={firstNum === 1 ? "button disabled" : "button"}
          href={handleRouter(lastNum - 1)}
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
                href={handleRouter(firstNum + i)}
              >
                {firstNum + i}
              </Link>
            ),
        )}
        <Link
          key={"product-list-next"}
          className={lastNum === totalPage ? "button disabled" : "button"}
          href={handleRouter(lastNum + 1)}
        >
          &gt;
        </Link>
      </div>
    </PaginationWrap>
  );
};

export default Pagination;
