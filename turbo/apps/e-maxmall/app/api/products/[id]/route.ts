import { NextResponse } from "next/server";

import { productItems } from "@constant/products";

export async function GET(request: Request, route: { params: { id: string } }) {
  // // 상품 유니크값 가져오기
  const productNo = Number(route.params.id);

  // 상품 찾기
  const product = productItems.filter(product => product.item_no === productNo)[0];

  return NextResponse.json({ product });
}
