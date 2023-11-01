import styled from "@emotion/styled";

export const LoginWrap = styled.div`
  min-width: 290px;
  max-width: 460px;
  margin: 0px auto;
  padding: 40px 0px;
  .member-field {
    margin-top: 10px;
    border: 1px solid #ccc;
    .member-input-field {
      position: relative;
      .member-input {
        width: 100%;
        height: 48px;
        padding: 16px 0 12px;
        border: 0 none;
        margin: 0;
        box-sizing: border-box;
        background: none transparent;
        font-family: dotum, sans-serif;
        font-size: 14px;
        line-height: 20px;
        color: #111;
        font-weight: 700;
        text-indent: 12px;
      }
    }
  }

  .login-button-field {
    border: 0;
    .login-button {
      width: 100%;
      background: #346aff;
      padding: 12.5px 0;
      border-radius: 4px;
      font-size: 16px;
      box-shadow: none;
      line-height: 19px;
      color: #fff;
    }
  }
`;
