import { RefObject } from "react";
// util
import { setCookie } from "@util/cookie";

// api
import { getMe } from "@api/user";
import { useRouter } from "next/router";

export const useLogin = () => {
  const router = useRouter();
  // 로그인 버튼 클릭 사용되는 함수
  const handleLoginSubmit = async (
    email: RefObject<HTMLInputElement>,
    password: RefObject<HTMLInputElement>,
  ) => {
    // 이메일, 패스워드 빈값시 return
    if (!email.current!.value && !password.current!.value) {
      alert("이메일과 패스워드를 다시 한번 확인해주세요.");
      return;
    }
    // user 데이터 가져오기
    const user = await getMe();
    if (!!user) {
      // 쿠키 설정
      setCookie("user", user.name);
      router.push(router.query ? (router.query.returnTo as string) : "/products");
    }
  };
  return { handleLoginSubmit };
};
