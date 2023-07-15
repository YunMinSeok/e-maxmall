import type { NextApiRequest, NextApiResponse } from "next";

import { productItems } from "@constant/products";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // page 별 pagination 처리
  const page = Number(req.query.page || 1) * 5;
  // score 기준 내림차순
  productItems.sort((a: any, b: any) => {
    return b.score - a.score;
  });

  res.status(200).json({
    page: Number(req.query.page || 1),
    totalPage: 6,
    productItems: productItems.slice(page - 5, page),
  });
}
