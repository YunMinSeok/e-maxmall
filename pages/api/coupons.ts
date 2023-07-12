import type { NextApiRequest, NextApiResponse } from "next";

const couponArray = [
  {
    type: "won",
    name: "원 할인",
    price: 1500,
  },
  {
    type: "won",
    name: "원 할인",
    price: 2000,
  },
  {
    type: "won",
    name: "원 할인",
    price: 3500,
  },
  {
    type: "won",
    name: "원 할인",
    price: 5000,
  },
  {
    type: "won",
    name: "원 할인",
    price: 10000,
  },
  {
    type: "percent",
    name: "% 할인",
    price: 5,
  },
  {
    type: "percent",
    name: "% 할인",
    price: 10,
  },
  {
    type: "percent",
    name: "% 할인",
    price: 30,
  },
  {
    type: "percent",
    name: "% 할인",
    price: 45,
  },
  {
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
