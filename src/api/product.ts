import axios from "axios";

export const getProduct = async (page: string) => {
  const res = await axios.get("http://localhost:3000/api/products", {
    headers: {
      "Content-Type": "application/json",
    },
    params: { page: page },
  });

  return res.data;
};
