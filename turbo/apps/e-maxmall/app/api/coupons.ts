import type { NextApiRequest, NextApiResponse } from "next";

const couponArray = [
  {
    id: 1,
    type: "won",
    name: "원 할인",
    price: 1500,
  },
  {
    id: 2,
    type: "won",
    name: "원 할인",
    price: 2000,
  },
  {
    id: 3,
    type: "won",
    name: "원 할인",
    price: 3500,
  },
  {
    id: 4,
    type: "won",
    name: "원 할인",
    price: 5000,
  },
  {
    id: 5,
    type: "won",
    name: "원 할인",
    price: 10000,
  },
  {
    id: 6,
    type: "percent",
    name: "% 할인",
    price: 5,
  },
  {
    id: 7,
    type: "percent",
    name: "% 할인",
    price: 10,
  },
  {
    id: 8,
    type: "percent",
    name: "% 할인",
    price: 30,
  },
  {
    id: 9,
    type: "percent",
    name: "% 할인",
    price: 45,
  },
  {
    id: 10,
    type: "percent",
    name: "% 할인",
    price: 50,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    coupons: couponArray,
  });
}
