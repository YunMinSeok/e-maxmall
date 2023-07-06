import axios from "axios";

const getProduct = async (page: string) => {
  const res = await axios.get("http://localhost:3000/api/products", {
    params: { search: { page: page } },
  });

  return res.data;
};

export default getProduct;
