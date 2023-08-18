import type { NextApiRequest, NextApiResponse } from "next";

import { productItems } from "@constant/products";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // page 별 pagination 처리
  const page = Number(req.query.page || 1) * Number(req.query.size || 5);
  const sort = String(req.query.sort) || "desc";

  console.log(page);
  // score 기준 내림차순 / 오름차순
  productItems.sort((a: any, b: any) => {
    if (sort === "asc") {
      return a.score - b.score;
    } else {
      return b.score - a.score;
    }
  });

  res.status(200).json({
    page: Number(req.query.page || 1),
    totalPage: 6,
    productItems: productItems.slice(page - Number(req.query.size || 5), page),
  });
}
