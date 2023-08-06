// components
import Header from "@components/common/Header";
// css
import { LoginWrap } from "@styles/login/login";

const LoginTemplate = () => {
  return (
    <LoginWrap>
      <Header title={"로그인"} isLinkShow={false} />
    </LoginWrap>
  );
};

export default LoginTemplate;
