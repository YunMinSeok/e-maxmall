// components
import Header from "@components/common/Header";
// css
import { LoginWrap } from "@styles/login/login";

const LoginTemplate = () => {
  return (
    <LoginWrap>
      <Header title={"로그인"} isLinkShow={false} />
      <div className="login-content">
        <div className="member-field">
          <div className="member-input-field">
            <input className="member-input" placeholder="아이디(이메일)" />
          </div>
        </div>
        <div className="member-field">
          <div className="member-input-field">
            <input className="member-input" placeholder="비밀번호" />
          </div>
        </div>
        <div className="member-field login-button-field">
          <button className="login-button">로그인</button>
        </div>
      </div>
    </LoginWrap>
  );
};

export default LoginTemplate;
