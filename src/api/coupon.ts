import axios from "axios";

export const getCoupon = async () => {
  const res = await axios.get("http://localhost:3000/api/coupons", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log("1", res.data);
  return res.data.coupons;
};
