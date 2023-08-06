import styled from "@emotion/styled";

export const HeaderWrap = styled.header`
  display: flex;
  margin-bottom: 27px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #454f5b;
  span {
    color: rgb(51, 51, 51);
    font-size: 28px;
    line-height: 1.15;
    letter-spacing: -0.26px;
    font-weight: 500;
  }
  .header-icon-wrap {
    display: flex;
    margin-left: auto;
    align-items: center;
  }
  .login-wrap {
    margin-right: 10px;
    span {
      font-size: 24px;
    }
  }
  .cart-icon {
    display: block;
  }
`;
