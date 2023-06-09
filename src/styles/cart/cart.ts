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
    .title {
      color: rgb(51, 51, 51);
      font-size: 28px;
      line-height: 1.15;
      letter-spacing: -0.26px;
      font-weight: 500;
    }
  }
`;

export const CartTable = styled.table`
  border-top: 0;
  border-collapse: collapse;
  border-spacing: 0;

  td {
    border-bottom: 1px solid #ddd;
    line-height: 35px;
    text-align: center;
  }

  th {
    height: 40px;
    font-size: 13px;
  }

  .none {
    display: block;
    text-indent: -9em;
    width: 0;
    height: 0;
    overflow: hidden;
    font-size: 0;
  }
  .head {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    th {
      background: #fafafa;
      text-align: center;
    }
    .all-item-select span {
      position: absolute;
    }
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
              padding-right: 5px;
              font-size: 12px;
              color: #888;
              letter-spacing: 0;
            }
            .select-select {
              display: inline-block;
              line-height: 24px;
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

export const CartCoupon = styled.div`
  position: relative;
  display: flex;
  margin: 20px 0 40px;
  padding: 20px 20px 20px 54px;
  border: 1px solid #ddd;
  border-radius: 2px;
  font-size: 14px;
  .coupon-info {
    h3 {
      margin-bottom: 20px;
    }
  }
  .coupon-select {
    display: flex;
    justify-content: center;
    margin-left: auto;
  }
`;

export const CartTotalPrice = styled.div`
  clear: both;
  border: 4px solid #c8c8c8;
  text-align: center;
  .cart-total-price__inner {
    display: inline-block;
    margin: 0 auto;
    vertical-align: top;
    em {
      padding: 0 4px 0 5px;
      font: 700 17px/17px tahoma;
      color: #111;
    }
    .price-area {
      padding: 20px 15px 18px;
      font-size: 14px;
      line-height: 17px;
      color: #555;
      text-align: center;
    }
    .symbol {
      margin: 0 11px 0 10px;
    }
    .final-order-price {
      color: #ea0000;
      font-size: 20px;
    }
  }
`;
