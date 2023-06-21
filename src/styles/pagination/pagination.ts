import styled from "@emotion/styled";

export const PaginationWrap = styled.div`
  height: 54px;
  width: 100%;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.9);
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 0;
  border-top: 1px solid #fff;
  box-shadow: 0 -3px 3px rgba(0, 0, 0, 0.05);
  .pagination-list-wrap {
    display: inline-block;
    width: 768px;
    margin-top: 11px;
    text-align: center;
    a {
      display: inline-block;
      width: 29px;
      height: 29px;
      margin: 0 -2px;
      color: #555;
      text-align: center;
      font-size: 12px;
      font-weight: bold;
      line-height: 30px;
      vertical-align: middle;
    }
    .button {
      vertical-align: middle;
    }
  }
`;
