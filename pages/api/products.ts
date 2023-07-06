import type { NextApiRequest, NextApiResponse } from "next";

// images
import Image1 from "@images/product_image_1.jpg";
import Image2 from "@images/product_image_2.jpg";
import Image3 from "@images/product_image_3.jpg";
import Image4 from "@images/product_image_4.jpg";
import Image5 from "@images/product_image_5.jpg";
import Image6 from "@images/product_image_6.jpg";
import Image7 from "@images/product_image_7.jpg";
import Image8 from "@images/product_image_8.jpg";
import Image9 from "@images/product_image_9.jpg";
import Image10 from "@images/product_image_10.jpg";

const productItems = [
  {
    item_no: 1,
    item_name: "이미지 1",
    detail_image_url: Image1,
    price: "1000",
    score: "500",
  },
  {
    item_no: 2,
    item_name: "이미지 2",
    detail_image_url: Image2,
    price: "2000",
    score: "400",
  },
  {
    item_no: 3,
    item_name: "이미지 3",
    detail_image_url: Image3,
    price: "3000",
    score: "300",
  },
  {
    item_no: 4,
    item_name: "이미지 4",
    detail_image_url: Image4,
    price: "4000",
    score: "200",
  },
  {
    item_no: 5,
    item_name: "이미지 5",
    detail_image_url: Image5,
    price: "5000",
    score: "100",
  },
  {
    item_no: 6,
    item_name: "이미지 6",
    detail_image_url: Image6,
    price: "6000",
    score: "600",
  },
  {
    item_no: 7,
    item_name: "이미지 7",
    detail_image_url: Image7,
    price: "7000",
    score: "700",
  },
  {
    item_no: 8,
    item_name: "이미지 8",
    detail_image_url: Image8,
    price: "8000",
    score: "500",
  },
  {
    item_no: 9,
    item_name: "이미지 9",
    detail_image_url: Image9,
    price: "9000",
    score: "400",
  },
  {
    item_no: 10,
    item_name: "이미지 10",
    detail_image_url: Image10,
    price: "10000",
    score: "100",
  },
  {
    item_no: 11,
    item_name: "이미지 1",
    detail_image_url: Image1,
    price: "1000",
    score: "500",
  },
  {
    item_no: 12,
    item_name: "이미지 2",
    detail_image_url: Image2,
    price: "2000",
    score: "400",
  },
  {
    item_no: 13,
    item_name: "이미지 3",
    detail_image_url: Image3,
    price: "3000",
    score: "300",
  },
  {
    item_no: 14,
    item_name: "이미지 4",
    detail_image_url: Image4,
    price: "4000",
    score: "200",
  },
  {
    item_no: 15,
    item_name: "이미지 5",
    detail_image_url: Image5,
    price: "5000",
    score: "100",
  },
  {
    item_no: 16,
    item_name: "이미지 6",
    detail_image_url: Image6,
    price: "6000",
    score: "600",
  },
  {
    item_no: 17,
    item_name: "이미지 7",
    detail_image_url: Image7,
    price: "7000",
    score: "700",
  },
  {
    item_no: 18,
    item_name: "이미지 8",
    detail_image_url: Image8,
    price: "8000",
    score: "500",
  },
  {
    item_no: 19,
    item_name: "이미지 9",
    detail_image_url: Image9,
    price: "9000",
    score: "400",
  },
  {
    item_no: 20,
    item_name: "이미지 10",
    detail_image_url: Image10,
    price: "10000",
    score: "100",
  },
  {
    item_no: 21,
    item_name: "이미지 1",
    detail_image_url: Image1,
    price: "1000",
    score: "500",
  },
  {
    item_no: 22,
    item_name: "이미지 2",
    detail_image_url: Image2,
    price: "2000",
    score: "400",
  },
  {
    item_no: 23,
    item_name: "이미지 3",
    detail_image_url: Image3,
    price: "3000",
    score: "300",
  },
  {
    item_no: 24,
    item_name: "이미지 4",
    detail_image_url: Image4,
    price: "4000",
    score: "200",
  },
  {
    item_no: 25,
    item_name: "이미지 5",
    detail_image_url: Image5,
    price: "5000",
    score: "100",
  },
  {
    item_no: 26,
    item_name: "이미지 6",
    detail_image_url: Image6,
    price: "6000",
    score: "600",
  },
  {
    item_no: 27,
    item_name: "이미지 7",
    detail_image_url: Image7,
    price: "7000",
    score: "700",
  },
  {
    item_no: 28,
    item_name: "이미지 8",
    detail_image_url: Image8,
    price: "8000",
    score: "500",
  },
  {
    item_no: 29,
    item_name: "이미지 9",
    detail_image_url: Image9,
    price: "9000",
    score: "400",
  },
  {
    item_no: 30,
    item_name: "이미지 10",
    detail_image_url: Image10,
    price: "10000",
    score: "100",
  },
];

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
