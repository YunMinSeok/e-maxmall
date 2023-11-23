import { NextResponse, NextRequest } from "next/server";

import { productItems } from "@constant/products";
import { useSearchParams } from "next/navigation";

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
    page: Number(page || 1),
    totalPage: 6,
    productItems: productItems.slice(page - Number(reqSize || 5), page),
  });
}
