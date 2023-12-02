import { NextResponse } from "next/server";

import { productItems } from "@constant/products";

export async function GET(route: { params: { id: string } }) {
  // 상품 유니크값 가져오기
  const productNo: number = Number(route.params.id);

  // 상품 찾기
  const product = productItems.filter(product => product.item_no === Number(productNo))[0];
  console.log(product);

  return NextResponse.json({ product });
}
