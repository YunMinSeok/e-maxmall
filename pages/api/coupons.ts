import type { NextApiRequest, NextApiResponse } from "next";

const couponArray = [
  {
    type: "amount",
    price: 1500,
  },
  {
    type: "amount",
    price: 2000,
  },
  {
    type: "amount",
    price: 3500,
  },
  {
    type: "amount",
    price: 5000,
  },
  {
    type: "amount",
    price: 10000,
  },
  {
    type: "percent",
    price: 5,
  },
  {
    type: "percent",
    price: 10,
  },
  {
    type: "percent",
    price: 30,
  },
  {
    type: "percent",
    price: 45,
  },
  {
    type: "percent",
    price: 50,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    coupons: couponArray,
  });
}
