import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

import { productItems } from "@constant/products";
import { useSearchParams } from "next/navigation";

const searchParams = useSearchParams();
// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   // page 별 pagination 처리
//   const page = Number(req.query.page || 1) * Number(req.query.size || 5);
//   const sort = String(req.query.sort) || "desc";

//   // score 기준 내림차순 / 오름차순
//   productItems.sort((a: any, b: any) => {
//     if (sort === "asc") {
//       return a.score - b.score;
//     } else {
//       return b.score - a.score;
//     }
//   });

//   console.log(2222);
//   res.json({
//     page: Number(req.query.page || 1),
//     totalPage: 6,
//     productItems: productItems.slice(page - Number(req.query.size || 5), page),
//   });
// }

export async function GET(req: Request) {
  const queryPage = searchParams.get("page");
  const querySize = searchParams.get("size");
  const querySort = searchParams.get("sort");

  const page = Number(queryPage || 1) * Number(querySize || 5);
  const sort = String(querySort) || "desc";

  // score 기준 내림차순 / 오름차순
  productItems.sort((a: any, b: any) => {
    if (sort === "asc") {
      return a.score - b.score;
    } else {
      return b.score - a.score;
    }
  });

  console.log(2222);
  return NextResponse.json({
    page: Number(queryPage || 1),
    totalPage: 6,
    productItems: productItems.slice(page - Number(querySize || 5), page),
  });
}
