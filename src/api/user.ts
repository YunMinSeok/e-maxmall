import axios from "axios";
// 쿠폰 전체 보내기
export const getMe = async () => {
  const res = await axios.get("http://localhost:3000/api/user", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.data;
};
