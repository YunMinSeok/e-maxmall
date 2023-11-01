import axios from "axios";

// 유저 정보 가져오기
export const getMe = async () => {
  const res = await axios.get("http://localhost:3000/api/user", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.data;
};
