import styled from "@emotion/styled";

export const CartWrap = styled.div`
  width: 1050px;
  margin: 0px auto;
  padding: 40px 0px;
  .section-title {
    margin-bottom: 27px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      color: rgb(51, 51, 51);
      font-size: 28px;
      line-height: 1.15;
      letter-spacing: -0.26px;
      font-weight: 500;
    }
  }
`;

export const CartTable = styled.table`
  width: 898px;
  border-top: 0;
  border-collapse: collapse;
  border-spacing: 0;

  td {
    border-bottom: 1px solid #ddd;
    line-height: 35px;
    text-align: center;
  }

  .none {
    display: block;
    text-indent: -9em;
    width: 0;
    height: 0;
    overflow: hidden;
    font-size: 0;
  }

  .cartTable-itemWrap {
    position: relative;
    .cart-item {
      td {
        padding: 10px 0;
      }
      .product-select-event {
        width: 50px;
        padding: 10px 0;
        overflow: hidden;
        input {
          font-size: 12px;
        }
      }
      .product-item-image {
        padding-right: 15px;
        width: 80px;
        overflow: hidden;
        img {
          vertical-align: top;
        }
      }
      .product-box {
        width: 568px;
        padding: 10px 5px 10px 0;
        text-align: left;
        vertical-align: top;
        overflow: hidden;
        .product-name-part {
          border-bottom: 1px solid #e2e5e7;
          padding-bottom: 5px;
          letter-spacing: -1px;
          .product-name {
            margin-right: 5px;
            font-weight: 700;
            font-size: 14px;
            line-height: 22px;
            color: #555;
          }
        }
        .option-item {
          width: 100%;
          padding: 4px 0;
          border-top: 0;
          float: none;
          .option-price-part {
            float: right;
            font-size: 12px;
            line-height: 24px;
            .unit-cost {
              font-size: 12px;
              color: #888;
              letter-spacing: 0;
              vertical-align: top;
            }
            .select-select {
              .quantity-select {
                width: 52px;
              }
            }
          }
        }
      }
      .unit-total-price {
        width: 88px;
        position: relative;
        line-height: normal;
        border-left: 1px solid #ddd;
        font-size: 12px;
        color: #888;
        padding: 10px 0;
        z-index: 1;
      }
    }
  }
`;
