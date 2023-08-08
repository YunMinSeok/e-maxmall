import Link from "next/link";
import Image from "next/image";

// image
import Cart from "@images/icon/shopping_cart.png";

// style
import { HeaderWrap } from "@styles/common/header";
import { useEffect, useState } from "react";
import { getCookie } from "@util/cookie";
import { useLogin } from "@hooks/login/useLogin";

interface HeaderProps {
  title: string;
  isLinkShow?: boolean;
}

const Header = ({ title, isLinkShow }: HeaderProps) => {
  const user = useState(getCookie("user")); // 유저정보 가져오기
  const { handleLogout } = useLogin();
  return (
    <HeaderWrap>
      <span>{title}</span>
      {isLinkShow && (
        <div className="header-icon-wrap">
          {user[0] ? (
            <>
              <div className="login-wrap">
                <span>{user[0]}</span>
              </div>
              <button type="button" onClick={handleLogout}>
                로그아웃
              </button>
            </>
          ) : (
            <Link href={"/login"} className="login-wrap">
              <span>로그인</span>
            </Link>
          )}
          <Link href={"/cart"} className="cart-icon">
            <Image src={Cart} alt="장바구니 아이콘" width={35} height={35} />
          </Link>
        </div>
      )}
    </HeaderWrap>
  );
};

export default Header;

Header.defaultProps = {
  isLinkShow: true,
};
