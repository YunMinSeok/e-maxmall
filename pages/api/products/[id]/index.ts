import type { NextApiRequest, NextApiResponse } from "next";

import { productItems } from "@constant/products";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // 상품 유니크값 가져오기
  const productNo = req.query.id;
  // 상품 찾기
  const product = productItems.filter(product => product.item_no === Number(productNo))[0];

  res.status(200).json({
    product,
  });
}
