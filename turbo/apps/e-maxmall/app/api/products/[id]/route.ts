import { NextResponse } from "next/server";

import { productItems } from "@constant/products";

export async function GET(request: Request) {
  const url = new URL(request.url);
  // 상품 유니크값 가져오기
  const productNo = url.searchParams.get("id");
  // 상품 찾기
  const product = productItems.filter(product => product.item_no === Number(productNo))[0];

  return NextResponse.json({ product });
}
