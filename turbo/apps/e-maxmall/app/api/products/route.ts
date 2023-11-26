import { NextResponse } from "next/server";

import { productItems } from "@constant/products";

export async function GET(request: Request) {
  const url = new URL(request.url);

  const reqPage = url.searchParams.get("page");
  const reqSize = url.searchParams.get("size");
  const reqSort = url.searchParams.get("sort");

  const page = Number(reqPage || 1) * Number(reqSize || 5);
  const sort = String(reqSort) || "desc";

  // score 기준 내림차순 / 오름차순
  productItems.sort((a: any, b: any) => {
    if (sort === "asc") {
      return a.score - b.score;
    } else {
      return b.score - a.score;
    }
  });

  return NextResponse.json({
    page: Number(reqPage || 1),
    totalPage: 6,
    productItems: productItems.slice(page - Number(reqSize || 5), page),
  });
}
