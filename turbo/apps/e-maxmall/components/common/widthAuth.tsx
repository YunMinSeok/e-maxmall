import { useEffect } from "react";
import { useRouter } from "next/router";

// util
import { getCookie } from "@util/cookie";

export const withAuth =
  <P extends {}>(Component: React.ComponentType<P>) =>
  (props: P) => {
    const router = useRouter();

    /* 권한 분기 */
    useEffect(() => {
      if (!getCookie("user")) {
        alert("로그인 후 이용이 가능합니다.");
        router.push(router.asPath ? `/login?returnTo=${router.asPath}` : "/login");
      }
    }, []);

    return <Component {...props} />;
  };
