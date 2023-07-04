import axios from "axios";

const ProductApi = () => {
  const getCoupons = async (page: number) => {
    const res = await axios.get("http://localhost:3000/api/products", {
      params: { search: { page: page } },
    });

    return res.data;
  };
};

export default ProductApi;
