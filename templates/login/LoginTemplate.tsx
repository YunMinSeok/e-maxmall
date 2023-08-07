// components
import Header from "@components/common/Header";
import { useLogin } from "@hooks/login/useLogin";
// css
import { LoginWrap } from "@styles/login/login";
import { useRef } from "react";

const LoginTemplate = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { handleLoginSubmit } = useLogin();
  return (
    <LoginWrap>
      <Header title={"로그인"} isLinkShow={false} />
      <div className="login-content">
        <div className="member-field">
          <div className="member-input-field">
            <input ref={emailRef} className="member-input" placeholder="아이디(이메일)" />
          </div>
        </div>
        <div className="member-field">
          <div className="member-input-field">
            <input ref={passwordRef} className="member-input" placeholder="비밀번호" />
          </div>
        </div>
        <div className="member-field login-button-field">
          <button
            type="submit"
            className="login-button"
            onClick={() => handleLoginSubmit(emailRef, passwordRef)}
          >
            로그인
          </button>
        </div>
      </div>
    </LoginWrap>
  );
};

export default LoginTemplate;
