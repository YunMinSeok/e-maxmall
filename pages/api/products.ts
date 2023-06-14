import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    productItems: [
      {
        item_no: 1,
        item_name: "이미지 1",
        detail_image_url: "",
        price: "1000",
        score: "500",
      },
      {
        item_no: 2,
        item_name: "이미지 2",
        detail_image_url: "",
        price: "2000",
        score: "400",
      },
      {
        item_no: 3,
        item_name: "이미지 3",
        detail_image_url: "",
        price: "3000",
        score: "300",
      },
      {
        item_no: 4,
        item_name: "이미지 4",
        detail_image_url: "",
        price: "4000",
        score: "200",
      },
      {
        item_no: 5,
        item_name: "이미지 5",
        detail_image_url: "",
        price: "5000",
        score: "100",
      },
      {
        item_no: 6,
        item_name: "이미지 6",
        detail_image_url: "",
        price: "6000",
        score: "600",
      },
      {
        item_no: 7,
        item_name: "이미지 7",
        detail_image_url: "",
        price: "7000",
        score: "700",
      },
      {
        item_no: 8,
        item_name: "이미지 8",
        detail_image_url: "",
        price: "8000",
        score: "500",
      },
      {
        item_no: 9,
        item_name: "이미지 9",
        detail_image_url: "",
        price: "9000",
        score: "400",
      },
      {
        item_no: 10,
        item_name: "이미지 10",
        detail_image_url: "",
        price: "10000",
        score: "100",
      },
    ],
  });
}
