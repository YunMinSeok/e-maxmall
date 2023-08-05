import Link from "next/link";
import Image from "next/image";

// image
import Cart from "@images/icon/shopping_cart.png";

// style
import { HeaderWrap } from "@styles/common/header";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderWrap>
      <span>{title}</span>
      <div className="header-icon-wrap">
        <Link href={"/login"} className="login-wrap">
          <span>로그인</span>
        </Link>
        <Link href={"/cart"} className="cart-icon">
          <Image src={Cart} alt="장바구니 아이콘" width={35} height={35} />
        </Link>
      </div>
    </HeaderWrap>
  );
};

export default Header;
