import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    productItems: [
      {
        item_no: 1,
        item_name: "이미지 1",
        detail_image_url: "",
        price: "5000",
        score: "200",
      },
      {
        item_no: 2,
        item_name: "이미지 2",
        detail_image_url: "",
        price: "5000",
        score: "200",
      },
      {
        item_no: 3,
        item_name: "이미지 3",
        detail_image_url: "",
        price: "5000",
        score: "200",
      },
      {
        item_no: 4,
        item_name: "이미지 4",
        detail_image_url: "",
        price: "5000",
        score: "200",
      },
      {
        item_no: 5,
        item_name: "이미지 5",
        detail_image_url: "",
        price: "5000",
        score: "200",
      },
    ],
  });
}
