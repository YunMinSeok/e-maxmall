// util
import { setCookie } from "@util/cookie";

// api
import { getMe } from "@api/user";

export const useLogin = () => {
  // 로그인 버튼 클릭 사용되는 함수
  const handleLoginSubmit = async () => {
    const user = await getMe();
    if (!!user) {
      setCookie("user", user.name);
    }
  };
  return { handleLoginSubmit };
};
