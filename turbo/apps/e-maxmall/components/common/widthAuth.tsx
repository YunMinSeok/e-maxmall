"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

// util
import { getCookie } from "@util/cookie";

export const withAuth =
  <P extends {}>(Component: React.ComponentType<P>) =>
  (props: P) => {
    const router = useRouter();
    const pathName = usePathname();

    /* 권한 분기 */
    useEffect(() => {
      if (!getCookie("user")) {
        alert("로그인 후 이용이 가능합니다.");
        router.push(pathName ? `/login?returnTo=${pathName}` : "/login");
      }
    }, []);

    return <Component {...props} />;
  };
